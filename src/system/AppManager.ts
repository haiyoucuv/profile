import { VirtualApp } from "./VirtualApp.ts";
import { AppRegistry } from "./AppRegistry.ts";

export type TAppConstructor<T extends VirtualApp> = new (...args: any[]) => T;
import { SystemContext } from "./SystemContext.ts";
import { WindowManager } from "@system";
import { FileSystem } from "./FileSystem.ts";
import Emittery from 'emittery';

export class AppManager extends Emittery<{ [key: symbol]: any }> {

    static EventType = {
        ON_APP_CHANGE: Symbol('onAppChange'),
        ON_APP_LOADING: Symbol('onAppLoading'),
        ON_APP_LOADED: Symbol('onAppLoaded'),
    }

    private static _ins: AppManager;

    public static get ins(): AppManager {
        return AppManager._ins || (AppManager._ins = new AppManager());
    }

    private constructor() {
        super();
    }

    private createScopedFileSystem(appId: string) {
        const privatePhysicalRoot = `/apps/${appId}`;
        const sharedPhysicalRoot = `/shared`;
        const appVirtualRoot = `/${appId}`;

        const resolveToReal = (p: string) => {
            let path = p.replace(/\\/g, '/');
            if (!path.startsWith('/')) path = '/' + path;
            
            // 路径规范化 (处理 .. 和 .)
            const parts = path.split('/').filter(Boolean);
            const stack: string[] = [];
            for (const part of parts) {
                if (part === '.') continue;
                if (part === '..') {
                    if (stack.length > 0) stack.pop();
                } else {
                    stack.push(part);
                }
            }
            const normalizedPath = '/' + stack.join('/');

            // 根目录特殊处理
            if (normalizedPath === '/') return privatePhysicalRoot; // 默认读写行为，但 readdir 会被拦截

            // 1. 匹配共享目录
            if (normalizedPath.startsWith(sharedPhysicalRoot + '/') || normalizedPath === sharedPhysicalRoot) {
                return normalizedPath;
            }

            // 2. 匹配 App 虚拟主目录
            if (normalizedPath.startsWith(appVirtualRoot + '/') || normalizedPath === appVirtualRoot) {
                const subPath = normalizedPath.slice(appVirtualRoot.length);
                return `${privatePhysicalRoot}${subPath}`.replace(/\/+$/, '') || privatePhysicalRoot;
            }

            throw new Error(`Access Denied: Path ${p} is outside of allowed scopes (/${appId} or /shared)`);
        };

        return {
            writeFile: (path: string, content: string | Blob) => FileSystem.writeFile(resolveToReal(path), content),
            readFile: (path: string) => FileSystem.readFile(resolveToReal(path)),
            mkdir: (path: string, options?: any) => FileSystem.mkdir(resolveToReal(path), options),
            readdir: async (path: string) => {
                // 如果是请求根目录，返回虚拟节点
                if (path === '/' || path === '') {
                    return [appId, 'shared'];
                }
                const realPath = resolveToReal(path);
                return FileSystem.readdir(realPath);
            },
            stat: (path: string) => FileSystem.stat(resolveToReal(path)),
            exists: async (path: string) => {
                if (path === '/' || path === appVirtualRoot || path === sharedPhysicalRoot) return true;
                return FileSystem.exists(resolveToReal(path));
            },
            unlink: (path: string) => FileSystem.unlink(resolveToReal(path)),
            rmdir: (path: string, options?: any) => FileSystem.rmdir(resolveToReal(path), options),
        };
    }

    private _apps: Map<TAppConstructor<VirtualApp>, VirtualApp> = new Map();
    private _appsById: Map<string, VirtualApp> = new Map();
    private _launchingTasks: Set<string> = new Set();

    get apps() {
        return this._apps;
    }

