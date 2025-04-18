export class VirtualFile {
    path: string;

    content: string;

    type = 'file';

    language: string;

    constructor(path: string, content: string, language: string) {
        this.path = path;
        this.content = content;
        this.language = language;
        this.type = 'file';
    }

}
