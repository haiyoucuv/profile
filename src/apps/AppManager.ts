import { VirtualApp } from "./VirtualApp.ts";
import { AppRegistry } from "./AppRegistry.ts";

export type TAppConstructor<T extends VirtualApp> = new (...args: any[]) => T;
import Emittery from 'emittery';

export class AppManager extends Emittery {

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

    private _apps: Map<TAppConstructor<VirtualApp>, VirtualApp> = new Map();
    private _appsById: Map<string, VirtualApp> = new Map();

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

        // 发出加载开始事件
        this.emit(AppManager.EventType.ON_APP_LOADING, appId);

        try {
            // 从注册表加载应用类
            const AppClass = await AppRegistry.ins.loadApp(appId);
            if (!AppClass) {
                console.error(`Failed to load app ${appId}`);
                return null;
            }

            // 创建应用实例
            const app = new (AppClass as any)(...args);
            this._apps.set(AppClass as any, app);
            this._appsById.set(appId, app);

            app.launch();
            this.emit(AppManager.EventType.ON_APP_CHANGE);
            this.emit(AppManager.EventType.ON_APP_LOADED, { appId, app });

            return app;
        } catch (error) {
            console.error(`Failed to launch app ${appId}:`, error);
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

        this.apps.set(AppClass, app);
        this._appsById.set((AppClass as any).id, app);
        app.launch();
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
