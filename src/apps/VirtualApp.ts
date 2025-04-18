import { Window, WindowManager } from "../components/WindowWrapper";
import Emittery from 'emittery';

export abstract class VirtualApp extends Emittery {

    static icon: string;
    static name: string;
    static id: string;

    exited = false;

    windows: Map<string, Window> = new Map<string, Window>();

    abstract launch();

    exit() {
        if(this.exited) return;
        this.exited = true;
        this.windows.forEach((window) => {
            WindowManager.ins.closeWindow(window);
        });
        this.windows.clear();
    }

}