import { VirtualApp, SystemContext } from "@system";
import { config } from "./config.ts";

export class BiliBiliApp extends VirtualApp {

    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    launch(sys: SystemContext) {
        window.open("https://space.bilibili.com/43669167", "_blank");
        sys.exit();
    }

}
