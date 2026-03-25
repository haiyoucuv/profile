import React, { FC, memo, useMemo } from 'react';
import { TreeItem, TreeItemContent, Button, Collection } from 'react-aria-components';
import { Selection } from 'react-aria-components';
import { FileNode, ContextMenuData } from './types.ts';
import styles from './FileTree.module.less';

import { getFileIcon } from '../utils/utils.ts';

interface FileTreeItemProps {
    item: FileNode;
    expandedKeys: Selection;
    setContextMenu: (menu: ContextMenuData) => void;
}

export const FileTreeItem: FC<FileTreeItemProps> = memo(({ 
    item, 
    expandedKeys, 
    setContextMenu,
}) => {
    const isExpanded = useMemo(() => {
        if ((expandedKeys as any) === 'all') return true;
        if (expandedKeys instanceof Set) return expandedKeys.has(item.id);
        // Handle Selection object from react-stately
        if (expandedKeys && typeof (expandedKeys as any).has === 'function') {
            return (expandedKeys as any).has(item.id);
        }
        return false;
    }, [expandedKeys, item.id]);

    return (
        <TreeItem id={item.id} textValue={item.name} className={styles.treeItem}>
            <TreeItemContent>
                <div 
                    className={styles.itemContent}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setContextMenu({
                            x: e.clientX,
                            y: e.clientY,
                            path: item.id,
                            isDir: item.isDir
                        });
                    }}
                >
                    <div className={styles.itemMain}>
                        {item.isDir && (
                            <Button slot="chevron" className={styles.chevron}>
                                {isExpanded ? '▾' : '▸'}
                            </Button>
                        )}
                        {!item.isDir && <span className={styles.chevron} />}
                        <span className={styles.icon}>
                            {getFileIcon(item.name, item.isDir, isExpanded)}
                        </span>
                        <span className={styles.name}>{item.name}</span>
                    </div>
                </div>
            </TreeItemContent>
            <Collection items={item.children}>
                {(child) => (
                    <FileTreeItem 
                        item={child} 
                        expandedKeys={expandedKeys} 
                        setContextMenu={setContextMenu}
                    />
                )}
            </Collection>
        </TreeItem>
    );
});
