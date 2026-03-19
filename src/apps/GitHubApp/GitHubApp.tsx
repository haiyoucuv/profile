import { VirtualApp } from "../VirtualApp";
import { SystemContext } from "../SystemContext.ts";
import { config } from "./config.ts";

export class GitHubApp extends VirtualApp {
    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    launch(sys: SystemContext) {
        window.open("https://github.com/haiyoucuv", "_blank");
        sys.exit();
    }
}