import React from "react";
import { VirtualApp } from "../VirtualApp.ts";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import { config } from "./config.ts";
import { AppManager } from "../AppManager.ts";

import { LutColor } from "./LutColor.tsx";

export class LutColorApp extends VirtualApp {
    static icon: string = config.icon;
    static name = config.name;
    static id = config.id;

    private appRoot: Root | null = null;

    launch() {
        this.openMainWindow();
    }

    private openMainWindow() {
        const window = WindowManager.ins.showWindow("", {
            title: config.name,
            icon: config.icon,
            x: config.defaultWindow.x || 100,
            y: config.defaultWindow.y || 50,
            width: config.defaultWindow.width,
            height: config.defaultWindow.height,
        });

        this.appRoot = createRoot(window.content);
        this.appRoot.render(React.createElement(LutColor));

        this.windows.set(window.id, window);
        window.on(Window.EventType.ON_CLOSE, this.onClickClose);
    }

    private onClickClose = () => {
        AppManager.ins.exitApp(LutColorApp);
    };

    onExit() {
        if (this.appRoot) {
            this.appRoot.unmount();
            this.appRoot = null;
        }
    }
}
