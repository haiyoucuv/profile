import { VirtualFS } from '../../buider/VirtualFS';
import defaultCode from '../../templete/defaultCode.ts?raw';
import { EventDispatcher } from "../../global/event";
import { VirtualFile } from "../../buider/VirtualFile.ts";

export class FileSystem extends EventDispatcher {

    private static _ins: FileSystem = new FileSystem();
    static get ins() {
        return this._ins;
    }

    static EventType = {
        FILE_CHANGED: 'onFileChanged',
    }


    fs: VirtualFS;
    currentFile: VirtualFile | null = null;

    constructor() {
        super();
        this.fs = new VirtualFS();
        this.initializeDefaultFile();
    }

    private async initializeDefaultFile() {
        const defaultPath = '/index.tsx';
        await this.fs.writeFile(defaultPath, defaultCode, 'typescript');
        const file = await this.fs.readFile(defaultPath);
        if (file) {
            this.currentFile = file;
        }
    }

    async createFile() {
        const files = this.fs.readdir('/');
        const newPath = `/file${files.length + 1}.tsx`;
        await this.fs.writeFile(newPath, '', 'typescript');
        await this.openFile(newPath);
    }

    async openFile(path: string) {
        const file = await this.fs.readFile(path);
        if (file) {
            this.currentFile = file;
            this.dispatchEvent(FileSystem.EventType.FILE_CHANGED, path);
        }
    }

    async readFile(path: string) {
        return this.fs.readFile(path);
    }

    async writeFile(path: string, content: string) {
        await this.fs.writeFile(path, content, 'typescript');
        if (this.currentFile?.path === path) {
            const file = await this.fs.readFile(path);
            if (file) {
                this.currentFile = file;
            }
        }
    }

    listFiles() {
        return this.fs.readdir('/');
    }

    get code(): string {
        return this.currentFile?.content || '';
    }
}