import { VirtualApp } from "../VirtualApp.ts";
import bilibili from "../../assets/icon/bilibili.svg";
import { AppManager } from "../AppManager.ts";

export class BiliBiliApp extends VirtualApp {

    static icon: string = bilibili;
    static name: string = "BiliBiliApp";
    static id = "BiliBiliApp";

    launch() {
        window.open("https://space.bilibili.com/43669167", "_blank");
        AppManager.ins.exitApp(BiliBiliApp);
    }

}
