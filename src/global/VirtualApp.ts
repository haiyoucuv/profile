import { EventDispatcher } from "./event";
import { Window, WindowManager } from "../components/WindowWrapper";

export abstract class VirtualApp extends EventDispatcher {

    exited = false;

    windows: Map<string, Window> = new Map<string, Window>();

    abstract launch();

    exit() {
        this.exited = true;
        this.windows.forEach((window) => {
            WindowManager.ins.closeWindow(window);
        });
        this.windows.clear();
    }

}