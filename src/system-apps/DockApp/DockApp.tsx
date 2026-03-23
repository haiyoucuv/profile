import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Docker } from "./view/Docker.tsx";
import React from 'react';

export class DockApp extends VirtualApp {
    static id = 'system.dock';
    static name = 'Dock';
    root: Root | null = null;
    
    async launch(sys: SystemContext) {
        const win = sys.window.create({
            title: 'Dock',
            frameless: true,
            alwaysOnTop: true,
            x: 0,
            y: window.innerHeight - 80,
            width: window.innerWidth,
            height: 80,
        });

        const container = await win.whenReady();
        container.style.pointerEvents = 'none'; // Pass through clicks to desktop

        const handleResize = () => {
            win.resize(window.innerWidth, 80);
            win.move(0, window.innerHeight - 80);
        };
        window.addEventListener('resize', handleResize);
        
        this.root = createRoot(container);
        this.root.render(
            React.createElement('div', { style: { pointerEvents: 'auto', width: '100%', display: 'flex', justifyContent: 'center' } }, 
                React.createElement(Docker, { sys })
            )
        );
    }
}
