import { IWindowOptions, Window } from "./Window/Window.ts";
import styles from './WindowManager.module.less';
import Emittery from 'emittery';

export class WindowManager extends Emittery{

    static EventType = {
        ON_WINDOW_CHANGE: Symbol('onWindowChange'),
    }

    private static _ins: WindowManager;

    public static get ins(): WindowManager {
        return WindowManager._ins || (WindowManager._ins = new WindowManager());
    }

    static _id = 0;

    static getNewId(): string {
        return `window_${WindowManager._id++}`;
    }

    private maxZIndex: number = 1;
    private windows: Map<string, Window> = new Map();
    listeners: Set<() => void> = new Set();

    container: HTMLDivElement = (document.getElementById("window-container") || document.createElement("div")) as HTMLDivElement;
    pointerMask: HTMLDivElement = (document.getElementById("pointer-mask") || document.createElement("div")) as HTMLDivElement;

    _enableMask = false;
    set enableMask(enable: boolean) {
        this._enableMask = enable;
        this.pointerMask.style.display = enable ? 'block' : 'none';
    }

    get enableMask() {
        return this._enableMask;
    }

    private constructor() {
        super();
        document.body.appendChild(this.container);
        this.container.id = "window-container";
        this.container.className = styles.windowContainer;

        document.body.appendChild(this.pointerMask);
        this.pointerMask.id = "pointer-mask";
        this.pointerMask.className = styles.pointerMask;
        this.enableMask = false;
    }

    showWindow(children: HTMLElement | string, options: IWindowOptions) {
        const window = new Window(children, options);

        this.container.appendChild(window.body);

        this.emit(WindowManager.EventType.ON_WINDOW_CHANGE);

        return window;
    }

    closeWindow(window: Window) {
        window.body.remove();
        window.destroy();
        this.unregisterWindow(window.id);
        this.emit(WindowManager.EventType.ON_WINDOW_CHANGE);
    }

    public getNextZIndex(): number {
        return ++this.maxZIndex;
    }

    public registerWindow(id: string, window: Window): void {
        this.windows.set(id, window);
    }

    public unregisterWindow(id: string): void {
        this.windows.delete(id);
    }
    public getWindows(): Map<string, Window> {
        return this.windows;
    }

    public getWindow(id: string): Window {
        return this.windows.get(id);
    }

}