import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from './FileTree.module.less';
import { EditorWorkspace } from '../utils/EditorWorkspace';

export const FileTree: FC = memo(() => {

    const [files, setFiles] = useState<string[]>([]);


    const onFileChanged = useCallback(async () => {
        const files = await EditorWorkspace.ins.listFiles();
        setFiles(files);
    }, []);

    useEffect(() => {

        onFileChanged();
        EditorWorkspace.ins.on(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);

        return () => {
            EditorWorkspace.ins.off(EditorWorkspace.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged]);

    return (
        <div className={styles.fileTree}>
            <div className={styles.header}>
                <span>文件</span>
                <div className={styles.actions}>
                    <button onClick={() => EditorWorkspace.ins.createFile()}>新建</button>
                </div>
            </div>
            <div className={styles.content}>
                {files.map((path) => (
                    <div
                        key={path}
                        className={styles.item}
                        onClick={() => EditorWorkspace.ins.openFile(path)}
                    >
                        {path.split('/').pop()}
                    </div>
                ))}
            </div>
        </div>
    );
});