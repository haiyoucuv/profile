import { Window, WindowOptions } from "./Window.ts";
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
    private _windowsMap: Map<string, Window> = new Map();
    private _zIndexBase = 1000;

    createWindow(children: HTMLElement | string = "", options: WindowOptions): Window {
        const id = `win_${this._idCount++}`;
        const win = new Window(id, options);
        
        if (children instanceof HTMLElement) {
            win.content.appendChild(children);
        } else if (typeof children === 'string' && children !== "") {
            win.content.innerText = children;
        }
        win.zIndex = this._zIndexBase++;
        
        this._windowsMap.set(id, win);

        // 基础逻辑绑定
        win.on(Window.EventType.ON_CLOSE, () => {
            this._windowsMap.delete(id);
            this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
        });

        win.on(Window.EventType.ON_FOCUS, () => {
            win.zIndex = this._zIndexBase++;
            this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
        });

        this.emit(WindowManager.EventType.ON_WINDOW_LIST_CHANGE);
        return win;
    }

    closeWindow(win: Window) {
        win.close();
    }

    getWindows(): Window[] {
        // 返回稳定的顺序（如创建顺序），防止 DOM 节点移动导致 iframe 刷新
        // 叠层顺序由 zIndex 属性通过 CSS 控制
        return Array.from(this._windowsMap.values());
    }

    getWindowById(id: string): Window | undefined {
        return this._windowsMap.get(id);
    }
}
