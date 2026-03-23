import { SystemWindow, WindowOptions } from "./SystemWindow.ts";
import Emittery from 'emittery';

export class WindowManager extends Emittery<{ [key: symbol]: any }> {
    static EventType = {
        ON_WINDOW_LIST_CHANGE: Symbol('onWindowListChange'),
    }

    private static _ins: WindowManager;
    static get ins(): WindowManager {
        return WindowManager._ins || (WindowManager._ins = new WindowManager());
    }

    private _idCount = 0;
    private _windowsMap: Map<string, SystemWindow> = new Map();
    private _zIndexBase = 1000;
    private _focusedWindowId: string | null = null;

    createWindow(options: WindowOptions): SystemWindow {
        const id = `win_${this._idCount++}`;
        const win = new SystemWindow(id, options);
        
        if (win.alwaysOnTop) {
            win.zIndex = 99999;
        } else if (win.alwaysOnBottom) {
            win.zIndex = 0;
        } else {
            win.zIndex = this._zIndexBase++;
        }
        
        this._windowsMap.set(id, win);

        // 基础逻辑绑定
        win.on(SystemWindow.EventType.ON_CLOSE, () => {
            if (this._focusedWindowId === id) {
                this._focusedWindowId = null;
            }
            this._windowsMap.delete(id);
            this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
        });

        win.on(SystemWindow.EventType.ON_FOCUS, () => {
            if (this._focusedWindowId && this._focusedWindowId !== id) {
                const prevWin = this.getWindowById(this._focusedWindowId);
                if (prevWin) {
                    prevWin.blur();
                }
            }
            this._focusedWindowId = id;

            if (!win.alwaysOnTop && !win.alwaysOnBottom) {
                win.zIndex = this._zIndexBase++;
                this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
            }
        });

        this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
        return win;
    }

    closeWindow(win: SystemWindow) {
        win.close();
    }

    getWindows(): SystemWindow[] {
        // 返回稳定的顺序（如创建顺序），防止 DOM 节点移动导致 iframe 刷新
        // 叠层顺序由 zIndex 属性通过 CSS 控制
        return Array.from(this._windowsMap.values());
    }

    getWindowById(id: string): SystemWindow | undefined {
        return this._windowsMap.get(id);
    }
}
