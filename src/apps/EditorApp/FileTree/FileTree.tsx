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
                    <button onClick={() => workspace.createFile()}>新建</button>
                </div>
            </div>
            <div className={styles.content}>
                {files.map((path) => (
                    <div
                        key={path}
                        className={styles.item}
                        onClick={() => workspace.openFile(path)}
                    >
                        {path.split('/').pop()}
                    </div>
                ))}
            </div>
        </div>
    );
});