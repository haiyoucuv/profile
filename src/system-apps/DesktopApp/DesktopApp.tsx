import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Desktop } from "./view/Desktop.tsx";
import React from 'react';

export class DesktopApp extends VirtualApp {
    static id = 'system.desktop';
    static name = 'Desktop';
    root: Root | null = null;
    
    async launch(sys: SystemContext) {
        const win = sys.window.create({
            title: 'Desktop',
            frameless: true,
            alwaysOnBottom: true,
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        
        const container = await win.whenReady();
        
        const handleResize = () => {
            win.resize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        
        this.root = createRoot(container);
        this.root.render(
            React.createElement(Desktop, { sys })
        );
    }
}
