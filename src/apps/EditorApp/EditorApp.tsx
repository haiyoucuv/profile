import { VirtualApp, SystemContext, Builder, SystemWindow } from "@system";
import { createRoot, Root } from "react-dom/client";
import { Editor } from "./Editor.tsx";
import React from "react";
import { EditorWorkspace, EditorWorkspaceContext } from "./utils/EditorWorkspace.ts";


export class EditorApp extends VirtualApp {
    private previewWindow: SystemWindow | null = null;
    private iframe: HTMLIFrameElement | null = null;
    private workspace: EditorWorkspace | null = null;
    private lastCompiledFiles: any[] = [];
    editorRoot: Root | null = null;

    constructor() {
        super();
    }

    launch(sys: SystemContext) {
        const root = this.homeDir; // homeDir 已经是 /EditorApp（纯虚拟路径）
        this.workspace = new EditorWorkspace(sys.fs, root);
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
                console.log('EditorApp: SW registered');
            } catch (err) {
                console.error('EditorApp: SW registration failed:', err);
            }
        }

        // 2. 等待 SW 激活并控制页面
        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker.ready;
            console.log('EditorApp: SW is ready and active!');
        }

        // 3. 监听 SW 发来的 SW_READY 消息（SW 更新/重启后会发此消息）
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.onmessage = async (event) => {
                if (event.data?.type === 'SW_READY') {
                    console.log('EditorApp: SW_READY received, re-syncing...');
                    await this.syncToSW();
                    this.updatePreview();
                }
            };
        }

        // 4. 等待工作区初始化完成
        await this.workspace?.ready();

        // 5. 执行首次构建
        await this.buildAndSync(sys);

        // 6. 挂载 iframe 并进行首次预览
        this.previewWindow.whenReady().then((container) => {
            container.appendChild(this.iframe!);
            this.updatePreview();
        });

        // 7. 监听后续的保存构建事件
        this.workspace?.on(EditorWorkspace.EventType.PREVIEW_READY, async () => {
            if (this.workspace) {
                this.lastCompiledFiles = this.workspace.lastCompiledFiles;
                await this.syncToSW();
                this.updatePreview();
            }
        });
    }

    /**
     * 构建并同步到 Service Worker
     */
    private async buildAndSync(sys: SystemContext) {
        const root = this.homeDir;
        console.log('EditorApp: Building from root:', root);
        
        try {
            const files = await Builder.ins.build([`${root}/index.html`], sys.fs, root) as any[];
            console.log('EditorApp: Build complete, files:', files?.length, files?.map((f: any) => f.path));
            if (files && files.length > 0) {
                this.lastCompiledFiles = files;
            }
        } catch (e) {
            console.error('EditorApp: Build failed:', e);
        }

        await this.syncToSW();
    }

    /**
     * 将所有文件同步到 Service Worker 的虚拟文件系统
     *
     * 核心思路（Vite-like）：
     * - HTML 原封不动推送给 SW（不修改 script src）
     * - 编译后的 bundle 以"原始入口路径"为 key 存入 SW
     *   例如：index.html 里写 <script src="./main.ts">
     *   → SW 缓存 /main.ts → JS bundle 内容
     *   → 浏览器请求 /preview-vfs/main.ts 时，SW 直接返回 bundle
     */
    private async syncToSW() {
        if (!this.workspace) return;

        // 用 registration.active 代替 controller，避免首次注册时 controller 为 null 的问题
        const reg = await navigator.serviceWorker.ready;
        const sw = reg.active;
        if (!sw) {
            console.warn('EditorApp: No active SW, cannot sync!');
            return;
        }

        // 1. 获取所有工作区原始文件（不做任何修改）
        const workspaceFiles = await this.workspace.getAllFiles();
        console.log('EditorApp: Workspace files:', workspaceFiles.map(f => f.path));

        // 2. 构建 SW 文件列表，同时对 index.html 的绝对路径做透明重写
        //    将 src="/xxx" href="/xxx" → src="./xxx"，让相对路径在 /preview-vfs/ 域下正确解析
        //    注意：只重写 VFS 内部路径（以 / 开头但不是 // 或 https:// 的）
        const syncFiles: any[] = workspaceFiles.map(f => {
            if (f.path === '/index.html') {
                const rewritten = f.content
                    // 重写 src="/xxx" 和 href="/xxx"（排除 // 开头的协议相对 URL）
                    .replace(/(src|href)="\/(?!\/)/g, '$1="./');
                return { ...f, content: rewritten };
            }
            return f;
        });

        // 3. 将编译后的产物以"原始路径"为 key 推入
        //    esbuild 的入口是 /EditorApp/main.ts，输出 path 是 main.js
        //    但 HTML 里写的是 src="./main.ts" 或 src="/main.ts"
        //    所以我们把 bundle 存为 /main.ts 路径，SW 返回时指定 JS content-type
        for (const f of this.lastCompiledFiles) {
            const outputName = f.path.split('/').pop(); // e.g. "main.js"
            // 把 .js 后缀变回 .ts（匹配 HTML 里的原始引用），也保留 .js 版本
            const tsKey = '/' + outputName.replace(/\.js$/, '.ts');
            const jsKey = '/' + outputName;

            syncFiles.push({ path: tsKey, content: f.text, contentType: 'application/javascript' });
            syncFiles.push({ path: jsKey, content: f.text, contentType: 'application/javascript' });
        }

        console.log('EditorApp: Syncing to SW. Paths:', syncFiles.map(f => f.path));
        sw.postMessage({ type: 'UPDATE_FILES', files: syncFiles });
        console.log('EditorApp: Sync complete.');
    }

    private updatePreview() {
        if (this.iframe) {
            // 加个时间戳防止缓存
            this.iframe.src = '/preview-vfs/index.html?' + Date.now();
        }
    }

    onExit() {
        this.editorRoot?.unmount();
    }
}
