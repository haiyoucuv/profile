// 虚拟文件系统实现

import { VirtualFile } from "./VirtualFile.ts";

export class VirtualFS {
    private files: Map<string, VirtualFile>;
    private locks: Set<string>;

    constructor() {
        this.files = new Map()
        this.locks = new Set()
    }

    async exists(path: string): Promise<boolean> {
        const normalizedPath = this.normalizePath(path);
        await this.waitLock(normalizedPath);
        return this.files.has(normalizedPath);
    }

    createFile(path: string, content: string, language: string): void {
        const normalizedPath = this.normalizePath(path)
        this.lock(normalizedPath);
        const file = new VirtualFile(path, content, language);
        this.files.set(normalizedPath, file);
        this.unlock(normalizedPath);
    }

    async readFile(path: string): Promise<VirtualFile | null> {
        const normalizedPath = this.normalizePath(path)
        await this.waitLock(normalizedPath)
        return this.files.get(normalizedPath) ?? null
    }

    async writeFile(path: string, content: string, language = 'typescript'): Promise<void> {
        const normalizedPath = this.normalizePath(path)
        this.lock(normalizedPath);
        const file = this.files.get(normalizedPath)
        if (!file) {
            this.createFile(normalizedPath, content, language)
        } else {
            file.content = content;
            file.language = language;
        }
        this.unlock(normalizedPath)
    }

    private lock(path: string): void {
        this.locks.add(path)
    }

    private unlock(path: string): void {
        this.locks.delete(path)
    }

    private async waitLock(path: string): Promise<void> {
        while (this.locks.has(path)) {
            await new Promise(r => setTimeout(r, 10))
        }
    }

    private normalizePath(path: string): string {
        // 将路径标准化为正斜杠
        path = path.replace(/\\/g, '/')
        // 移除开头的 ./
        path = path.replace(/^\.\//, '')
        // 移除结尾的 /
        path = path.replace(/\/$/, '')
        // 处理 ../
        const parts = path.split('/')
        const stack: string[] = []
        for (const part of parts) {
            if (part === '..') {
                stack.pop()
            } else if (part && part !== '.') {
                stack.push(part)
            }
        }
        return stack.join('/')
    }

    // 创建目录
    async mkdir(path: string): Promise<void> {
        const normalizedPath = this.normalizePath(path)
        this.lock(normalizedPath)
        this.files.set(normalizedPath, {
            path: normalizedPath,
            content: '',
            language: '',
            type: 'directory'
        } as VirtualFile)
        this.unlock(normalizedPath)
    }

    // 列出目录内容
    readdir(path: string) {
        const normalizedPath = this.normalizePath(path)
        const prefix = normalizedPath ? normalizedPath + '/' : ''
        const result = new Set<string>()

        for (const [filePath] of this.files) {
            if (filePath.startsWith(prefix)) {
                const relativePath = filePath.slice(prefix.length)
                const firstPart = relativePath.split('/')[0]
                if (firstPart) {
                    result.add(firstPart)
                }
            }
        }

        return Array.from(result)
    }
}
