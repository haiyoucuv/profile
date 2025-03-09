import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from './FileTree.module.less';
import { FileSystem } from '../utils/FileSystem';

export const FileTree: FC = memo(() => {

    const [files, setFiles] = useState<string[]>([]);


    const onFileChanged = useCallback(() => {
        const files = FileSystem.ins.listFiles();
        setFiles(files);
    }, []);

    useEffect(() => {

        onFileChanged();
        FileSystem.ins.on(FileSystem.EventType.FILE_CHANGED, onFileChanged);

        return () => {
            FileSystem.ins.off(FileSystem.EventType.FILE_CHANGED, onFileChanged);
        }
    }, [onFileChanged]);

    return (
        <div className={styles.fileTree}>
            <div className={styles.header}>
                <span>文件</span>
                <div className={styles.actions}>
                    <button onClick={() => FileSystem.ins.createFile()}>新建</button>
                </div>
            </div>
            <div className={styles.content}>
                {files.map((path) => (
                    <div
                        key={path}
                        className={styles.item}
                        onClick={() => FileSystem.ins.openFile(path)}
                    >
                        {path.split('/').pop()}
                    </div>
                ))}
            </div>
        </div>
    );
});