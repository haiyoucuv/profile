import { Window, WindowOptions } from "./WindowManager/Window.ts";
import { FileSystem } from "./FileSystem.ts";

export interface SystemContext {
    window: {
        create: (children: HTMLElement | string, options: WindowOptions) => Window;
        close: (win: Window) => void;
    };
    fs: typeof FileSystem;
    exit: () => void;
}
