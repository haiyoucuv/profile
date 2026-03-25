import { IFileSystem, Builder } from '@system';
import Emittery from 'emittery';

export interface VirtualFile {
    path: string;
    content: string;
    language: string;
    type?: string;
}

export enum EditorEvent {
    FILE_CHANGED = 'file_changed',
    STRUCTURE_CHANGED = 'structure_changed',
    PREVIEW_READY = 'preview_ready',
}

type EditorEvents = {
    [EditorEvent.FILE_CHANGED]: string | undefined;
    [EditorEvent.STRUCTURE_CHANGED]: string | undefined;
    [EditorEvent.PREVIEW_READY]: string;
};

export class EditorWorkspace extends Emittery<EditorEvents> {

    static readonly EventType = EditorEvent;

    public lastCompiledFiles: any[] = [];
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
        this.projectRoot = projectRoot.replace(/\\/g, '/');
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
        // 直接获取编译结果 (输出为多文件数组)
        const files = await Builder.ins.build([`${this.projectRoot}/index.html`], this.fs, this.projectRoot) as any[];
        this.lastCompiledFiles = files;
        
        // 兼容旧逻辑，从中提取出给 PREVIEW_READY 的代码 (通常是 .js 代码)
        const mainFile = files.find(f => f.path.endsWith('.js')) || files[0];
        const code = mainFile ? mainFile.text : '';
        
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

    async getAllFiles(): Promise<{ path: string, content: string, contentType: string }[]> {
        await this.initPromise;
        const result: { path: string, content: string, contentType: string }[] = [];
        
        const scan = async (dir: string) => {
            const names = await this.fs.readdir(dir);
            for (const name of names) {
                const fullPath = dir === '/' ? `/${name}` : `${dir}/${name}`;
                const state = await this.fs.stat(fullPath);
                if (state?.type === 'dir') {
                    await scan(fullPath);
                } else {
                    const content = await this.fs.readFile(fullPath);
                    const ext = name.split('.').pop()?.toLowerCase();
                    let contentType = 'text/plain';
                    if (ext === 'html') contentType = 'text/html';
                    else if (ext === 'css') contentType = 'text/css';
                    else if (ext === 'js' || ext === 'ts' || ext === 'tsx') contentType = 'application/javascript';
                    else if (ext === 'json') contentType = 'application/json';

                    const normalizedFullPath = fullPath.replace(/\\/g, '/');
                    const normalizedRoot = this.projectRoot.toLowerCase();
                    let vfsPath = normalizedFullPath.toLowerCase().startsWith(normalizedRoot) 
                        ? normalizedFullPath.slice(this.projectRoot.length) 
                        : normalizedFullPath;
                    
                    if (!vfsPath.startsWith('/')) vfsPath = '/' + vfsPath;

                    result.push({
                        path: vfsPath, 
                        content: typeof content === 'string' ? content : await (content as Blob).text(),
                        contentType
                    });
                }
            }
        };

        await scan(this.projectRoot);
        return result;
    }

    get code(): string {
        return this.currentFile?.content || '';
    }
}

import { createContext } from 'react';
export const EditorWorkspaceContext = createContext<EditorWorkspace>(null!);
