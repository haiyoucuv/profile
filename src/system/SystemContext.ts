import { Window, WindowOptions } from "./WindowManager/Window.ts";
import { FileSystem } from "./FileSystem.ts";

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
        create: (children: HTMLElement | string, options: WindowOptions) => Window;
        close: (win: Window) => void;
    };
    fs: IFileSystem;
    exit: () => void;
}
