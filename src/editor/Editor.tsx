import React, { useCallback, useEffect, useRef } from "react";
import { FileTree } from "./FileTree/FileTree";
import styles from './Editor.module.less';

import * as monaco from 'monaco-editor';

import { MonacoEditorConfig } from "./monacoConfig.ts";

import { FileSystem } from "./utils/FileSystem";
import { getMonacoModel } from "./utils/utils.ts";
import { startBuildServer, transformCode } from "../buider/buider.ts";
import { debounce } from "../utils/utils.ts";


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

const types: Record<string, any> = import.meta.glob(
    [
        '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/three/**/*.{d.ts,json}',
    ],
    { eager: true, query: '?raw' }
)

Object.keys(types).forEach((path) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(types[path].default, `file://${path}`)
    monaco.languages.typescript.javascriptDefaults.addExtraLib(types[path].default, `file://${path}`)
})


export const Editor: React.FC = (props) => {
    const editorRootRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<any>(null);

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;

        // 初始化当前文件的model
        if (FileSystem.ins.currentFile) {
            const model = getMonacoModel(FileSystem.ins.currentFile);
            editor.setModel(model);
        }

        editor.focus();

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            editor.getAction('editor.action.formatDocument').run()
        })
    }

    const onFileChanged = useCallback((_: string, path: string) => {
        const model = getMonacoModel(FileSystem.ins.currentFile);
        editorRef.current.setModel(model);
    }, []);

    useEffect(() => {
        FileSystem.ins.on(FileSystem.EventType.FILE_CHANGED, onFileChanged);
        return () => {
            // 清理所有model
            FileSystem.ins.off(FileSystem.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged]);


    const debounceCompile = useCallback(debounce(async () => {
        await startBuildServer();
        await transformCode();
    }, 1000), []);

    const onChange = useCallback(async (newValue: string, e: any) => {
        if (FileSystem.ins.currentFile) {
            await FileSystem.ins.writeFile(FileSystem.ins.currentFile.path, newValue);
            debounceCompile();
        }
    }, [debounceCompile])

    useEffect(() => {
        const editor = monaco.editor.create(editorRootRef.current, {
            value: FileSystem.ins.code,
            language: 'typescript',
            theme: 'vs-dark',
            ...MonacoEditorConfig,
        });

        handleEditorDidMount(editor);

        editor.onDidChangeModelContent((e) => {
            onChange(editor.getValue(), e);
        });

        return () => {
            editor.dispose();
        };
    }, []);

    return (
        <div className={styles.editorContainer}>
            <FileTree/>
            <div className={styles.editorWrapper} ref={editorRootRef}/>
        </div>
    );
};
