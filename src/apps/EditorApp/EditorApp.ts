import { VirtualApp, SystemContext } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import d3 from "./assets/3D.svg";

import template from './appTemplate/index.html?raw';
import { Builder } from "@system";
import { EditorWorkspace, EditorWorkspaceContext } from "./utils/EditorWorkspace.ts";


export class EditorApp extends VirtualApp {

    editorRoot: Root = null;
    iframe: HTMLIFrameElement = null;
    workspace: EditorWorkspace = null as any;

    compiledCode = '';

    launch(sys: SystemContext) {
        this.workspace = new EditorWorkspace(sys.fs, this.homeDir);
        this.openCodeWindow(sys);
        this.openRenderer(sys);
        this.buildOnStart(sys);
    }

    async buildOnStart(sys: SystemContext) {
        await Builder.ins.build([`${this.homeDir}/main.ts`], sys.fs);
    }

    async openCodeWindow(sys: SystemContext) {
        const codeWindow = sys.window.create({
            title: this.config.name,
            icon: this.config.icon,
            x: this.config.defaultWindow.x || 25,
            y: this.config.defaultWindow.y || 25,
            width: this.config.defaultWindow.width,
            height: this.config.defaultWindow.height,
        });

        const container = await codeWindow.whenReady();
        this.editorRoot = createRoot(container);
        this.editorRoot.render(
            React.createElement(EditorWorkspaceContext.Provider, { value: this.workspace }, 
                React.createElement(Editor, { window: codeWindow })
            )
        );
    }

    async openRenderer(sys: SystemContext) {
        this.iframe = document.createElement("iframe");
        const iframeWindow = sys.window.create({
            title: "Render", icon: d3,
            x: 75, y: 100,
            width: 900, height: 812,
        });

        const container = await iframeWindow.whenReady();
        container.appendChild(this.iframe);

        this.iframe.srcdoc = template;
        window.addEventListener('message', this.handleMessage);

        Builder.ins.on(Builder.EventType.CODE_COMPILED, this.onCodeCompiled);
    }

    onCodeCompiled = ({ data: code }: { data: string }) => {
        this.compiledCode = code;
        this.iframe.contentWindow?.location.reload();
    }

    handleMessage = (e) => {
        if (e.source !== this.iframe.contentWindow) return;
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
