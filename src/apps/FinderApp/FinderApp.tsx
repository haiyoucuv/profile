import React, { useState, useEffect, useCallback } from "react";
import { VirtualApp, SystemContext, Window } from "@system";
import { createRoot, Root } from "react-dom/client";
import styles from "./FinderApp.module.less";

export class FinderApp extends VirtualApp {
    private appRoot: Root | null = null;

    launch(sys: SystemContext) {
        const win = sys.window.create("", {
            title: this.config.name,
            icon: this.config.icon,
            width: 800,
            height: 500,
        });

        this.appRoot = createRoot(win.content);
        this.appRoot.render(<FinderUI sys={sys} win={win} />);
    }

    onExit() {
        this.appRoot?.unmount();
    }
}

const FinderUI: React.FC<{ sys: SystemContext; win: Window }> = ({ sys, win }) => {
    const [currentPath, setCurrentPath] = useState("/");
    const [files, setFiles] = useState<{ name: string; isDir: boolean; size: number }[]>([]);
    const [selected, setSelected] = useState<string | null>(null);

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
        } else {
            setSelected(name);
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
                    <div className={`${styles.sidebarItem} ${currentPath === '/' ? styles.active : ''}`} onClick={() => setCurrentPath("/")}>💻 根目录</div>
                    <div className={`${styles.sidebarItem} ${currentPath.startsWith('/apps') ? styles.active : ''}`} onClick={() => setCurrentPath("/apps")}>📂 应用数据</div>
                    <div className={`${styles.sidebarItem} ${currentPath.startsWith('/shared') ? styles.active : ''}`} onClick={() => setCurrentPath("/shared")}>☁️ 共享目录</div>
                    <div className={`${styles.sidebarItem} ${currentPath.startsWith('/system') ? styles.active : ''}`} onClick={() => setCurrentPath("/system")}>⚙️ 系统配置</div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.toolbar}>
                    <button className={styles.backBtn} onClick={handleBack} disabled={currentPath === "/"}>⬅️</button>
                    <div className={styles.pathBar}>{currentPath}</div>
                </div>
                <div className={styles.content}>
                    {files.map((file) => (
                        <div
                            key={file.name}
                            className={`${styles.item} ${selected === file.name ? styles.selected : ""}`}
                            onDoubleClick={() => handleNavigate(file.name, file.isDir)}
                            onClick={() => setSelected(file.name)}
                        >
                            <span className={styles.icon}>{file.isDir ? "📁" : "📄"}</span>
                            <span className={styles.name}>{file.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