    /**
     * 通过应用ID启动应用（支持懒加载）
     * @param appId 应用ID
     * @param args 传递给App构造函数的参数
     */
    async launchAppById(appId: string, ...args: any[]): Promise<VirtualApp | null> {
        // 检查应用是否已经在运行
        const runningApp = this._appsById.get(appId);
        if (runningApp) {
            console.warn(`App ${appId} is already running`);
            return runningApp;
        }

        // 检查是否正在启动中，防止并发重入引发多个同样的实例
        if (this._launchingTasks.has(appId)) {
            return null;
        }

        // 发出加载开始事件
        this.emit(AppManager.EventType.ON_APP_LOADING, appId);
        this._launchingTasks.add(appId);

        try {
            // 从注册表加载应用类
            const AppClass = await AppRegistry.ins.loadApp(appId);
            if (!AppClass) {
                console.error(`Failed to load app ${appId}`);
                return null;
            }

            // 创建应用实例
            const app = new (AppClass as any)(...args);
            const manifest = AppRegistry.ins.getManifest(appId);
            if (manifest) {
                app.config = manifest.config;
            }

            // 注入上下文 SystemContext
            const sys: SystemContext = {
                window: {
                    create: (children, options) => {
                        const win = WindowManager.ins.createWindow(children, options);
                        app.registerWindow(win);
                        return win;
                    },
                    close: (win) => {
                        WindowManager.ins.closeWindow(win);
                    }
                },
                fs: this.createScopedFileSystem(appId),
                exit: () => {
                    this.exitAppById(appId);
                }
            };
            app.sys = sys;

            this._apps.set(AppClass as any, app);
            this._appsById.set(appId, app);

            app.launch(sys);
            this._launchingTasks.delete(appId);
            this.emit(AppManager.EventType.ON_APP_CHANGE);
            this.emit(AppManager.EventType.ON_APP_LOADED, { appId, app });

            return app;
        } catch (error) {
            console.error(`Failed to launch app ${appId}:`, error);
            this._launchingTasks.delete(appId);
            // 确保移除加载状态
            this.emit(AppManager.EventType.ON_APP_LOADED, { appId });
            return null;
        }
    }

    /**
     * 启动一个App
     * @param AppClass 要启动的App类
     * @param args 传递给App构造函数的参数
     */
    launchApp<T extends VirtualApp, Args extends any[]>(AppClass: TAppConstructor<T>, ...args: Args) {
        if (this.apps.has(AppClass)) {
            console.warn(`App ${AppClass} is already running`);
            return;
        }
        const app = new AppClass(...args);
        const appId = (AppClass as any).id;
        const manifest = AppRegistry.ins.getManifest(appId);
        if (manifest) {
            app.config = manifest.config;
        }

        this.apps.set(AppClass, app);
        this._appsById.set((AppClass as any).id, app);

        const sys: SystemContext = {
            window: {
                create: (children, options) => {
                    const win = WindowManager.ins.createWindow(children, options);
                    app.registerWindow(win);
                    return win;
                },
                close: (win) => {
                    WindowManager.ins.closeWindow(win);
                }
            },
            fs: this.createScopedFileSystem(appId),
            exit: () => {
                this.exitAppById(appId);
            }
        };
        app.sys = sys;

        app.launch(sys);
        this.emit(AppManager.EventType.ON_APP_CHANGE);
    }

    /**
     * 退出一个App
     * @param AppClass
     */
    exitApp(AppClass: TAppConstructor<VirtualApp>) {
        const app = this.apps.get(AppClass);
        if (!app) {
            console.warn(`App ${AppClass} is not running`);
            return;
        }

        app.exit();
        this.apps.delete(AppClass);
        this._appsById.delete((AppClass as any).id);
        this.emit(AppManager.EventType.ON_APP_CHANGE);
    }

    /**
     * 通过应用ID退出应用
     * @param appId 应用ID
     */
    exitAppById(appId: string) {
        const app = this._appsById.get(appId);
        if (!app) {
            console.warn(`App ${appId} is not running`);
            return;
        }

        app.exit();
        this._appsById.delete(appId);
        // 从 _apps 中删除
        for (const [AppClass, appInstance] of this.apps.entries()) {
            if (appInstance === app) {
                this.apps.delete(AppClass);
                break;
            }
        }
        this.emit(AppManager.EventType.ON_APP_CHANGE);
    }

    getApp(AppClass: TAppConstructor<VirtualApp>) {
        return this.apps.get(AppClass);
    }

    /**
     * 通过应用ID获取应用
     * @param appId 应用ID
     */
    getAppById(appId: string): VirtualApp | undefined {
        return this._appsById.get(appId);
    }

    /**
     * 检查App是否正在运行
     * @param AppClass
     */
    isAppRunning(AppClass: TAppConstructor<VirtualApp>): boolean {
        return this.apps.has(AppClass);
    }

    /**
     * 通过应用ID检查应用是否正在运行
     * @param appId 应用ID
     */
    isAppRunningById(appId: string): boolean {
        return this._appsById.has(appId);
    }

    /**
     * 退出所有App
     */
    exitAll() {
        this.apps.forEach((app) => {
            app.exit();
        });
        this.apps.clear();
        this._appsById.clear();
    }
}
