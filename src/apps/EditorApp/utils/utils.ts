import * as monaco from "monaco-editor";
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { VirtualFile } from "./EditorWorkspace.ts";

import FolderCloseIcon from '../assets/icon/folder_close.svg';
import FolderOpenIcon from '../assets/icon/folder_open.svg';
import TsIcon from '../assets/icon/typescript.svg';
import HtmlIcon from '../assets/icon/html.svg';
import JsIcon from '../assets/icon/javascript.svg';
import CssIcon from '../assets/icon/css.svg';
import JsonIcon from '../assets/icon/json.svg';
import MdIcon from '../assets/icon/markdown.svg';
import React from "react";

export function getFileIcon(name: string, isDir: boolean, isExpanded: boolean = false) {
    if (isDir) {
        return React.createElement('img', { src: isExpanded ? FolderOpenIcon : FolderCloseIcon, alt: "folder" });
    }

    const ext = name.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'ts':
        case 'tsx':
            return React.createElement('img', { src: TsIcon, alt: "ts" });
        case 'html':
            return React.createElement('img', { src: HtmlIcon, alt: "html" });
        case 'js':
        case 'jsx':
            return React.createElement('img', { src: JsIcon, alt: "js" });
        case 'css':
        case 'less':
            return React.createElement('img', { src: CssIcon, alt: "css" });
        case 'json':
            return React.createElement('img', { src: JsonIcon, alt: "json" });
        case 'md':
            return React.createElement('img', { src: MdIcon, alt: "md" });
        default:
            return '📄';
    }
}


self.MonacoEnvironment = { // 提供一个定义worker路径的全局变量
    getWorker(_: any, label: string) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker(); // 基础功能文件， 提供了所有语言通用功能 无论使用什么语言，monaco都会去加载他。
    }
};

export function getMonacoModel({ path, language, content }: VirtualFile) {
    const url = monaco.Uri.parse(path);
    let model = monaco.editor.getModel(url);
    if (!model) {
        model = monaco.editor.createModel(content, language, url);
    }
    return model;
}
