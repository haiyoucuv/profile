import { Window, WindowManager } from "../components/WindowWrapper";
import Emittery from 'emittery';

export abstract class VirtualApp extends Emittery {

    static icon: string;
    static name: string;
    static id: string;

    exited = false;

    windows: Map<string, Window> = new Map<string, Window>();

    abstract launch();

    onExit() {

    }

    exit() {
        if(this.exited) return;
        this.exited = true;
        this.onExit();
        this.windows.forEach((window) => {
            window.isValid && WindowManager.ins.closeWindow(window);
        });
        this.windows.clear();
    }

}
