import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from './FileTree.module.less';
import { EditorWorkspace, EditorWorkspaceContext } from '../utils/EditorWorkspace';
import { useContext } from 'react';

export const FileTree: FC = memo(() => {
    const workspace = useContext(EditorWorkspaceContext);
    const [files, setFiles] = useState<string[]>([]);


    const onFileChanged = useCallback(async () => {
        if (!workspace) return;
        const files = await workspace.listFiles();
        setFiles(files);
    }, [workspace]);

    useEffect(() => {
        if (!workspace) return;
        onFileChanged();
        workspace.on(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);

        return () => {
            workspace.off(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged, workspace]);

    return (
        <div className={styles.fileTree}>
            <div className={styles.header}>
                <span>文件</span>
                <div className={styles.actions}>
                    <button onClick={() => {
                        const name = window.prompt('请输入文件名:', `file${files.length + 1}.ts`);
                        if (name) workspace.createFile(name);
                    }}>新建</button>
                </div>
            </div>
            <div className={styles.content}>
                {files.map((path) => (
                    <div
                        key={path}
                        className={`${styles.item} ${workspace.currentFile?.path === path ? styles.active : ''}`}
                        onClick={() => workspace.openFile(path)}
                    >
                        <span>{path.split('/').pop()}</span>
                        <button className={styles.deleteBtn} onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`确定要删除 ${path} 吗？`)) {
                                workspace.deleteFile(path);
                            }
                        }}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
});