import React, { FC, memo, useCallback, useEffect, useState, useContext, useMemo } from 'react';
import { EditorWorkspace, EditorWorkspaceContext } from '../utils/EditorWorkspace';
import { Tree, TreeItem, Button, Collection, TreeItemContent } from 'react-aria-components';
import type { Selection } from 'react-aria-components';
import styles from './FileTree.module.less';

// 导入图标资源
import FolderCloseIcon from '../assets/icon/folder_close.svg';
import FolderOpenIcon from '../assets/icon/folder_open.svg';
import TsIcon from '../assets/icon/typescript.svg';
import HtmlIcon from '../assets/icon/html.svg';

interface FileNode {
    id: string; // 使用 path 作为 ID
    name: string;
    isDir: boolean;
    children?: FileNode[];
}

const getFileIcon = (name: string, isDir: boolean, isExpanded: boolean) => {
    if (isDir) {
        return <img src={isExpanded ? FolderOpenIcon : FolderCloseIcon} alt="folder" />;
    }

    const ext = name.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'ts':
        case 'tsx':
            return <img src={TsIcon} alt="ts" />;
        case 'html':
            return <img src={HtmlIcon} alt="html" />;
        case 'js':
        case 'jsx':
            return '💛';
        case 'css':
        case 'less':
            return '💙';
        case 'json':
            return '💎';
        case 'md':
            return '📝';
        default:
            return '📄';
    }
};

interface FileTreeItemProps {
    item: FileNode;
    expandedKeys: Selection;
    setContextMenu: (menu: { x: number, y: number, path: string, isDir: boolean } | null) => void;
    handleDelete: (path: string) => void;
    handleNewFile: (path: string) => void;
    handleNewFolder: (path: string) => void;
}

const FileTreeItem: FC<FileTreeItemProps> = memo(({ 
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
                        handleDelete={() => {}} // Not needed here as actions go through context menu
                        handleNewFile={() => {}}
                        handleNewFolder={() => {}}
                    />
                )}
            </Collection>
        </TreeItem>
    );
});

