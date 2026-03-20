import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "../../editor/Editor.tsx";
import React from "react";
import d3 from "../../assets/icon/3D.svg";
import { config } from "./config.ts";

import template from '../../appTemplate/index.html?raw';
import { Builder } from "../../Builder/Builder.ts";


export class EditorApp extends VirtualApp {

    static icon: string = config.icon;
    static name = config.name;
    static id = config.id;

    editorRoot: Root = null;
    iframe: HTMLIFrameElement = null;

    compiledCode = '';

    launch(sys: SystemContext) {
        this.openCodeWindow(sys);
        this.openRenderer(sys);
        this.buildOnStart();
    }

    async buildOnStart() {
        await Builder.ins.build();
    }

    openCodeWindow(sys: SystemContext) {
        const codeWindow = sys.window.create("", {
            title: config.name, 
            icon: config.icon,
            x: config.defaultWindow.x || 25, 
            y: config.defaultWindow.y || 25,
            width: config.defaultWindow.width, 
            height: config.defaultWindow.height,
        });

        this.editorRoot = createRoot(codeWindow.content);
        this.editorRoot.render(React.createElement(Editor));
    }

    openRenderer(sys: SystemContext) {
        this.iframe = document.createElement("iframe");
        const iframeWindow = sys.window.create(this.iframe, {
            title: "Render", icon: d3,
            x: 75, y: 100,
            width: 900, height: 812,
        });

        this.iframe.srcdoc = template;
        window.addEventListener('message', this.handleMessage);

        Builder.ins.on(Builder.EventType.CODE_COMPILED, this.onCodeCompiled);
    }

    onCodeCompiled = (code: string) => {
        this.compiledCode = code;
        this.iframe.contentWindow.location.reload();
    }

    handleMessage = (e) => {
        if (e.data?.type === 'PREVIEW_LOADED') {
            const script = this.iframe.contentWindow.document.createElement("script");
            script.type = "module";
            script.text = this.compiledCode;
            this.iframe.contentWindow.document.body.appendChild(script);
        }
    }



    onExit() {
        this.editorRoot.unmount();
        window.removeEventListener('message', this.handleMessage);
        Builder.ins.off(Builder.EventType.CODE_COMPILED, this.onCodeCompiled);
    }

}
