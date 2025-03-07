import { Window } from "./Window/Window.tsx";

export class WindowManager {
    private static _ins: WindowManager;
    private maxZIndex: number = 1;
    private windows: Map<string, Window> = new Map();
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

    static _id = 0;
    static getNewId(): string {
        return `window_${WindowManager._id++}`;
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
        this.windowRefs.delete(id);
        this.notify();
    }

    public getWindows(): Map<string, Window> {
        return this.windows;
    }

    public getWindow(id: string): Window {
        return this.windows.get(id);
    }
}