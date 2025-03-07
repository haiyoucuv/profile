import { WindowInfo } from "./Window/Window.tsx";

export class WindowManager {
    private static _ins: WindowManager;
    private maxZIndex: number = 1;
    private windows: Map<string, WindowInfo> = new Map();
    private windowRefs: Map<string, any> = new Map();
    private listeners: Set<() => void> = new Set();

    private constructor() {
    }

    public static ins(): WindowManager {
        if (!WindowManager._ins) {
            WindowManager._ins = new WindowManager();
        }
        return WindowManager._ins;
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

    public registerWindow(id: string, info: WindowInfo, ref?: any): void {
        this.windows.set(id, info);
        if (ref) {
            this.windowRefs.set(id, ref);
        }
        this.notify();
    }

    public unregisterWindow(id: string): void {
        this.windows.delete(id);
        this.windowRefs.delete(id);
        this.notify();
    }

    public getWindows(): Map<string, WindowInfo> {
        return this.windows;
    }

    public getWindowRef(id: string): any {
        return this.windowRefs.get(id);
    }
}