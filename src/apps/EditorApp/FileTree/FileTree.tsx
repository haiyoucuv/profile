import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from './FileTree.module.less';
import { EditorWorkspace, EditorWorkspaceContext } from '../utils/EditorWorkspace';
import { useContext } from 'react';

export const FileTree: FC = memo(() => {
    const workspace = useContext(EditorWorkspaceContext);
    const [files, setFiles] = useState<any[]>([]);


    const onFileChanged = useCallback(async () => {
        if (!workspace) return;
        const fileList = await workspace.fetchFiles();
        setFiles(fileList);
    }, [workspace]);

    const goBack = () => {
        if (!workspace || workspace.currentDir === '/') return;
        const parts = workspace.currentDir.split('/');
        parts.pop();
        const parentPath = parts.join('/') || '/';
        workspace.navigate(parentPath);
    };

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
                <div className={styles.breadcrumb} onClick={goBack}>
                    {workspace.currentDir === '/' ? 'Root' : '.. ' + workspace.currentDir}
                </div>
                <div className={styles.actions}>
                    <button onClick={() => {
                        const name = window.prompt('请输入文件夹名:');
                        if (name) workspace.fs.mkdir(`${workspace.currentDir}/${name}`).then(() => onFileChanged());
                    }} title="新建文件夹">📁+</button>
                    <button onClick={() => {
                        const name = window.prompt('请输入文件名:', `file${files.length + 1}.ts`);
                        if (name) workspace.createFile(`${workspace.currentDir}/${name}`);
                    }} title="新建文件">📄+</button>
                </div>
            </div>
            <div className={styles.content}>
                {files.map((file) => (
                    <div
                        key={file.path}
                        className={`${styles.item} ${workspace.currentFile?.path === file.path ? styles.active : ''} ${file.isDir ? styles.directory : ''}`}
                        onClick={() => workspace.navigate(file.path)}
                    >
                        <span className={styles.fileName}>
                            {file.isDir ? '📁' : '📄'} {file.name}
                        </span>
                        <button className={styles.deleteBtn} onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`确定要删除 ${file.path} 吗？`)) {
                                if (file.isDir) {
                                    workspace.fs.rmdir(file.path, { recursive: true }).then(() => onFileChanged());
                                } else {
                                    workspace.deleteFile(file.path);
                                }
                            }
                        }}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
});