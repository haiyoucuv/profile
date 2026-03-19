import { IWindowOptions, Window } from "../components/WindowWrapper/Window/Window.ts";

export interface SystemContext {
    window: {
        create: (children: HTMLElement | string, options: IWindowOptions) => Window;
        close: (win: Window) => void;
    };
    exit: () => void;
}
