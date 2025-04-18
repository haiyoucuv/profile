import * as monaco from "monaco-editor";

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { VirtualFile } from "../../Builder/VirtualFile.ts";


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
