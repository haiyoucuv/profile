import { VirtualApp, SystemContext, Builder, SystemWindow, OutputFile } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import { EditorWorkspace, EditorWorkspaceContext, WorkspaceEvent } from "./utils/EditorWorkspace.ts";

// MIME 类型映射
const CONTENT_TYPE_MAP: Record<string, string> = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ts: 'application/javascript',
    tsx: 'application/javascript',
    json: 'application/json',
};

function extToContentType(path: string): string {
    const ext = path.split('.').pop()?.toLowerCase() ?? '';
    return CONTENT_TYPE_MAP[ext] ?? 'text/plain';
}

export class EditorApp extends VirtualApp {

    private previewWindow: SystemWindow | null = null;
    private iframe: HTMLIFrameElement | null = null;
    private workspace: EditorWorkspace | null = null;

    /**
     * 编译产物 Map：VFS 虚拟路径 → 文件内容
     * 同时以 .ts 和 .js 两个 key 存储，对应 HTML 中两种常见写法
     */
    private compiledFileMap = new Map<string, { content: string; contentType: string }>();

    editorRoot: Root | null = null;

    launch(sys: SystemContext) {
        this.workspace = new EditorWorkspace(sys.fs, this.homeDir);
        this.openCodeWindow(sys);
        this.openRenderer(sys);
    }

    // ── 编辑器窗口 ────────────────────────────────

    private openCodeWindow(sys: SystemContext) {
        const win = sys.window.create({
            title: `Editor – ${this.homeDir}`,
            icon: this.config.icon,
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

    // ── 预览渲染器 ───────────────────────────────

    private async openRenderer(sys: SystemContext) {
        this.iframe = document.createElement('iframe');
        Object.assign(this.iframe.style, { width: '100%', height: '100%', border: 'none' });

        this.previewWindow = sys.window.create({
            title: 'Render',
            icon: this.config.icon,
            x: 75, y: 100,
            width: 900, height: 812,
        });

        // 1. 注册并等待 Service Worker（纯代理模式，无持久缓存）
        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker.register('/previewWorker.js', { scope: '/' }).catch(
                err => console.error('[EditorApp] SW registration failed:', err)
            );
            await navigator.serviceWorker.ready;
        }

        // 2. 处理来自 SW 的按需文件请求
        navigator.serviceWorker.onmessage = async (event) => {
            if (event.data?.type !== 'FETCH_FILE') return;
            const port = event.ports[0];
            try {
                port.postMessage(await this.resolveFile(event.data.path));
            } catch (e: any) {
                port.postMessage({ error: e.message ?? String(e) });
            }
        };

        // 3. 初始化：等待 Workspace → 构建 → 显示预览
        await this.workspace!.ready();
        await this.build(sys);

        this.previewWindow.whenReady().then((container) => {
            container.appendChild(this.iframe!);
            this.updatePreview();
        });

        // 4. 监听后续保存/构建事件
        this.workspace!.on(WorkspaceEvent.PREVIEW_READY, async () => {
            await this.updateCompiledMap(this.workspace!.lastCompiledFiles);
            this.updatePreview();
        });
    }

    // ── 构建 ─────────────────────────────────────

    private async build(sys: SystemContext) {
        const root = this.homeDir;
        try {
            const files = await Builder.ins.build([`${root}/index.html`], sys.fs, root);
            await this.updateCompiledMap(files);
        } catch (e) {
            console.error('[EditorApp] Build failed:', e);
        }
    }

    /**
     * 将编译产物写入 compiledFileMap
     * 同时用 .ts 和 .js 作为 key，适配 HTML 两种常见写法
     */
    private async updateCompiledMap(files: OutputFile[]) {
        this.compiledFileMap.clear();
        for (const f of files) {
            const name = f.path.split('/').pop()!; // "main.js"
            const entry = { content: f.text, contentType: 'application/javascript' };
            this.compiledFileMap.set(`/${name}`, entry);   // /main.js
            this.compiledFileMap.set(`/${name.replace(/\.js$/, '.ts')}`, entry); // /main.ts
        }
    }

    // ── SW 文件代理 ──────────────────────────────

    /**
     * SW 代理核心：按 VFS 路径返回文件内容
     * 优先返回编译产物（bundle），其次从 IndexedDB VFS 读取原始文件
     */
    private async resolveFile(path: string): Promise<{ content: string; contentType: string }> {
        // 优先：编译产物（/main.ts / /main.js → bundle）
        const compiled = this.compiledFileMap.get(path);
        if (compiled) return compiled;

        // 回退：从 VFS 读取原始文件
        const ws = this.workspace;
        if (!ws) throw new Error('Workspace not available');

        const fullPath = `${ws.projectRoot}${path}`;
        if (!(await ws.fs.exists(fullPath))) throw new Error(`Not found: ${path}`);

        const raw = await ws.fs.readFile(fullPath);
        const text = typeof raw === 'string' ? raw : await (raw as Blob).text();
        const contentType = extToContentType(path);

        // HTML：将绝对路径转为相对路径，使 SW 能正确拦截
        if (path.endsWith('.html')) {
            return {
                content: text.replace(/(src|href)="\/(?!\/)/g, '$1="./'),
                contentType,
            };
        }

        return { content: text, contentType };
    }

    // ── 预览刷新 ─────────────────────────────────

    private updatePreview() {
        if (this.iframe) {
            // 时间戳参数防止 Vite 缓存
            this.iframe.src = `/preview-vfs/index.html?t=${Date.now()}`;
        }
    }

    // ── 生命周期 ─────────────────────────────────

    onExit() {
        this.editorRoot?.unmount();
    }
}
