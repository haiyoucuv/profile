import { VirtualFS } from '../../Builder/VirtualFS';
import defaultCode from '../../templete/defaultCode.ts?raw';
import { VirtualFile } from "../../Builder/VirtualFile.ts";
import Emittery from 'emittery';

export class FileSystem extends Emittery {

    private static _ins: FileSystem = new FileSystem();
    static get ins() {
        return this._ins;
    }

    static EventType = {
        FILE_CHANGED: Symbol('onFileChanged'),
    }


    fs: VirtualFS;
    currentFile: VirtualFile | null = null;

    constructor() {
        super();
        this.fs = new VirtualFS();
        this.initializeDefaultFile();
    }

    private async initializeDefaultFile() {
        const defaultPath = '/index.ts';
        await this.fs.writeFile(defaultPath, defaultCode, 'typescript');
        const file = await this.fs.readFile(defaultPath);
        if (file) {
            this.currentFile = file;
        }
    }

    async createFile() {
        const files = this.fs.readdir('/');
        const newPath = `/file${files.length + 1}.ts`;
        await this.fs.writeFile(newPath, '', 'typescript');
        await this.openFile(newPath);
    }

    async openFile(path: string) {
        const file = await this.fs.readFile(path);
        if (file) {
            this.currentFile = file;
            this.emit(FileSystem.EventType.FILE_CHANGED, path);
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