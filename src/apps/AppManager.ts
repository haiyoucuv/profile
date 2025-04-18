import { VirtualApp } from "./VirtualApp.ts";

export type TAppConstructor<T extends VirtualApp> = new (...args: any[]) => T;
import Emittery from 'emittery';

export class AppManager extends Emittery{

    static EventType = {
        ON_APP_CHANGE: Symbol('onAppChange'),
    }

    private static _ins: AppManager;

    public static get ins(): AppManager {
        return AppManager._ins || (AppManager._ins = new AppManager());
    }

    private constructor() {
        super();
    }

    private _apps: Map<TAppConstructor<VirtualApp>, VirtualApp> = new Map();

    get apps() {
        return this._apps;
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
        this.emit(AppManager.EventType.ON_APP_CHANGE);
    }

    getApp(AppClass: TAppConstructor<VirtualApp>) {
        return this.apps.get(AppClass);
    }

    /**
     * 检查App是否正在运行
     * @param AppClass
     */
    isAppRunning(AppClass: TAppConstructor<VirtualApp>): boolean {
        return this.apps.has(AppClass);
    }

    /**
     * 退出所有App
     */
    exitAll() {
        this.apps.forEach((app) => {
            app.exit();
        });
        this.apps.clear();
    }
}
