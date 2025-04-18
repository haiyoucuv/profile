import { VirtualApp } from "../VirtualApp.ts";
import wechat from "../../assets/icon/wechat.svg";
import wxArticle from "../../assets/wxArticle.jpg";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { AppManager } from "../AppManager.ts";

import styles from './WeChatApp.module.less'

const WeChat: React.FC = () => {
    return <div className={styles.WeChat}>
        <img src={wxArticle}/>
    </div>
}


export class WeChatApp extends VirtualApp {

    static icon: string = wechat;
    static name: string = "WeChatApp";
    static id = "WeChatApp";

    root: Root = null;

    launch() {
        this.openWindow();
    }

    openWindow() {
        const window = WindowManager.ins.showWindow("", {
            title: "微信公众号", icon: wechat,
            x: 100, y: 100,
            width: 350, height: 550,
        });

        this.root = createRoot(window.content);
        this.root.render(React.createElement(WeChat));

        this.windows.set(window.id, window);

        window.on(Window.EventType.ON_CLOSE, this.onClickClose);
    }

    onClickClose = () => {
        AppManager.ins.exitApp(WeChatApp);
    }

}
