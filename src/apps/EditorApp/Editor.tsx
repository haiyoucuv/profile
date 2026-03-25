import { FileTree } from "./FileTree/FileTree";
import styles from './Editor.module.less';
import { SystemWindow } from "@system";
import { useMonacoTypes } from "./hooks/useMonacoTypes";
import { useEditorCore } from "./hooks/useEditorCore";
import { TabBar } from "./components/TabBar";

/**
 * 专业级编辑器组件
 * 核心逻辑已抽离至 Hooks：
 * - useMonacoTypes: 处理全局类型定义注入
 * - useEditorCore: 处理编辑器生命周期、同步和交互逻辑
 */
export const Editor: React.FC<{ window: SystemWindow }> = ({ window: win }) => {
    // 1. 初始化 Monaco 全局类型系统
    useMonacoTypes();

    // 2. 挂载编辑器核心逻辑
    const { containerRef } = useEditorCore();

    return (
        <div className={styles.editorContainer}>
            <FileTree />
            <div className={styles.mainContent}>
                <TabBar />
                <div className={styles.editorWrapper} ref={containerRef} />
            </div>
        </div>
    );
};
