import { useCallback, useEffect, useRef, useContext } from "react";
import { editor, KeyMod, KeyCode } from 'monaco-editor';
import { useDebounceFn } from "ahooks";
import { EditorWorkspace, EditorWorkspaceContext } from "../utils/EditorWorkspace";
import { getMonacoModel } from "../utils/utils";
import { MonacoEditorConfig } from "../monacoConfig";

/**
 * 核心编辑器逻辑 Hooks
 * 负责管理编辑器的生命周期、模型切换、自动保存和 Resize。
 */
export const useEditorCore = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const workspace = useContext(EditorWorkspaceContext);
    
    // 用于存储每个文件的视图状态（光标位置、滚动位置等）
    const viewStates = useRef<Map<string, editor.ICodeEditorViewState>>(new Map());
    const activePathRef = useRef<string | null>(null);

    // 编译逻辑 (带有防抖)
    const { run: debounceCompile } = useDebounceFn(async (content: string) => {
        if (workspace.currentFile) {
            await workspace.saveAndBuild(workspace.currentFile.path, content);
        }
    }, { wait: 1000 });

    // 处理文件切换导致的 Model 变更
    const onFileChanged = useCallback(() => {
        const editorIns = editorRef.current;
        if (!editorIns || !workspace.currentFile) return;

        const newPath = workspace.currentFile.path;

        // 1. 保存当前文件的状态
        if (activePathRef.current && activePathRef.current !== newPath) {
            const state = editorIns.saveViewState();
            if (state) {
                viewStates.current.set(activePathRef.current, state);
            }
        }

        // 2. 切换 Model
        const model = getMonacoModel(workspace.currentFile);
        if (editorIns.getModel() !== model) {
            editorIns.setModel(model);
            
            // 3. 恢复新文件的状态
            const savedState = viewStates.current.get(newPath);
            if (savedState) {
                editorIns.restoreViewState(savedState);
            }
            editorIns.focus();
        }

        activePathRef.current = newPath;
    }, [workspace.currentFile]);

    // 1. 初始化编辑器
    useEffect(() => {
        if (!containerRef.current) return;

        const editorIns = editor.create(containerRef.current, {
            model: null,
            theme: 'vs-dark',
            ...MonacoEditorConfig,
        });

        editorRef.current = editorIns;

        // 设置初始 Model
        if (workspace.currentFile) {
            const model = getMonacoModel(workspace.currentFile);
            editorIns.setModel(model);
        }

        editorIns.focus();

        // 绑定常用命令
        // Ctrl+S / Alt+Shift+F: 格式化
        const formatCommand = () => editorIns.getAction('editor.action.formatDocument').run();
        editorIns.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, formatCommand);
        editorIns.addCommand(KeyMod.Alt | KeyMod.Shift | KeyCode.KeyF, formatCommand);

        // Ctrl+Shift+P: 呼出命令面板 (Monaco 内置是 F1，这里增加标准绑定)
        editorIns.addCommand(KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyP, () => {
            editorIns.trigger('anyString', 'editor.action.quickCommand', {});
        });

        // 监听内容变更
        const contentDisposable = editorIns.onDidChangeModelContent(() => {
            debounceCompile(editorIns.getValue());
        });

        // 使用 ResizeObserver 监听容器大小变化
        const observer = new ResizeObserver(() => {
            editorIns.layout();
        });
        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            contentDisposable.dispose();
            editorIns.dispose();
        };
    }, [workspace]); // 依赖 workspace 确保实例匹配

    // 2. 响应 Workspace 的文件切换事件
    useEffect(() => {
        // Emittery 在使用泛型时会包装数据为 { name, data }
        const handler = () => onFileChanged();
        workspace.on(EditorWorkspace.EventType.FILE_CHANGED, handler);
        return () => {
            workspace.off(EditorWorkspace.EventType.FILE_CHANGED, handler);
        };
    }, [onFileChanged, workspace]);

    return {
        containerRef,
        editorRef,
        workspace
    };
};
