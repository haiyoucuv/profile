import { SystemWindow, WindowOptions } from "./WindowManager/SystemWindow.ts";

export enum SystemEvent {
    // 进程与生命周期
    APP_LOADING = "SYS:APP_LOADING",
    APP_LOADED = "SYS:APP_LOADED",
    APP_CHANGE = "SYS:APP_CHANGE",
    APP_EXIT = "SYS:APP_EXIT",

    // 窗口系统
    WINDOW_CREATED = "SYS:WINDOW_CREATED",
    WINDOW_CLOSED = "SYS:WINDOW_CLOSED",
    WINDOW_FOCUS = "SYS:WINDOW_FOCUS",
}

export interface IFileSystem {
    writeFile(path: string, content: string | Blob): Promise<void>;
    readFile(path: string): Promise<string | Blob>;
    mkdir(path: string, options?: { recursive?: boolean }): Promise<void>;
    readdir(path: string): Promise<string[]>;
    stat(path: string): Promise<{ type: 'file' | 'dir'; size: number; ctime: number; mtime: number } | null>;
    exists(path: string): Promise<boolean>;
    unlink(path: string): Promise<void>;
    rmdir(path: string, options?: { recursive?: boolean }): Promise<void>;
}

export interface SystemContext {
    window: {
        create: (options: WindowOptions) => SystemWindow;
        close: (win: SystemWindow) => void;
    };
    fs: IFileSystem;
    ipc: {
        send: (targetAppId: string, event: SystemEvent | string, data?: any) => void;
        on: (event: SystemEvent | string, callback: (data: any, sourceAppId: string) => void) => () => void;
        off: (event: SystemEvent | string, callback: (data: any, sourceAppId: string) => void) => void;
        broadcast: (event: SystemEvent | string, data?: any) => void;
    };
    app: {
        launch: (appId: string) => Promise<any>;
        list: () => any[];
        isRunning: (appId: string) => boolean;
        getWindows: (appId: string) => SystemWindow[];
    };
    exit: () => void;
}
