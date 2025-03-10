import { EventDispatcher } from "../global/event";
import { Window, WindowManager } from "../components/WindowWrapper";

export abstract class VirtualApp extends EventDispatcher {

    exited = false;

    icon: string;
    id: string;

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