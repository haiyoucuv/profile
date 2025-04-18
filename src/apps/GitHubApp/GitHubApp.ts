import { VirtualApp } from "../VirtualApp.ts";
import github from "../../assets/icon/github.svg";

export class GitHubApp extends VirtualApp {

    static icon: string = github;
    static name: string = "GitHubApp";
    static id = "GitHubApp";

    launch() {
        window.open("https://github.com/haiyoucuv", "_blank");
        this.exit();
    }

}