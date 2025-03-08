import React, { useEffect, useRef, useState } from "react";
import MonacoEditor, {Monaco} from "@monaco-editor/react";

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import { getWorker, MonacoJsxSyntaxHighlight } from 'monaco-jsx-syntax-highlight'
import {MonacoEditorConfig} from "./monacoConfig.ts";

import { observer } from "mobx-react"

import './Editor.less'
import store from "../store/store.ts";

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


// 添加React类型定义配置
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    noEmit: true,
    lib: [
        "dom",
    ],
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: "React",
    allowJs: true,
    typeRoots: ["node_modules/@types"]
});

const types:Record<string, any> = import.meta.glob(
    [
        '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/three/**/*.{d.ts,json}',
    ],
    { eager: true, query: '?raw' }
)
console.log(types)


Object.keys(types).forEach((path) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(types[path].default, `file://${path}`)
    monaco.languages.typescript.javascriptDefaults.addExtraLib(types[path].default, `file://${path}`)
})

// interface Props {
//     file: IFile
//     onChange?: (code: string | undefined) => void
//     options?: IEditorOptions
// }

export const Editor: React.FC = observer((props) => {

    const editorRef = useRef<any>(null);

    const handleEditorDidMount = async (editor: any, monaco: Monaco) => {
        editorRef.current = editor;

        editor.focus();

        // ignore save event
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            editor.getAction('editor.action.formatDocument').run()
        })

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            esModuleInterop: true,
        });

        const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco)
        const { highlighter, dispose } = monacoJsxSyntaxHighlight.highlighterBuilder({
            editor,
        })

        editor.onDidChangeModelContent(() => {
            highlighter()
        })

        highlighter()

    }

    useEffect(() => {
        return () => {
            console.log(12312312312)
        }
    }, []);


    const onChange = (newValue, e) => {
        console.log('onChange', newValue, e);
        store.code = newValue;
    }

    return <MonacoEditor
        className='common-editor'
        width='100%'
        height='100%'
        language="typescript"
        theme="vs-dark"
        value={store.code}
        options={{
            ...MonacoEditorConfig,
        }}
        onChange={onChange}
        onMount={handleEditorDidMount}
    />;
});
