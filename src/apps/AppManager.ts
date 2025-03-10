import { VirtualApp } from "../apps/VirtualApp";

type TAppConstructor = new (...args: any[]) => VirtualApp;

export class AppManager {
    private static _ins: AppManager;

    public static get ins(): AppManager {
        return AppManager._ins || (AppManager._ins = new AppManager());
    }

    private constructor() {}

    private apps: Map<TAppConstructor, VirtualApp> = new Map();

    /**
     * 启动一个App
     * @param AppClass 要启动的App类
     * @param args 传递给App构造函数的参数
     */
    launchApp<T extends VirtualApp, Args extends any[]>(AppClass: new (...args: Args) => T, ...args: Args) {
        if (this.apps.has(AppClass)) {
            console.warn(`App ${AppClass} is already running`);
            return;
        }
        const app = new AppClass(...args);

        this.apps.set(AppClass, app);
        app.launch();
    }

    /**
     * 退出一个App
     * @param appId 要退出的App的ID
     */
    exitApp(AppClass: TAppConstructor) {
        const app = this.apps.get(AppClass);
        if (!app) {
            console.warn(`App ${AppClass} is not running`);
            return;
        }

        app.exit();
        this.apps.delete(AppClass);
    }

    /**
     * 获取所有正在运行的App
     */
    getRunningApps() {
        return this.apps;
    }

    /**
     * 检查App是否正在运行
     * @param AppClass
     */
    isAppRunning(AppClass: TAppConstructor): boolean {
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