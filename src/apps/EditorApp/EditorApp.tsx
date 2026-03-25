import { VirtualApp, SystemContext, Builder, SystemWindow } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import { EditorWorkspace, EditorWorkspaceContext } from "./utils/EditorWorkspace.ts";


export class EditorApp extends VirtualApp {
    private previewWindow: SystemWindow | null = null;
    private iframe: HTMLIFrameElement | null = null;
    private workspace: EditorWorkspace | null = null;
    // 编译后的文件，以 VFS 路径（/main.ts, /main.js 等）为 key
    private compiledFileMap: Map<string, { content: string; contentType: string }> = new Map();
    editorRoot: Root | null = null;

    constructor() {
        super();
    }

    launch(sys: SystemContext) {
        this.workspace = new EditorWorkspace(sys.fs, this.homeDir);
        this.openCodeWindow(sys);
        this.openRenderer(sys);
    }

    openCodeWindow(sys: SystemContext) {
        const win = sys.window.create({
            title: "Editor - " + this.homeDir, icon: this.config.icon,
            x: 75, y: 75,
            width: 1200, height: 800,
        });

        win.whenReady().then((container) => {
            this.editorRoot = createRoot(container);
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

        // 1. 注册 Service Worker
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('/previewWorker.js', { scope: '/' });
                await navigator.serviceWorker.ready;
                console.log('EditorApp: SW ready (proxy mode).');
            } catch (err) {
                console.error('EditorApp: SW registration failed:', err);
            }
        }

        // 2. 监听来自 SW 的 FETCH_FILE 请求（纯代理模式核心）
        navigator.serviceWorker.onmessage = async (event) => {
            if (event.data?.type !== 'FETCH_FILE') return;

            const { path, } = event.data;
            const port = event.ports[0];

            try {
                const result = await this.resolveFile(path);
                port.postMessage(result);
            } catch (e: any) {
                port.postMessage({ error: e.message || String(e) });
            }
        };

        // 3. 等待工作区初始化完成
        await this.workspace?.ready();

        // 4. 执行首次构建
        await this.buildFiles(sys);

        // 5. 挂载 iframe 并进行首次预览
        this.previewWindow.whenReady().then((container) => {
            container.appendChild(this.iframe!);
            this.updatePreview();
        });

        // 6. 监听后续构建事件
        this.workspace?.on(EditorWorkspace.EventType.PREVIEW_READY, async () => {
            if (this.workspace) {
                await this.updateCompiledMap(this.workspace.lastCompiledFiles);
                this.updatePreview();
            }
        });
    }

    /**
     * 构建并更新编译产物 Map
     */
    private async buildFiles(sys: SystemContext) {
        const root = this.homeDir;
        console.log('EditorApp: Building from root:', root);
        try {
            const files = await Builder.ins.build([`${root}/index.html`], sys.fs, root) as any[];
            console.log('EditorApp: Build complete:', files?.map((f: any) => f.path));
            await this.updateCompiledMap(files || []);
        } catch (e) {
            console.error('EditorApp: Build failed:', e);
        }
    }

    /**
     * 将编译结果更新到 compiledFileMap
     * 以 /main.ts 和 /main.js 为 key，方便 resolveFile 查找
     */
    private async updateCompiledMap(files: any[]) {
        this.compiledFileMap.clear();
        for (const f of files) {
            const outputName = f.path.split('/').pop(); // "main.js"
            const tsKey = '/' + outputName.replace(/\.js$/, '.ts');
            const jsKey = '/' + outputName;
            this.compiledFileMap.set(tsKey, { content: f.text, contentType: 'application/javascript' });
            this.compiledFileMap.set(jsKey, { content: f.text, contentType: 'application/javascript' });
        }
        console.log('EditorApp: compiledFileMap updated:', Array.from(this.compiledFileMap.keys()));
    }

    /**
     * SW 代理的核心：按路径查找文件内容
     * 优先返回编译产物，其次从工作区 VFS 读取原始文件
     */
    private async resolveFile(path: string): Promise<{ content: string; contentType: string }> {
        console.log('EditorApp: SW requested:', path);

        // 1. 优先查编译产物（/main.ts → compiled bundle）
        const compiled = this.compiledFileMap.get(path);
        if (compiled) {
            return compiled;
        }

        // 2. 从工作区 VFS 读取原始文件
        if (!this.workspace) throw new Error('Workspace not available');
        const fullPath = `${this.workspace.projectRoot}${path}`;
        const exists = await this.workspace.fs.exists(fullPath);
        if (!exists) throw new Error(`File not found: ${path}`);

        const content = await this.workspace.fs.readFile(fullPath);
        const text = typeof content === 'string' ? content : await (content as Blob).text();
        
        const ext = path.split('.').pop()?.toLowerCase();
        let contentType = 'text/plain';
        if (ext === 'html') {
            // 对 HTML 的绝对路径做透明重写
            const rewritten = text.replace(/(src|href)="\/(?!\/)/g, '$1="./');
            return { content: rewritten, contentType: 'text/html' };
        }
        if (ext === 'css') contentType = 'text/css';
        else if (ext === 'json') contentType = 'application/json';
        else if (ext === 'js' || ext === 'ts' || ext === 'tsx') contentType = 'application/javascript';

        return { content: text, contentType };
    }

    private updatePreview() {
        if (this.iframe) {
            this.iframe.src = '/preview-vfs/index.html?' + Date.now();
        }
    }

    onExit() {
        this.editorRoot?.unmount();
    }
}
