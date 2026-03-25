import { IFileSystem, Builder } from '@system';
import Emittery from 'emittery';

export interface VirtualFile {
    path: string;
    content: string;
    language: string;
    type?: string;
}

const FILE_CHANGED: unique symbol = Symbol('onFileChanged');
const STRUCTURE_CHANGED: unique symbol = Symbol('onStructureChanged');
const PREVIEW_READY: unique symbol = Symbol('onPreviewReady');

type EditorEvents = {
    [FILE_CHANGED]: string | undefined;
    [STRUCTURE_CHANGED]: string | undefined;
    [PREVIEW_READY]: string;
};

export class EditorWorkspace extends Emittery<EditorEvents> {

    static readonly EventType = {
        FILE_CHANGED,
        STRUCTURE_CHANGED,
        PREVIEW_READY,
    } as const;

    public lastCompiledCode: string = '';
    public openedFiles: string[] = [];

    currentFile: VirtualFile | null = null;
    currentDir: string = '/';
    private initPromise: Promise<void> | null = null;
    public fs: IFileSystem;
    public projectRoot: string;

    public ready() {
        return this.initPromise;
    }

    constructor(fs: IFileSystem, projectRoot: string) {
        super();
        this.fs = fs;
        this.projectRoot = projectRoot;
        this.initPromise = this.initializeDefaultFile();
    }

    private get privatePath() {
        return this.projectRoot;
    }

    private async initializeDefaultFile() {
        // 确保根目录存在
        if (!(await this.fs.exists(this.projectRoot))) {
            await this.fs.mkdir(this.projectRoot, { recursive: true });
        }

        const defaultFiles = import.meta.glob([
            "../appTemplate/**/*.{ts,tsx,html,css}",
        ], { eager: true, query: '?raw', import: 'default' });

        // 仅在文件不存在时写入默认文件
        for (const path in defaultFiles) {
            const content = defaultFiles[path] as string;
            const fileName = path.split('/').pop();
            const filePath = `${this.privatePath}/${fileName}`;
            if (!(await this.fs.exists(filePath))) {
                await this.fs.writeFile(filePath, content);
            }
        }

        const defaultPath = `${this.privatePath}/main.ts`;
        const exists = await this.fs.exists(defaultPath);
        if (exists) {
            const content = await this.fs.readFile(defaultPath);
            this.currentFile = {
                path: defaultPath,
                content: content as string,
                language: 'typescript'
            };
            this.openedFiles = [defaultPath];
            this.emit(EditorWorkspace.EventType.FILE_CHANGED, defaultPath);
        }
    }

    async createFile(name?: string) {
        await this.initPromise;
        const files = await this.fs.readdir(this.privatePath);
        const fileName = name || `file${files.length + 1}.ts`;
        const newPath = `${this.privatePath}/${fileName}`;
        await this.fs.writeFile(newPath, '');
        this.emit(EditorWorkspace.EventType.STRUCTURE_CHANGED, newPath);
        await this.openFile(newPath);
    }

    async deleteFile(path: string) {
        await this.initPromise;
        await this.fs.unlink(path);
        
        // 如果删除的是当前文件，打开默认文件或空
        if (this.currentFile?.path === path) {
            this.currentFile = null;
            await this.initializeDefaultFile();
        } else {
            // 触发列表刷新
            this.emit(EditorWorkspace.EventType.STRUCTURE_CHANGED, path);
            this.emit(EditorWorkspace.EventType.FILE_CHANGED, path);
        }
    }

    async openFile(path: string) {
        await this.initPromise;
        const exists = await this.fs.exists(path);
        if (exists) {
            const content = await this.fs.readFile(path);
            this.currentFile = {
                path,
                content: content as string,
                language: 'typescript'
            };

            // 如果不在已打开列表中，则添加
            if (!this.openedFiles.includes(path)) {
                this.openedFiles.push(path);
            }

            this.emit(EditorWorkspace.EventType.FILE_CHANGED, path);
            this.emit(EditorWorkspace.EventType.STRUCTURE_CHANGED, path);
        }
    }

    async closeFile(path: string) {
        await this.initPromise;
        const index = this.openedFiles.indexOf(path);
        if (index !== -1) {
            this.openedFiles.splice(index, 1);

            // 如果关闭的是当前选中的文件
            if (this.currentFile?.path === path) {
                if (this.openedFiles.length > 0) {
                    // 自动选择下一个或前一个标签
                    const nextIndex = Math.min(index, this.openedFiles.length - 1);
                    await this.openFile(this.openedFiles[nextIndex]);
                } else {
                    this.currentFile = null;
                    this.emit(EditorWorkspace.EventType.FILE_CHANGED, undefined);
                }
            }

            this.emit(EditorWorkspace.EventType.STRUCTURE_CHANGED, path);
        }
    }

    async readFile(path: string): Promise<VirtualFile | null> {
        await this.initPromise;
        const exists = await this.fs.exists(path);
        if (!exists) return null;
        
        const content = await this.fs.readFile(path);
        return {
            path,
            content: content as string,
            language: 'typescript'
        };
    }

    async writeFile(path: string, content: string) {
        await this.initPromise;
        await this.fs.writeFile(path, content);
        if (this.currentFile?.path === path) {
            this.currentFile.content = content;
        }
    }

    async saveAndBuild(path: string, content: string) {
        await this.writeFile(path, content);
        // 直接获取编译结果
        const code = await Builder.ins.build([`${this.projectRoot}/index.html`], this.fs, this.projectRoot) as unknown as string;
        this.lastCompiledCode = code;
        this.emit(EditorWorkspace.EventType.PREVIEW_READY, code);
    }

    async navigate(path: string) {
        await this.initPromise;
        const state = await this.fs.stat(path);
        if (state && state.type === 'dir') {
            this.currentDir = path;
            this.emit(EditorWorkspace.EventType.FILE_CHANGED, undefined);
        } else {
            await this.openFile(path);
        }
    }

    async fetchFiles() {
        await this.initPromise;
        const names = await this.fs.readdir(this.currentDir);
        const files = await Promise.all(names.map(async (name) => {
            const path = this.currentDir === '/' ? `/${name}` : `${this.currentDir}/${name}`;
            const state = await this.fs.stat(path);
            return {
                name,
                path,
                isDir: state?.type === 'dir'
            };
        }));
        return files.sort((a, b) => {
            if (a.isDir && !b.isDir) return -1;
            if (!a.isDir && b.isDir) return 1;
            return a.name.localeCompare(b.name);
        });
    }

    async listFiles() {
        await this.initPromise;
        return this.fs.readdir(this.currentDir);
    }

    get code(): string {
        return this.currentFile?.content || '';
    }
}

import { createContext } from 'react';
export const EditorWorkspaceContext = createContext<EditorWorkspace>(null!);
