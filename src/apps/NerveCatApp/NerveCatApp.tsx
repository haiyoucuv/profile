import { VirtualApp } from "../VirtualApp.ts";
import wxArticle from "../../assets/wxArticle.jpg";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { AppManager } from "../AppManager.ts";
import { config } from "./config.ts";

import styles from './NerveCatApp.module.less'

const WeChat: React.FC = () => {
    return <div className={styles.WeChat}>
        <img src={wxArticle}/>
    </div>
}

export class NerveCatApp extends VirtualApp {

    static icon: string = config.icon;
    static name: string = config.name;
    static id = config.id;

    root: Root = null;

    launch() {
        this.openWindow();
    }

    openWindow() {
        const window = WindowManager.ins.showWindow("", {
            title: config.name, 
            icon: config.icon,
            x: config.defaultWindow.x || 100, 
            y: config.defaultWindow.y || 100,
            width: config.defaultWindow.width, 
            height: config.defaultWindow.height,
        });

        this.root = createRoot(window.content);
        this.root.render(React.createElement(WeChat));

        this.windows.set(window.id, window);

        window.on(Window.EventType.ON_CLOSE, this.onClickClose);
    }

    onClickClose = () => {
        AppManager.ins.exitApp(NerveCatApp);
    }

}
