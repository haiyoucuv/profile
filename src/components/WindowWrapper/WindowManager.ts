import { IWindowOptions, Window } from "./Window/Window.ts";
import styles from './WindowManager.module.less';


export class WindowManager {
    private static _ins: WindowManager;
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
        document.body.appendChild(this.container);
        this.container.id = "window-container";
        this.container.className = styles.windowContainer;

        document.body.appendChild(this.pointerMask);
        this.pointerMask.id = "pointer-mask";
        this.pointerMask.className = styles.pointerMask;
        this.enableMask = false;
    }

    public static get ins(): WindowManager {
        return WindowManager._ins || (WindowManager._ins = new WindowManager());
    }

    static _id = 0;
    static getNewId(): string {
        return `window_${WindowManager._id++}`;
    }

    showWindow(children: HTMLElement | string, options: IWindowOptions) {
        const window = new Window(children, options);

        this.container.appendChild(window.body);

        return window;
    }

    closeWindow(window: Window) {
        window.body.remove();
        window.destroy();
        this.unregisterWindow(window.id);
    }

    public subscribe(listener: () => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notify(): void {
        this.listeners.forEach(listener => listener());
    }

    public getNextZIndex(): number {
        return ++this.maxZIndex;
    }

    public registerWindow(id: string, window: Window): void {
        this.windows.set(id, window);
        this.notify();
    }

    public unregisterWindow(id: string): void {
        this.windows.delete(id);
        this.notify();
    }

    public getWindows(): Map<string, Window> {
        return this.windows;
    }

    public getWindow(id: string): Window {
        return this.windows.get(id);
    }

}