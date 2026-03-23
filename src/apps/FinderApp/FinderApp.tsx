import React, { useState, useEffect, useCallback, useMemo } from "react";
import { VirtualApp, SystemContext, SystemWindow } from "@system";
import { createRoot, Root } from "react-dom/client";
import { ListBox, ListBoxItem, GridList, GridListItem, Button, Text } from 'react-aria-components';
import type { Selection, Key } from 'react-aria-components';
import styles from "./FinderApp.module.less";

// 侧边栏分类
const SIDEBAR_ITEMS = [
    { id: "/", label: "根目录", icon: "💻" },
    { id: "/apps", label: "应用数据", icon: "📂" },
    { id: "/shared", label: "共享目录", icon: "☁️" },
    { id: "/system", label: "系统配置", icon: "⚙️" },
];

export class FinderApp extends VirtualApp {
    private root: Root | null = null;

    async launch(sys: SystemContext) {
        const win = sys.window.create({
            title: this.config.name,
            icon: this.config.icon,
            x: this.config.defaultWindow.x || 100,
            y: this.config.defaultWindow.y || 100,
            width: this.config.defaultWindow.width,
            height: this.config.defaultWindow.height,
        });

        const container = await win.whenReady();
        this.root = createRoot(container);
        this.root.render(<FinderUI sys={sys} win={win} />);
    }

    onExit() {
        this.root?.unmount();
    }
}

const FinderUI: React.FC<{ sys: SystemContext; win: SystemWindow }> = ({ sys, win }) => {
    const [currentPath, setCurrentPath] = useState("/");
    const [files, setFiles] = useState<{ name: string; isDir: boolean; size: number }[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set<Key>());

    // 计算当前侧边栏哪个被选中
    const activeSidebarKey = useMemo<Selection>(() => {
        const found = SIDEBAR_ITEMS.slice().reverse().find(item => currentPath.startsWith(item.id));
        return found ? new Set([found.id]) : new Set();
    }, [currentPath]);

    const loadFiles = useCallback(async (path: string) => {
        try {
            const names = await sys.fs.readdir(path);
            const stats = await Promise.all(
                names.map(async (name) => {
                    const fullPath = path === "/" ? `/${name}` : `${path}/${name}`;
                    const stat = await sys.fs.stat(fullPath);
                    return { name, isDir: stat?.type === "dir", size: stat?.size || 0 };
                })
            );
            setFiles(stats.sort((a, b) => (a.isDir === b.isDir ? a.name.localeCompare(b.name) : a.isDir ? -1 : 1)));
            setSelectedKeys(new Set<Key>()); // 切换目录清空选择
        } catch (e) {
            console.error(e);
        }
    }, [sys]);

    useEffect(() => {
        loadFiles(currentPath);
    }, [currentPath, loadFiles]);

    const handleNavigate = (name: string, isDir: boolean) => {
        if (isDir) {
            setCurrentPath(currentPath === "/" ? `/${name}` : `${currentPath}/${name}`);
        }
    };

    const handleBack = () => {
        if (currentPath === "/") return;
        const parts = currentPath.split("/").filter(Boolean);
        parts.pop();
        setCurrentPath("/" + parts.join("/"));
    };

    return (
        <div className={styles.finder}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarGroup}>
                    <div className={styles.groupTitle}>位置</div>
                    <ListBox
                        aria-label="导航侧边栏"
                        items={SIDEBAR_ITEMS}
                        selectionMode="single"
                        selectedKeys={activeSidebarKey}
                        onSelectionChange={(keys) => {
                            const key = Array.from(keys)[0] as string;
                            if (key) setCurrentPath(key);
                        }}
                        className={styles.listBox}
                    >
                        {(item) => (
                            <ListBoxItem id={item.id} className={styles.sidebarItem}>
                                <span className={styles.itemIcon}>{item.icon}</span>
                                <Text slot="label">{item.label}</Text>
                            </ListBoxItem>
                        )}
                    </ListBox>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.toolbar}>
                    <Button className={styles.backBtn} onPress={handleBack} isDisabled={currentPath === "/"}>⬅️</Button>
                    <div className={styles.pathBar}>{currentPath}</div>
                </div>
                <GridList
                    aria-label="文件列表"
                    items={files}
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    onAction={(name) => {
                        const file = files.find(f => f.name === name);
                        if (file) handleNavigate(file.name, file.isDir);
                    }}
                    className={styles.content}
                >
                    {(file) => (
                        <GridListItem id={file.name} textValue={file.name} className={styles.item}>
                            <div className={styles.itemInner}>
                                <span className={styles.icon}>{file.isDir ? "📁" : "📄"}</span>
                                <span className={styles.name}>{file.name}</span>
                            </div>
                        </GridListItem>
                    )}
                </GridList>
            </div>
        </div>
    );
};
