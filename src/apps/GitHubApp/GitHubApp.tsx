import { VirtualApp } from "../VirtualApp";
import { AppManager } from "../AppManager.ts";
import { config } from "./config.ts";

export class GitHubApp extends VirtualApp {
    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    launch() {
        window.open("https://github.com/haiyoucuv", "_blank");
        AppManager.ins.exitApp(GitHubApp);
    }
}