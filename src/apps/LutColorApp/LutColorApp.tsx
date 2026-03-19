import React from "react";
import { VirtualApp } from "../VirtualApp.ts";
import { createRoot, Root } from "react-dom/client";
import { config } from "./config.ts";
import { SystemContext } from "../SystemContext.ts";

import { LutColor } from "./LutColor.tsx";

export class LutColorApp extends VirtualApp {
    static icon: string = config.icon;
    static name = config.name;
    static id = config.id;

    private appRoot: Root | null = null;

    launch(sys: SystemContext) {
        this.openMainWindow(sys);
    }

    private openMainWindow(sys: SystemContext) {
        const window = sys.window.create("", {
            title: config.name,
            icon: config.icon,
            x: config.defaultWindow.x || 100,
            y: config.defaultWindow.y || 50,
            width: config.defaultWindow.width,
            height: config.defaultWindow.height,
        });

        this.appRoot = createRoot(window.content);
        this.appRoot.render(React.createElement(LutColor));
    }

    onExit() {
        if (this.appRoot) {
            this.appRoot.unmount();
            this.appRoot = null;
        }
    }
}
