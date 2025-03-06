import React from "react";
import MonacoEditor from "react-monaco-editor";

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import { getWorker, MonacoJsxSyntaxHighlight } from 'monaco-jsx-syntax-highlight'

const controller = new MonacoJsxSyntaxHighlight(getWorker(), monaco)

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

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

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

const types = import.meta.glob(
    [
        '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}'
    ],
    { eager: true, as: 'raw' }
)

Object.keys(types).forEach(path => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(types[path], `file://${path}`)
    monaco.languages.typescript.javascriptDefaults.addExtraLib(types[path], `file://${path}`)
})

export class Editor extends React.Component {
    state = {
        code: `
            import { createRoot } from "react-dom/client";
            import React from "react";


            function App(){
                return <div>Hello World!</div>
            }

            createRoot(document.getElementById('root')!).render(<App />);
        `,
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    render() {
        const code = this.state.code;
        const options = {
            automaticLayout: true, // 自适应布局 默认true
            renderLineHighlight: "all" as "all", // 修改这里，明确指定类型
            selectOnLineNumbers: true, // 显示行号 默认true
            minimap: {
                enabled: true,
            },
            readOnly: false, // 只读
            fontSize: 16, // 字体大小
            scrollBeyondLastLine: false, // 取消代码后面一大段空白
            overviewRulerBorder: false, // 不要滚动条的边框}
        };
        return <MonacoEditor
            width="800"
            height="600"
            language="typescript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
        />;
    }
}
