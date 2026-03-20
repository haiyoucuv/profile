import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { config } from "./config.ts";
import { NerveCat } from "./NerveCat.tsx";

export class NerveCatApp extends VirtualApp {

    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    root: Root = null;

    launch(sys: SystemContext) {
        this.openWindow(sys);
    }

    openWindow(sys: SystemContext) {
        const window = sys.window.create("", {
            title: config.name, 
            icon: config.icon,
            x: config.defaultWindow.x || 100, 
            y: config.defaultWindow.y || 100,
            width: config.defaultWindow.width, 
            height: config.defaultWindow.height,
        });

        this.root = createRoot(window.content);
        this.root.render(React.createElement(NerveCat));
    }

}
