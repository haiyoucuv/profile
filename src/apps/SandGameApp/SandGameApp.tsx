import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { config } from "./config.ts";

import styles from './SandGameApp.module.less'

import sandGameQrCode from "../../assets/SandGameApp/qrCode.png";

const SandGame: React.FC = () => {
    return <div className={styles.SandGame}>
        <img src={sandGameQrCode}/>
    </div>
}

export class SandGameApp extends VirtualApp {

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
            x: config.defaultWindow.x || 150, 
            y: config.defaultWindow.y || 150,
            width: config.defaultWindow.width, 
            height: config.defaultWindow.height,
        });

        this.root = createRoot(window.content);
        this.root.render(React.createElement(SandGame));
    }

}
