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
}

export class Window extends Emittery<{ [key: symbol]: any }> {
    static EventType = {
        ON_CLOSE: Symbol('onWindowClose'),
        ON_RESIZE: Symbol('onWindowResize'),
        ON_FOCUS: Symbol('onWindowFocus'),
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

    // 内容持有
    readonly content: HTMLDivElement = document.createElement("div");

    constructor(id: string, options: WindowOptions) {
        super();
        this.id = id;
        this.title = options.title;
        this.icon = options.icon;
        this.x = options.x ?? 100;
        this.y = options.y ?? 100;
        this.width = options.width ?? 800;
        this.height = options.height ?? 600;
        this.resizable = options.resizable ?? true;
        this.minimizable = options.minimizable ?? true;
        this.maximizable = options.maximizable ?? true;

        // 初始化内容区域
        this.content.style.width = '100%';
        this.content.style.height = '100%';
        this.content.style.position = 'relative';
        this.content.style.overflow = 'auto';
    }

    update(options: Partial<WindowOptions>) {
        Object.assign(this, options);
        this.emit(Window.EventType.ON_CONFIG_CHANGE, options);
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.emit(Window.EventType.ON_CONFIG_CHANGE, { x, y });
    }

    resize(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.emit(Window.EventType.ON_RESIZE, { width, height });
        this.emit(Window.EventType.ON_CONFIG_CHANGE, { width, height });
    }

    focus() {
        this.emit(Window.EventType.ON_FOCUS);
    }

    close() {
        this.emit(Window.EventType.ON_CLOSE);
    }

    setMaximized(maximized: boolean) {
        this.isMaximized = maximized;
        this.emit(Window.EventType.ON_CONFIG_CHANGE, { isMaximized: maximized });
    }

    setMinimized(minimized: boolean) {
        this.isMinimized = minimized;
        this.emit(Window.EventType.ON_CONFIG_CHANGE, { isMinimized: minimized });
    }
}
