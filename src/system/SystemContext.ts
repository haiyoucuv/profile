import { IWindowOptions, Window } from "../components/WindowWrapper/Window/Window.ts";
import { FileSystem } from "./FileSystem.ts";

export interface SystemContext {
    window: {
        create: (children: HTMLElement | string, options: IWindowOptions) => Window;
        close: (win: Window) => void;
    };
    fs: typeof FileSystem;
    exit: () => void;
}
