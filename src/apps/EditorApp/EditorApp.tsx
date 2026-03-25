import { VirtualApp, SystemContext, Builder, SystemWindow } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import { EditorWorkspace, EditorWorkspaceContext } from "./utils/EditorWorkspace.ts";


export class EditorApp extends VirtualApp {
    editorRoot: Root | null = null;
    private previewWindow: SystemWindow | null = null;
    private iframe: HTMLIFrameElement | null = null;
    private workspace: EditorWorkspace | null = null;
    private lastCompiledCode: string = '';

    constructor() {
        super();
    }

    launch(sys: SystemContext) {
        this.workspace = new EditorWorkspace(sys.fs, this.homeDir);
        this.openCodeWindow(sys);
        this.openRenderer(sys);
        this.buildOnStart(sys);
    }

    async buildOnStart(sys: SystemContext) {
        await this.workspace?.ready();
        await Builder.ins.build([`${this.homeDir}/index.html`], sys.fs, this.homeDir);
    }

    openCodeWindow(sys: SystemContext) {
        const win = sys.window.create({
            title: "Editor - " + this.homeDir, icon: this.config.icon,
            x: 75, y: 75,
            width: 1200, height: 800,
        });

        win.whenReady().then((container) => {
            this.editorRoot = createRoot(container);
            // 这里 EditorWorkspaceContext 是一个 Context 对象变量，不是类型
            // 我们需要使用 .Provider 来包裹组件，并传入 value
            this.editorRoot.render(
                <React.StrictMode>
                    <EditorWorkspaceContext.Provider value={this.workspace!}>
                        <Editor window={win} />
                    </EditorWorkspaceContext.Provider>
                </React.StrictMode>
            );
        });
    }

    async openRenderer(sys: SystemContext) {
        this.iframe = document.createElement("iframe");
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";

        this.previewWindow = sys.window.create({
            title: "Render", icon: this.config.icon,
            x: 75, y: 100,
            width: 900, height: 812,
        });

        this.previewWindow.whenReady().then((container) => {
            container.appendChild(this.iframe!);
            this.updatePreview(sys);
        });

        // 监听 Workspace 的预览就绪事件
        this.workspace?.on(EditorWorkspace.EventType.PREVIEW_READY, ({ data: code }) => {
            this.lastCompiledCode = code;
            this.updatePreview(sys);
        });

        // 监听文件结构变化，触发重新构建（针对 index.html 等）
        this.workspace?.on(EditorWorkspace.EventType.STRUCTURE_CHANGED, () => {
            this.workspace?.saveAndBuild(`${this.homeDir}/index.html`, ''); // 触发重新构建
        });
    }

    async updatePreview(sys: SystemContext) {
        try {
            await this.workspace?.ready();
            let html = await sys.fs.readFile(`${this.homeDir}/index.html`);
            if (html instanceof Blob) {
                html = await html.text();
            }

            // Strip entry script tags (any attribute order, module type)
            html = html.replace(/<script\b[^>]*(type="module"[^>]*src="[^"]+"|src="[^"]+"[^>]*type="module")[^>]*>(<\/script>)?/gi, '');

            // Inject the compiled code directly
            if (this.lastCompiledCode) {
                const scriptInjection = `<script type="module">\n${this.lastCompiledCode}\n</script>`;
                if (html.includes('</body>')) {
                    html = html.replace('</body>', `${scriptInjection}</body>`);
                } else {
                    html += scriptInjection;
                }
            }

            if (this.iframe) {
                console.log('EditorApp: Setting preview srcdoc. Length:', (html as string).length);
                this.iframe.srcdoc = (html as string);
            }
        } catch (e) {
            console.error('Failed to load index.html for preview', e);
        }
    }

    onExit() {
        this.editorRoot?.unmount();
    }

}
