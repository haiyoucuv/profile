import React, { useContext, useEffect, useState } from 'react';
import { EditorWorkspace, EditorWorkspaceContext } from '../utils/EditorWorkspace';
import styles from './TabBar.module.less';
import { getFileIcon } from '../utils/utils';

export const TabBar: React.FC = () => {
    const workspace = useContext(EditorWorkspaceContext);
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const handler = () => forceUpdate({});
        workspace.on(EditorWorkspace.EventType.STRUCTURE_CHANGED, handler);
        workspace.on(EditorWorkspace.EventType.FILE_CHANGED, handler);
        return () => {
            workspace.off(EditorWorkspace.EventType.STRUCTURE_CHANGED, handler);
            workspace.off(EditorWorkspace.EventType.FILE_CHANGED, handler);
        };
    }, [workspace]);

    if (workspace.openedFiles.length === 0) {
        return null;
    }

    return (
        <div className={styles.tabBar}>
            {workspace.openedFiles.map(path => {
                const name = path.split('/').pop() || '';
                const isActive = workspace.currentFile?.path === path;
                return (
                    <div 
                        key={path} 
                        className={`${styles.tab} ${isActive ? styles.active : ''}`}
                        onClick={() => workspace.openFile(path)}
                        title={path}
                    >
                        <span className={styles.icon}>{getFileIcon(name, false)}</span>
                        <span className={styles.name}>{name}</span>
                        <span 
                            className={styles.close}
                            onClick={(e) => {
                                e.stopPropagation();
                                workspace.closeFile(path);
                            }}
                        >
                            <svg viewBox="0 0 16 16" width="12" height="12">
                                <path fill="currentColor" d="M12.7 4.3c-.4-.4-1-.4-1.4 0L8 7.6 4.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 9l-3.3 3.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0L8 10.4l3.3 3.3c.4.4 1 .4 1.4 0s.4-1 0-1.4L9.4 9l3.3-3.3c.4-.4.4-1 0-1.4z"/>
                            </svg>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
