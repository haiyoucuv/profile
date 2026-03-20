import { Window } from "./WindowManager/Window.ts";
import Emittery from 'emittery';
import { SystemContext } from "./SystemContext.ts";
import { AppConfig } from "./AppConfig.ts";

export abstract class VirtualApp extends Emittery<{ [key: symbol]: any }> {

    static icon: string;
    static name: string;
    static id: string;

    exited = false;

    windows: Map<string, Window> = new Map<string, Window>();
    sys: SystemContext = null as any;
    config: AppConfig = null as any;

    get homeDir() {
        return `/${this.config.id}`;
    }

    abstract launch(sys: SystemContext): void;

    onExit() {

    }

    exit() {
        if(this.exited) return;
        this.exited = true;
        this.onExit();
        this.windows.forEach((window) => {
            this.sys.window.close(window);
        });
        this.windows.clear();
        this.clearListeners();
    }
    
    public registerWindow(win: Window) {
        this.windows.set(win.id, win);
        win.on(Window.EventType.ON_CLOSE, () => {
            this.windows.delete(win.id);
            if (this.windows.size === 0) {
                this.sys.exit();
            }
        });
    }

}
