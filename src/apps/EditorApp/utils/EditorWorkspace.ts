import type { OutputFile } from '@system';
import { Builder, IFileSystem } from '@system';
import { createContext } from 'react';
import Emittery from 'emittery';

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface VirtualFile {
    path: string;
    content: string;
    language: string;
}

export interface WorkspaceFileEntry {
    name: string;
    path: string;
    isDir: boolean;
}

export enum WorkspaceEvent {
    /** 当前激活文件切换 */
    FILE_CHANGED = 'file_changed',
    /** 目录结构变更（新增/删除文件） */
    STRUCTURE_CHANGED = 'structure_changed',
    /** 编译完成，预览可以刷新 */
    PREVIEW_READY = 'preview_ready',
}

type WorkspaceEvents = {
    [WorkspaceEvent.FILE_CHANGED]: string | undefined;
    [WorkspaceEvent.STRUCTURE_CHANGED]: string | undefined;
    [WorkspaceEvent.PREVIEW_READY]: undefined;
};

// ──────────────────────────────────────────────
// EditorWorkspace
// ──────────────────────────────────────────────

export class EditorWorkspace extends Emittery<WorkspaceEvents> {

    static readonly EventType = WorkspaceEvent;

    // 对外暴露，供 EditorApp.resolveFile 使用
    public readonly fs: IFileSystem;
    public readonly projectRoot: string;

    public currentFile: VirtualFile | null = null;
    public openedFiles: string[] = [];
    public lastCompiledFiles: OutputFile[] = [];

    private readonly initPromise: Promise<void>;

    constructor(fs: IFileSystem, projectRoot: string) {
        super();
        this.fs = fs;
        this.projectRoot = projectRoot;
        this.initPromise = this.setup();
    }

    /** 等待工作区初始化完成 */
    ready() {
        return this.initPromise;
    }

    // ── 初始化 ──────────────────────────────────

    private async setup() {
        // 1. 确保项目根目录存在
        if (!(await this.fs.exists(this.projectRoot))) {
            await this.fs.mkdir(this.projectRoot, { recursive: true });
        }

        // 2. 将内嵌模板文件写入 VFS（只写入尚不存在的）
        const templates = import.meta.glob<string>(
            ['../appTemplate/**/*.{ts,tsx,html,css}'],
            { eager: true, query: '?raw', import: 'default' }
        );

        for (const [templatePath, content] of Object.entries(templates)) {
            const fileName = templatePath.split('/').pop()!;
            const dest = `${this.projectRoot}/${fileName}`;
            if (!(await this.fs.exists(dest))) {
                await this.fs.writeFile(dest, content);
            }
        }

        // 3. 打开默认文件（main.ts）——直接内联，避免调用 openFile()（会 await initPromise，导致死锁）
        const defaultPath = `${this.projectRoot}/main.ts`;
        if (await this.fs.exists(defaultPath)) {
            const content = await this.fs.readFile(defaultPath) as string;
            this.currentFile = { path: defaultPath, content, language: 'typescript' };
            this.openedFiles = [defaultPath];
            this.emit(WorkspaceEvent.FILE_CHANGED, defaultPath);
        }
    }

    // ── 文件操作 ─────────────────────────────────

    async openFile(path: string) {
        await this.initPromise;
        if (!(await this.fs.exists(path))) return;

        const content = await this.fs.readFile(path) as string;
        const ext = path.split('.').pop() ?? 'ts';
        this.currentFile = {
            path,
            content,
            language: ext === 'tsx' ? 'typescript' : ext === 'css' ? 'css' : 'typescript',
        };

        if (!this.openedFiles.includes(path)) {
            this.openedFiles.push(path);
        }

        this.emit(WorkspaceEvent.FILE_CHANGED, path);
    }

    async closeFile(path: string) {
        await this.initPromise;
        const index = this.openedFiles.indexOf(path);
        if (index === -1) return;

        this.openedFiles.splice(index, 1);

        if (this.currentFile?.path === path) {
            if (this.openedFiles.length > 0) {
                await this.openFile(this.openedFiles[Math.min(index, this.openedFiles.length - 1)]);
            } else {
                this.currentFile = null;
                this.emit(WorkspaceEvent.FILE_CHANGED, undefined);
            }
        }

        this.emit(WorkspaceEvent.STRUCTURE_CHANGED, path);
    }

    async createFile(pathOrName?: string) {
        await this.initPromise;
        let newPath: string;
        if (!pathOrName) {
            // 无参数：自动在项目根下生成文件名
            const existing = await this.fs.readdir(this.projectRoot);
            newPath = `${this.projectRoot}/file${existing.length + 1}.ts`;
        } else if (pathOrName.startsWith('/')) {
            // 完整 VFS 路径（FileTree 传来的）
            newPath = pathOrName;
        } else {
            // 只传了文件名
            newPath = `${this.projectRoot}/${pathOrName}`;
        }
        await this.fs.writeFile(newPath, '');
        this.emit(WorkspaceEvent.STRUCTURE_CHANGED, newPath);
        await this.openFile(newPath);
    }

    async deleteFile(path: string) {
        await this.initPromise;
        await this.fs.unlink(path);

        if (this.currentFile?.path === path) {
            this.currentFile = null;
            // 尝试重新打开默认文件
            const defaultPath = `${this.projectRoot}/main.ts`;
            if (await this.fs.exists(defaultPath)) {
                await this.openFile(defaultPath);
            } else {
                this.emit(WorkspaceEvent.FILE_CHANGED, undefined);
            }
        }

        this.emit(WorkspaceEvent.STRUCTURE_CHANGED, path);
    }

    async writeFile(path: string, content: string) {
        await this.initPromise;
        await this.fs.writeFile(path, content);
        if (this.currentFile?.path === path) {
            this.currentFile = { ...this.currentFile, content };
        }
    }

    /** 保存文件并触发编译 */
    async saveAndBuild(path: string, content: string) {
        await this.writeFile(path, content);
        this.lastCompiledFiles = await Builder.ins.build(
            [`${this.projectRoot}/index.html`],
            this.fs,
            this.projectRoot
        );
        this.emit(WorkspaceEvent.PREVIEW_READY, undefined);
    }

    // ── 目录浏览 ─────────────────────────────────

    /** 读取 path 下所有直接子项（文件 + 目录） */
    async listDir(path: string): Promise<WorkspaceFileEntry[]> {
        await this.initPromise;
        const names = await this.fs.readdir(path);
        const entries = await Promise.all(names.map(async (name) => {
            const entryPath = path === '/' ? `/${name}` : `${path}/${name}`;
            const stat = await this.fs.stat(entryPath);
            return { name, path: entryPath, isDir: stat?.type === 'dir' };
        }));
        return entries.sort((a, b) => {
            if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
            return a.name.localeCompare(b.name);
        });
    }

    /**
     * 导航到路径：若是目录则切换当前目录，若是文件则打开
     * FileTree 组件通过 onAction 调用此方法
     */
    async navigate(path: string) {
        await this.initPromise;
        const stat = await this.fs.stat(path);
        if (stat?.type === 'dir') {
            this.emit(WorkspaceEvent.STRUCTURE_CHANGED, path);
        } else {
            await this.openFile(path);
        }
    }
}

// ──────────────────────────────────────────────
// React Context
// ──────────────────────────────────────────────

export const EditorWorkspaceContext = createContext<EditorWorkspace>(null!);
