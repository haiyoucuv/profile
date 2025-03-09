import { FC, ReactNode, useCallback, useEffect, useState, Children, isValidElement } from 'react';
import styles from './Docker.module.less';
import { WindowManager } from "./WindowManager.ts";

interface WindowWrapperProps {
    children?: ReactNode;
}

interface DockerItem {
    id: string;
    icon: string;
    title: string;
    isMinimized: boolean;
}

export const Docker: FC<WindowWrapperProps> = ({ children }) => {
    const [dockerItems, setDockerItems] = useState<DockerItem[]>([]);

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            const windows = WindowManager.ins.getWindows();
            const items: DockerItem[] = [];
            windows.forEach((win, id) => {
                items.push({
                    id,
                    icon: win.icon,
                    title: win.title,
                    isMinimized: win.isMinimized || false
                });
            });
            setDockerItems(items);
        };

        // 使用WindowManager的订阅机制来监听窗口状态变化
        WindowManager.ins.on(WindowManager.EventType.ON_WINDOW_CHANGE, updateDocker);
        updateDocker(); // 初始化Docker栏

        return () => {
            WindowManager.ins.off(WindowManager.EventType.ON_WINDOW_CHANGE);
        }
    }, []);

    // 处理Docker点击
    const handleDockerItemClick = useCallback((id: string) => {
        const win = WindowManager.ins.getWindow(id);
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
                    <img
                        src={item.icon}
                        key={item.id}
                        className={styles.dockerItem}
                        onClick={() => handleDockerItemClick(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};