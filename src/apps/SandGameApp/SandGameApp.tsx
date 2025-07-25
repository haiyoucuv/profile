import { VirtualApp } from "../VirtualApp.ts";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { AppManager } from "../AppManager.ts";

import styles from './SandGameApp.module.less'

import sandGameQrCode from "../../assets/SandGameApp/qrCode.png";
import sandGameLogo from "../../assets/SandGameApp/logo.png";

const SandGame: React.FC = () => {
    return <div className={styles.SandGame}>
        <img src={sandGameQrCode}/>
    </div>
}


export class SandGameApp extends VirtualApp {

    static icon: string = sandGameLogo;
    static name: string = "SandGameApp";
    static id = "SandGameApp";

    root: Root = null;

    launch() {
        this.openWindow();
    }

    openWindow() {
        const window = WindowManager.ins.showWindow("", {
            title: "堆沙物语", icon: sandGameLogo,
            x: 150, y: 150,
            width: 350, height: 550,
        });

        this.root = createRoot(window.content);
        this.root.render(React.createElement(SandGame));

        this.windows.set(window.id, window);

        window.on(Window.EventType.ON_CLOSE, this.onClickClose);
    }

    onClickClose = () => {
        AppManager.ins.exitApp(SandGameApp);
    }

}
