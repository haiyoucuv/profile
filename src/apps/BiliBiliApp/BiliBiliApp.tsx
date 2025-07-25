import { VirtualApp } from "../VirtualApp.ts";
import { AppManager } from "../AppManager.ts";
import { config } from "./config.ts";

export class BiliBiliApp extends VirtualApp {

    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    launch() {
        window.open("https://space.bilibili.com/43669167", "_blank");
        AppManager.ins.exitApp(BiliBiliApp);
    }

}
