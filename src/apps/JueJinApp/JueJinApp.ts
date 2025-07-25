import { VirtualApp } from "../VirtualApp.ts";
import { AppManager } from "../AppManager.ts";

import juejinIcon from "../../assets/icon/juejin.svg";

export class JueJinApp extends VirtualApp {

    static icon: string = juejinIcon;
    static name: string = "JueJinApp";
    static id = "JueJinApp";

    launch() {
        window.open("https://juejin.cn/user/3923497771860231", "_blank");
        AppManager.ins.exitApp(JueJinApp);
    }

}
