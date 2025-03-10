import { VirtualApp } from "../VirtualApp.ts";
import { Window, WindowManager } from "../../components/WindowWrapper";
import vscode from "../../assets/icon/vscode.svg";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "../../editor/Editor.tsx";
import React from "react";
import d3 from "../../assets/icon/3D.svg";

import template from '../../templete/templete.html?raw';
import { EventMessage, globalMsg } from "../../global/event";
import { startBuildServer, transformCode } from "../../buider/buider.ts";


export class EditorApp extends VirtualApp {

    icon: string = vscode;

    id = "EditorApp";

    editorRoot: Root = null;
    iframe: HTMLIFrameElement = null;

    compiledCode = '';

    launch() {
        this.openCodeWindow();
        this.openRenderer();
        this.buildOnStart();
    }

    async buildOnStart() {
        await startBuildServer();
        await transformCode();
    }

    openCodeWindow() {
        const codeWindow = WindowManager.ins.showWindow("", {
            title: "Code", icon: vscode,
            x: 25, y: 25,
            width: 900, height: 750,
        });

        this.editorRoot = createRoot(codeWindow.content);
        this.editorRoot.render(React.createElement(Editor));

        codeWindow.on(Window.EventType.ON_CLOSE, () => this.exit());

        this.windows.set(codeWindow.id, codeWindow);
    }

    openRenderer() {
        this.iframe = document.createElement("iframe");
        const iframeWindow = WindowManager.ins.showWindow(this.iframe, {
            title: "Render", icon: d3,
            x: 800, y: 100,
            width: 375, height: 812,
        });

        this.iframe.srcdoc = template;
        window.addEventListener('message', this.handleMessage);

        globalMsg.on(EventMessage.CODE_COMPILED, this.onCodeCompiled, this);

        this.windows.set(iframeWindow.id, iframeWindow);
    }

    onCodeCompiled = (_, code: string) => {
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

    exit() {
        if (this.exited) return;
        super.exit();
        this.editorRoot.unmount();
        window.removeEventListener('message', this.handleMessage);
        globalMsg.off(EventMessage.CODE_COMPILED, this.onCodeCompiled, this);
    }

}