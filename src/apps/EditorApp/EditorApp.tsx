import { VirtualApp, SystemContext, Builder, SystemWindow, OutputFile } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import { EditorWorkspace, EditorWorkspaceContext, WorkspaceEvent } from "./utils/EditorWorkspace.ts";
import { extractScriptEntries, buildEntryOutputMap, rewriteHtmlForPreview } from "./utils/htmlParser.ts";

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
            const ws = this.workspace!;
            const htmlRaw = await ws.fs.readFile(`${ws.projectRoot}/index.html`) as string;
            const entries = extractScriptEntries(htmlRaw, ws.projectRoot, ws.projectRoot);
            await this.updateCompiledMap(entries, ws.lastCompiledFiles, htmlRaw);
            this.updatePreview();
        });
    }

    // ── 构建 ─────────────────────────────────────

    private async build(sys: SystemContext) {
        const root = this.homeDir;
        try {
            // 1. 读取 index.html，提取所有 module script 入口
            const htmlPath = `${root}/index.html`;
            const htmlRaw = await sys.fs.readFile(htmlPath) as string;
            const entries = extractScriptEntries(htmlRaw, root, root);

            if (entries.length === 0) {
                console.warn('[EditorApp] No script entries found in index.html');
                return;
            }

            // 2. 一次 Builder 调用（splitting 自动处理共享 chunk）
            const files = await Builder.ins.build(entries, sys.fs, root);
            await this.updateCompiledMap(entries, files, htmlRaw);
        } catch (e) {
            console.error('[EditorApp] Build failed:', e);
        }
    }

    /**
     * 将编译产物写入 compiledFileMap
     * key 为 /dist/xxx.js（包括 chunks），同时缓存改写后的 HTML
     */
    private async updateCompiledMap(
        entries: string[],
        files: OutputFile[],
        htmlRaw: string
    ) {
        this.compiledFileMap.clear();

        // 所有输出文件以 /dist/ 为 key 存储
        for (const f of files) {
            const name = f.path.startsWith('dist/') ? f.path.slice(5) : f.path.split('/').pop()!;
            this.compiledFileMap.set(`/dist/${name}`, {
                content: f.text,
                contentType: 'application/javascript',
            });
        }

        // 构建入口→输出名映射，用于 HTML 改写
        const entryMap = buildEntryOutputMap(entries, files, this.homeDir);
        const rewrittenHtml = rewriteHtmlForPreview(htmlRaw, entryMap, this.homeDir, this.homeDir);
        this.compiledFileMap.set('/index.html', { content: rewrittenHtml, contentType: 'text/html' });

        console.log('[EditorApp] compiledFileMap:', Array.from(this.compiledFileMap.keys()));
    }

    // ── SW 文件代理 ──────────────────────────────

    /**
     * SW 代理核心：按 VFS 路径返回文件内容
     * 优先查 compiledFileMap（包含改写后的 HTML 和所有编译产物），
     * 其次从 IndexedDB VFS 读取原始源文件
     */
    private async resolveFile(path: string): Promise<{ content: string; contentType: string }> {
        // 1. 优先查编译产物（改写后的 HTML / dist/*.js / chunks）
        const compiled = this.compiledFileMap.get(path);
        if (compiled) return compiled;

        // 2. 回退：从 VFS 读取原始文件（CSS、图片、JSON 等静态资源）
        const ws = this.workspace;
        if (!ws) throw new Error('Workspace not available');

        const fullPath = `${ws.projectRoot}${path}`;
        if (!(await ws.fs.exists(fullPath))) throw new Error(`Not found: ${path}`);

        const raw = await ws.fs.readFile(fullPath);
        const text = typeof raw === 'string' ? raw : await (raw as Blob).text();

        return { content: text, contentType: extToContentType(path) };
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
