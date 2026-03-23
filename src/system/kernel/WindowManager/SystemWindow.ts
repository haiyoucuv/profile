import Emittery from 'emittery';

export interface WindowOptions {
    title: string;
    icon?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    frameless?: boolean;
    alwaysOnTop?: boolean;
    alwaysOnBottom?: boolean;
}

export class SystemWindow extends Emittery<{ [key: symbol]: any }> {
    static EventType = {
        ON_CLOSE: Symbol('onSystemWindowClose'),
        ON_RESIZE: Symbol('onSystemWindowResize'),
        ON_FOCUS: Symbol('onSystemWindowFocus'),
        ON_BLUR: Symbol('onSystemWindowBlur'),
        ON_MINIMIZE: Symbol('onSystemWindowMinimize'),
        ON_RESTORE: Symbol('onSystemWindowRestore'),
        ON_CONFIG_CHANGE: Symbol('onConfigChange'), 
    }

    readonly id: string;
    
    // 窗口状态
    title: string;
    icon?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isMaximized = false;
    isMinimized = false;
    zIndex = 0;
    resizable = true;
    minimizable = true;
    maximizable = true;
    frameless = false;
    alwaysOnTop = false;
    alwaysOnBottom = false;

    private _resolveReady!: (container: any) => void;
    private _readyPromise: Promise<any>;

    constructor(id: string, options: WindowOptions) {
        super();
        this.id = id;
        this._readyPromise = new Promise(resolve => {
            this._resolveReady = resolve;
        });
        this.title = options.title;
        this.icon = options.icon;
        this.x = options.x ?? 100;
        this.y = options.y ?? 100;
        this.width = options.width ?? 800;
        this.height = options.height ?? 600;
        this.resizable = options.resizable ?? true;
        this.minimizable = options.minimizable ?? true;
        this.maximizable = options.maximizable ?? true;
        this.frameless = options.frameless === true;
        this.alwaysOnTop = options.alwaysOnTop === true;
        this.alwaysOnBottom = options.alwaysOnBottom === true;
    }

    attachContent(container: any) {
        this._resolveReady(container);
    }

    whenReady(): Promise<any> {
        return this._readyPromise;
    }

    update(options: Partial<WindowOptions>) {
        Object.assign(this, options);
        this.emit(SystemWindow.EventType.ON_CONFIG_CHANGE, options);
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.emit(SystemWindow.EventType.ON_CONFIG_CHANGE, { x, y });
    }

    resize(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.emit(SystemWindow.EventType.ON_RESIZE, { width, height });
        this.emit(SystemWindow.EventType.ON_CONFIG_CHANGE, { width, height });
    }

    focus() {
        this.emit(SystemWindow.EventType.ON_FOCUS);
    }

    blur() {
        this.emit(SystemWindow.EventType.ON_BLUR);
    }

    close() {
        this.emit(SystemWindow.EventType.ON_CLOSE);
    }

    setMaximized(maximized: boolean) {
        this.isMaximized = maximized;
        this.emit(SystemWindow.EventType.ON_CONFIG_CHANGE, { isMaximized: maximized });
    }

    setMinimized(minimized: boolean) {
        if (this.isMinimized === minimized) return;
        this.isMinimized = minimized;
        this.emit(SystemWindow.EventType.ON_CONFIG_CHANGE, { isMinimized: minimized });
        if (minimized) {
            this.emit(SystemWindow.EventType.ON_MINIMIZE);
        } else {
            this.emit(SystemWindow.EventType.ON_RESTORE);
        }
    }
}