export const FileTree: FC = memo(() => {
    const workspace = useContext(EditorWorkspaceContext);
    const [treeData, setTreeData] = useState<FileNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set());
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number, path: string, isDir: boolean } | null>(null);

    // 递归加载目录
    const loadNodes = useCallback(async (path: string): Promise<FileNode[]> => {
        if (!workspace) {
            console.log('Tree: Workspace not ready');
            return [];
        }
        
        await workspace.ready();
        
        console.log('Tree: Loading path', path);
        try {
            const names = await workspace.fs.readdir(path);
            const nodes = await Promise.all(names.map(async (name) => {
                const fullPath = path === '/' ? `/${name}` : `${path}/${name}`;
                const stat = await workspace.fs.stat(fullPath);
                const isDir = stat?.type === 'dir';
                return {
                    id: fullPath,
                    name,
                    isDir,
                    children: isDir ? [] : undefined
                };
            }));
            const sortedNodes = nodes.sort((a, b) => (a.isDir === b.isDir ? a.name.localeCompare(b.name) : a.isDir ? -1 : 1));
            console.log(`Tree: Loaded ${sortedNodes.length} items for ${path}`);
            return sortedNodes;
        } catch (e) {
            console.error('Tree: Failed to load nodes', e);
            return [];
        }
    }, [workspace]);

    const refreshTree = useCallback(() => {
        if (!workspace?.projectRoot) return;
        loadNodes(workspace.projectRoot).then(setTreeData);
    }, [loadNodes, workspace?.projectRoot]);

    useEffect(() => {
        if (workspace?.projectRoot) {
            refreshTree();
        }
        const onStructureChanged = () => {
            refreshTree();
        };

        workspace?.on(EditorWorkspace.EventType.STRUCTURE_CHANGED, onStructureChanged);
        return () => {
            workspace?.off(EditorWorkspace.EventType.STRUCTURE_CHANGED, onStructureChanged);
        }
    }, [refreshTree, workspace]);

    // 处理展开加载
    const handleExpandedChange = async (keys: Selection) => {
        const isAll = (expandedKeys as any) === 'all';
        const oldExpandedKeys = isAll ? new Set() : (expandedKeys as Set<any>);
        
        const isNewAll = (keys as any) === 'all';
        const newKeysArray = isNewAll ? [] : Array.from(keys as any); 
        const oldKeysArray = isAll ? [] : Array.from(oldExpandedKeys);

        const newlyExpandedKey = newKeysArray.find(key => !oldExpandedKeys.has(key));

        setExpandedKeys(keys);

        if (newlyExpandedKey) {
            const findAndLoadChildren = async (nodes: FileNode[], targetId: string): Promise<FileNode[]> => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (node.id === targetId && node.isDir && (!node.children || node.children.length === 0)) {
                        const newChildren = await loadNodes(node.id);
                        return [
                            ...nodes.slice(0, i),
                            { ...node, children: newChildren },
                            ...nodes.slice(i + 1)
                        ];
                    }
                    if (node.children) {
                        const updatedChildren = await findAndLoadChildren(node.children, targetId);
                        if (updatedChildren !== node.children) {
                            return [
                                ...nodes.slice(0, i),
                                { ...node, children: updatedChildren },
                                ...nodes.slice(i + 1)
                            ];
                        }
                    }
                }
                return nodes;
            };

            const updatedTreeData = await findAndLoadChildren(treeData, newlyExpandedKey as string);
            if (updatedTreeData !== treeData) {
                setTreeData(updatedTreeData);
            }
        }
    };

    const handleDelete = async (path: string) => {
        if (window.confirm(`确定要删除 ${path} 吗？`)) {
            const stat = await workspace?.fs.stat(path);
            if (stat?.type === 'dir') {
                await workspace?.fs.rmdir(path, { recursive: true });
            } else {
                await workspace?.deleteFile(path);
            }
            refreshTree();
        }
    };

    const handleNewFile = async (parentPath: string) => {
        const name = window.prompt('请输入文件名:');
        if (name && workspace) {
            const fullPath = parentPath === '/' || parentPath === workspace.projectRoot 
                ? `${workspace.projectRoot}/${name}` 
                : `${parentPath}/${name}`;
            await workspace.createFile(fullPath);
            refreshTree();
            const newExpanded = new Set(expandedKeys instanceof Set ? (expandedKeys as Set<any>) : []);
            newExpanded.add(parentPath);
            setExpandedKeys(newExpanded);
        }
    };

    const handleNewFolder = async (parentPath: string) => {
        const name = window.prompt('请输入文件夹名:');
        if (name && workspace) {
            const fullPath = parentPath === '/' || parentPath === workspace.projectRoot 
                ? `${workspace.projectRoot}/${name}` 
                : `${parentPath}/${name}`;
            await workspace.fs.mkdir(fullPath);
            refreshTree();
            const newExpanded = new Set(expandedKeys instanceof Set ? (expandedKeys as Set<any>) : []);
            newExpanded.add(parentPath);
            setExpandedKeys(newExpanded);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setContextMenu(null);
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={styles.fileTree}>
            <div className={styles.header}>
                <span>项目资源</span>
                <div className={styles.actions}>
                    <button onClick={refreshTree} title="刷新">🔄</button>
                    <button onClick={() => setExpandedKeys(new Set())} title="全部折叠">📂×</button>
                    <button onClick={() => workspace && handleNewFolder(workspace.projectRoot)} title="根目录新建文件夹">📁+</button>
                    <button onClick={() => workspace && handleNewFile(workspace.projectRoot)} title="根目录新建文件">📄+</button>
                </div>
            </div>
            <div className={styles.content}>
                <Tree
                    aria-label="项目资源文件树"
                    items={treeData}
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    onAction={(key) => {
                        const path = key as string;
                        workspace?.fs.stat(path).then(s => {
                            if (s?.type !== 'dir') {
                                workspace.navigate(path);
                            } else {
                                const newExpanded = new Set(expandedKeys instanceof Set ? expandedKeys : []);
                                if (newExpanded.has(path)) {
                                    newExpanded.delete(path);
                                } else {
                                    newExpanded.add(path);
                                }
                                handleExpandedChange(newExpanded);
                            }
                        });
                    }}
                    expandedKeys={expandedKeys}
                    onExpandedChange={handleExpandedChange}
                    className={styles.treeRoot}
                >
                    {(item) => (
                        <FileTreeItem 
                            item={item} 
                            expandedKeys={expandedKeys} 
                            setContextMenu={setContextMenu}
                            handleDelete={handleDelete}
                            handleNewFile={handleNewFile}
                            handleNewFolder={handleNewFolder}
                        />
                    )}
                </Tree>
            </div>
            {contextMenu && (
                <div 
                    className={styles.contextMenu} 
                    style={{ top: contextMenu.y, left: contextMenu.x }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {contextMenu.isDir && (
                        <>
                            <div className={styles.menuItem} onClick={() => {
                                handleNewFile(contextMenu.path);
                                setContextMenu(null);
                            }}>新建文件</div>
                            <div className={styles.menuItem} onClick={() => {
                                handleNewFolder(contextMenu.path);
                                setContextMenu(null);
                            }}>新建文件夹</div>
                            <div className={styles.divider} />
                        </>
                    )}
                    <div className={styles.menuItem} onClick={() => {
                        handleDelete(contextMenu.path);
                        setContextMenu(null);
                    }}>删除</div>
                </div>
            )}
        </div>
    );
});