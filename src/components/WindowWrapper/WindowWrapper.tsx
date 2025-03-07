import { FC, ReactNode, useCallback, useEffect, useState, Children, isValidElement } from 'react';
import styles from './WindowWrapper.module.less';
import { WindowManager } from "./WindowManager.ts";

interface WindowWrapperProps {
    children?: ReactNode;
}

interface DockerItem {
    id: string;
    title: string;
    isMinimized: boolean;
}

export const WindowWrapper: FC<WindowWrapperProps> = ({ children }) => {
    const [dockerItems, setDockerItems] = useState<DockerItem[]>([]);

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            const windows = WindowManager.ins().getWindows();
            const items: DockerItem[] = [];
            windows.forEach((win, id) => {
                items.push({
                    id,
                    title: win.title,
                    isMinimized: win.isMinimized || false
                });
            });
            setDockerItems(items);
        };

        // 使用WindowManager的订阅机制来监听窗口状态变化
        const unsubscribe = WindowManager.ins().subscribe(updateDocker);
        updateDocker(); // 初始化Docker栏

        return () => unsubscribe();
    }, []);

    // 处理Docker点击
    const handleDockerItemClick = useCallback((id: string) => {
        const win = WindowManager.ins().getWindow(id);
        if (win) {
            win.handleMinimize();
        }
    }, []);

    return (
        <div className={styles.warper}>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.docker}>
                {dockerItems.map(item => (
                    <div
                        key={item.id}
                        className={styles.dockerItem}
                        onClick={() => handleDockerItemClick(item.id)}
                    >
                        <span className={styles.dockerTitle}>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};