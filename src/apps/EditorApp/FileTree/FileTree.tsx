import React, { FC, memo, useCallback, useEffect, useState, useMemo, useContext } from 'react';
import { EditorWorkspace, EditorWorkspaceContext } from '../utils/EditorWorkspace';
import { Tree, TreeItem, Button, Text, Collection, TreeItemContent } from 'react-aria-components';
import type { Selection, Key } from 'react-aria-components';
import styles from './FileTree.module.less';

interface FileNode {
    id: string; // 使用 path 作为 ID
    name: string;
    isDir: boolean;
    children?: FileNode[];
}

export const FileTree: FC = memo(() => {
    const workspace = useContext(EditorWorkspaceContext);
    const [treeData, setTreeData] = useState<FileNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set());
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

    // 递归加载目录
    const loadNodes = useCallback(async (path: string): Promise<FileNode[]> => {
        if (!workspace) {
            console.log('Tree: Workspace not ready');
            return [];
        }
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
                    // 如果是目录，初始化空子列表以启用 Tree 的展开功能
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

    // 初始化根目录
    const refreshTree = useCallback(() => {
        loadNodes('/').then(setTreeData);
    }, [loadNodes]);

    useEffect(() => {
        refreshTree();
        workspace?.on(EditorWorkspace.EventType.FILE_CHANGED, refreshTree);
        return () => {
            workspace?.off(EditorWorkspace.EventType.FILE_CHANGED, refreshTree);
        }
    }, [refreshTree, workspace]);

    // 处理展开加载
    const handleExpandedChange = async (keys: Selection) => {
        // Determine which key was just expanded
        const oldExpandedKeys = expandedKeys instanceof Set ? expandedKeys : new Set();
        const newExpandedKeys = keys instanceof Set ? keys : new Set();

        const newlyExpandedKey = Array.from(newExpandedKeys).find(key => !oldExpandedKeys.has(key));

        setExpandedKeys(keys);

        if (newlyExpandedKey) {
            // Find the node that was just expanded
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
                        if (updatedChildren !== node.children) { // If children were updated
                            return [
                                ...nodes.slice(0, i),
                                { ...node, children: updatedChildren },
                                ...nodes.slice(i + 1)
                            ];
                        }
                    }
                }
                return nodes; // No change
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
            // 刷新整个树
            refreshTree();
        }
    };

    return (
        <div className={styles.fileTree}>
            <div className={styles.header}>
                <span>项目资源</span>
                <div className={styles.actions}>
                    <button onClick={() => {
                        const name = window.prompt('请输入文件夹名:');
                        if (name) workspace!.fs.mkdir(`/${name}`).then(refreshTree);
                    }} title="根目录新建文件夹">📁+</button>
                    <button onClick={() => {
                        const name = window.prompt('请输入文件名:');
                        if (name) workspace!.createFile(`/${name}`).then(refreshTree);
                    }} title="根目录新建文件">📄+</button>
                </div>
            </div>
            <div className={styles.content}>
                <Tree
                    aria-label="项目资源文件树"
                    items={treeData}
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={(keys) => {
                        setSelectedKeys(keys);
                        const path = Array.from(keys)[0] as string;
                        if (path) {
                             workspace?.fs.stat(path).then(s => {
                                 if (s?.type !== 'dir') {
                                     workspace.navigate(path);
                                 }
                             });
                        }
                    }}
                    expandedKeys={expandedKeys}
                    onExpandedChange={handleExpandedChange}
                    className={styles.treeRoot}
                >
                    {function renderItem(item: FileNode) {
                        return (
                             <TreeItem id={item.id} textValue={item.name} className={styles.treeItem}>
                                <TreeItemContent>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemMain}>
                                            {item.isDir && (
                                                <Button slot="chevron" className={styles.chevron}>
                                                    {expandedKeys !== 'all' && expandedKeys.has(item.id) ? '▾' : '▸'}
                                                </Button>
                                            )}
                                            {!item.isDir && <span className={styles.chevron} />}
                                            <span className={styles.icon}>{item.isDir ? '📁' : '📄'}</span>
                                            <span className={styles.name}>{item.name}</span>
                                        </div>
                                        <Button className={styles.deleteBtn} onPress={() => handleDelete(item.id)}>×</Button>
                                    </div>
                                </TreeItemContent>
                                <Collection items={item.children} />
                             </TreeItem>
                        );
                    }}
                </Tree>
            </div>
        </div>
    );
});