import { FileSystem as SysFS } from '@system';
import Emittery from 'emittery';

export interface VirtualFile {
    path: string;
    content: string;
    language: string;
    type?: string;
}

export class EditorWorkspace extends Emittery<{ [key: symbol]: any }> {

    static EventType = {
        FILE_CHANGED: Symbol('onFileChanged'),
    }

    currentFile: VirtualFile | null = null;
    private initPromise: Promise<void> | null = null;

    constructor() {
        super();
        this.initPromise = this.initializeDefaultFile();
    }

    private async initializeDefaultFile() {
        const defaultFiles = import.meta.glob([
            "../appTemplate/**/*.ts",
        ], {
            import: "default",
            eager: true,
            query: "?raw",
        });

        // 仅在文件不存在时写入默认文件
        for (const path in defaultFiles) {
            const content = defaultFiles[path] as string;
            const fileName = path.split('/').pop();
            const filePath = `/${fileName}`;
            if (!(await SysFS.exists(filePath))) {
                await SysFS.writeFile(filePath, content);
            }
        }

        const defaultPath = '/main.ts';
        const exists = await SysFS.exists(defaultPath);
        if (exists) {
            const content = await SysFS.readFile(defaultPath);
            this.currentFile = {
                path: defaultPath,
                content: content as string,
                language: 'typescript'
            };
            this.emit(EditorWorkspace.EventType.FILE_CHANGED, defaultPath);
        }
    }

    async createFile() {
        await this.initPromise;
        const files = await SysFS.readdir('/');
        // Filter out non-files if necessary, but just append length
        const newPath = `/file${files.length + 1}.ts`;
        await SysFS.writeFile(newPath, '');
        await this.openFile(newPath);
    }

    async openFile(path: string) {
        await this.initPromise;
        const exists = await SysFS.exists(path);
        if (exists) {
            const content = await SysFS.readFile(path);
            this.currentFile = {
                path,
                content: content as string,
                language: 'typescript'
            };
            this.emit(EditorWorkspace.EventType.FILE_CHANGED, path);
        }
    }

    async readFile(path: string): Promise<VirtualFile | null> {
        await this.initPromise;
        const exists = await SysFS.exists(path);
        if (!exists) return null;
        
        const content = await SysFS.readFile(path);
        return {
            path,
            content: content as string,
            language: 'typescript'
        };
    }

    async writeFile(path: string, content: string) {
        await this.initPromise;
        await SysFS.writeFile(path, content);
        if (this.currentFile?.path === path) {
            this.currentFile.content = content;
        }
    }

    async listFiles() {
        await this.initPromise;
        return SysFS.readdir('/');
    }

    get code(): string {
        return this.currentFile?.content || '';
    }
}

import { createContext } from 'react';
export const EditorWorkspaceContext = createContext<EditorWorkspace>(null!);
