import React, { useCallback, useEffect, useRef, useContext } from "react";
import { FileTree } from "./FileTree/FileTree";
import styles from './Editor.module.less';

import {
    typescript,
    editor,
    KeyMod,
    KeyCode,
} from 'monaco-editor';

import { MonacoEditorConfig, TypeScriptConfig } from "./monacoConfig.ts";

import { EditorWorkspace, EditorWorkspaceContext } from "./utils/EditorWorkspace.ts";
import { getMonacoModel } from "./utils/utils.ts";
import { Builder, Window } from "@system";
import { useDebounceFn } from "ahooks";


// 添加React类型定义配置
typescript.typescriptDefaults.setCompilerOptions({
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
    typescript.typescriptDefaults.addExtraLib(types[path].default, `file://${path}`)
    typescript.javascriptDefaults.addExtraLib(types[path].default, `file://${path}`)
})


export const Editor: React.FC<{ window: Window }> = ({ window: win }) => {
    const editorRootRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const workspace = useContext(EditorWorkspaceContext);

    const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;

        // 初始化当前文件的model
        if (workspace.currentFile) {
            const model = getMonacoModel(workspace.currentFile);
            editor.setModel(model);
        }

        editor.focus();

        editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () => {
            editor.getAction('editor.action.formatDocument').run()
        })
    }

    const onFileChanged = useCallback(() => {
        if (!editorRef.current || !workspace.currentFile) return;
        const model = getMonacoModel(workspace.currentFile);
        if (editorRef.current.getModel() !== model) {
            editorRef.current.setModel(model);
        }
    }, [workspace.currentFile]);

    useEffect(() => {
        workspace.on(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        return () => {
            workspace.off(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged, workspace]);

    // 监听窗口大小变化
    useEffect(() => {
        const handleResize = () => {
            editorRef.current?.layout();
        };
        win.on(Window.EventType.ON_RESIZE, handleResize);
        return () => {
            win.off(Window.EventType.ON_RESIZE, handleResize);
        };
    }, [win]);


    const { run: debounceCompile } = useDebounceFn(async () => {
        await Builder.ins.build();
    }, { wait: 1000 });

    const onChange = useCallback(async (newValue: string, e: any) => {
        if (workspace.currentFile) {
            await workspace.writeFile(workspace.currentFile.path, newValue);
            debounceCompile();
        }
    }, [debounceCompile, workspace])

    useEffect(() => {
        const editorIns = editor.create(editorRootRef.current, {
            model: null,
            theme: 'vs-dark',
            ...MonacoEditorConfig,
        });

        handleEditorDidMount(editorIns);

        editorIns.onDidChangeModelContent((e) => {
            onChange(editorIns.getValue(), e);
        });

        return () => {
            editorIns.dispose();
        };
    }, []);

    return (
        <div className={styles.editorContainer}>
            <FileTree />
            <div className={styles.editorWrapper} ref={editorRootRef} />
        </div>
    );
};
