import React, { FC } from 'react';
import { ContextMenuData } from './types.ts';
import styles from './FileTree.module.less';

interface ContextMenuProps {
    data: ContextMenuData;
    onClose: () => void;
    handleNewFile: (path: string) => void;
    handleNewFolder: (path: string) => void;
    handleDelete: (path: string) => void;
}

export const ContextMenu: FC<ContextMenuProps> = ({ 
    data, 
    onClose, 
    handleNewFile, 
    handleNewFolder, 
    handleDelete 
}) => {
    if (!data) return null;

    return (
        <div 
            className={styles.contextMenu} 
            style={{ top: data.y, left: data.x }}
            onClick={(e) => e.stopPropagation()}
        >
            {data.isDir && (
                <>
                    <div className={styles.menuItem} onClick={() => {
                        handleNewFile(data.path);
                        onClose();
                    }}>新建文件</div>
                    <div className={styles.menuItem} onClick={() => {
                        handleNewFolder(data.path);
                        onClose();
                    }}>新建文件夹</div>
                    <div className={styles.divider} />
                </>
            )}
            <div className={styles.menuItem} onClick={() => {
                handleDelete(data.path);
                onClose();
            }}>删除</div>
        </div>
    );
};
