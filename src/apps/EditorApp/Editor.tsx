import React, { useCallback, useEffect, useRef } from "react";
import { FileTree } from "./FileTree/FileTree";
import styles from './Editor.module.less';

import * as monaco from 'monaco-editor';

import { MonacoEditorConfig, TypeScriptConfig } from "./monacoConfig.ts";

import { EditorWorkspace } from "./utils/EditorWorkspace.ts";
import { getMonacoModel } from "./utils/utils.ts";
import { Builder } from "@system";
import { debounce } from "../../utils/utils.ts";


// 添加React类型定义配置
monaco.typescript.typescriptDefaults.setCompilerOptions({
    ...TypeScriptConfig,
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
    monaco.typescript.typescriptDefaults.addExtraLib(types[path].default, `file://${path}`)
    monaco.typescript.javascriptDefaults.addExtraLib(types[path].default, `file://${path}`)
})


export const Editor: React.FC = (props) => {
    const editorRootRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<any>(null);

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;

        // 初始化当前文件的model
        if (EditorWorkspace.ins.currentFile) {
            const model = getMonacoModel(EditorWorkspace.ins.currentFile);
            editor.setModel(model);
        }

        editor.focus();

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            editor.getAction('editor.action.formatDocument').run()
        })
    }

    const onFileChanged = useCallback(() => {
        if (!editorRef.current || !EditorWorkspace.ins.currentFile) return;
        const model = getMonacoModel(EditorWorkspace.ins.currentFile);
        if (editorRef.current.getModel() !== model) {
            editorRef.current.setModel(model);
        }
    }, []);

    useEffect(() => {
        EditorWorkspace.ins.on(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        return () => {
            // 清理所有model
            EditorWorkspace.ins.off(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged]);


    const debounceCompile = useCallback(debounce(async () => {
        await Builder.ins.build();
    }, 1000), []);

    const onChange = useCallback(async (newValue: string, e: any) => {
        if (EditorWorkspace.ins.currentFile) {
            await EditorWorkspace.ins.writeFile(EditorWorkspace.ins.currentFile.path, newValue);
            debounceCompile();
        }
    }, [debounceCompile])

    useEffect(() => {
        const editor = monaco.editor.create(editorRootRef.current, {
            model: null,
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
