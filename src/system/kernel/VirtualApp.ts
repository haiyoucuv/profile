import { SystemWindow } from "./WindowManager/SystemWindow.ts";
import Emittery from 'emittery';
import { SystemContext } from "./SystemContext.ts";
import { AppConfig } from "./AppConfig.ts";

export abstract class VirtualApp extends Emittery<{ [key: symbol]: any }> {

    static icon: string;
    static name: string;
    static id: string;

    exited = false;

    windows: Map<string, SystemWindow> = new Map<string, SystemWindow>();
    sys: SystemContext = null as any;
    config: AppConfig = null as any;
    private _isInBackground = false;

    onForeground() {}
    onBackground() {}
    onFocus(win: SystemWindow) {}
    onBlur(win: SystemWindow) {}
    onWindowMinimize(win: SystemWindow) {}
    onWindowRestore(win: SystemWindow) {}

    private checkBackgroundState() {
        if (this.windows.size === 0) return;
        const allMinimized = Array.from(this.windows.values()).every(w => w.isMinimized);
        if (allMinimized && !this._isInBackground) {
            this._isInBackground = true;
            this.onBackground();
            console.log(`[${(this.constructor as any).id}] Entered Background`);
        } else if (!allMinimized && this._isInBackground) {
            this._isInBackground = false;
            this.onForeground();
            console.log(`[${(this.constructor as any).id}] Entered Foreground`);
        }
    }

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
    
    public registerWindow(win: SystemWindow) {
        this.windows.set(win.id, win);
        
        win.on(SystemWindow.EventType.ON_FOCUS, () => {
            this.onFocus(win);
            console.log(`[${(this.constructor as any).id}] onFocus ${win.id}`);
        });
        
        win.on(SystemWindow.EventType.ON_BLUR, () => {
            this.onBlur(win);
            console.log(`[${(this.constructor as any).id}] onBlur ${win.id}`);
        });
        
        win.on(SystemWindow.EventType.ON_MINIMIZE, () => {
            this.onWindowMinimize(win);
            this.checkBackgroundState();
        });
        
        win.on(SystemWindow.EventType.ON_RESTORE, () => {
            this.onWindowRestore(win);
            this.checkBackgroundState();
        });

        win.on(SystemWindow.EventType.ON_CLOSE, () => {
            this.windows.delete(win.id);
            this.checkBackgroundState();
            if (this.windows.size === 0) {
                this.sys.exit();
            }
        });

        // Newly created window will usually be in foreground
        this.checkBackgroundState();
    }

}
