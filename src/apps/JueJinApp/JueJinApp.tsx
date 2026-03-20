import { VirtualApp, SystemContext } from "@system";
import { config } from "./config.ts";

export class JueJinApp extends VirtualApp {
    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    launch(sys: SystemContext) {
        window.open("https://juejin.cn/user/3923497771860231", "_blank");
        sys.exit();
    }
}