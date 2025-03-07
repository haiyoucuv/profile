import { FC, ReactNode, useCallback, useEffect, useState, Children, isValidElement } from 'react';
import styles from './WindowWrapper.module.less';
import { WindowManager } from "./WindowManager.ts";
import { Window } from './Window/Window';

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

    // 验证子组件类型
    Children.forEach(children, child => {
        if (isValidElement(child) && child.type !== Window) {
            throw new Error('WindowWrapper只能接受Window组件作为子组件');
        }
    });

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            const windows = WindowManager.ins().getWindows();
            const items: DockerItem[] = [];
            windows.forEach((info, id) => {
                items.push({
                    id,
                    title: info.title,
                    isMinimized: info.isMinimized || false
                });
            });
            setDockerItems(items);
        };

        // 使用WindowManager的订阅机制来监听窗口状态变化
        const unsubscribe = WindowManager.ins().subscribe(updateDocker);
        updateDocker(); // 初始化Docker栏

        return () => unsubscribe();
    }, []);

    // 处理Docker项点击
    const handleDockerItemClick = useCallback((id: string) => {
        const windows = WindowManager.ins().getWindows();
        const windowInfo = windows.get(id);
        if (windowInfo) {
            windowInfo.isMinimized = !windowInfo.isMinimized;
            const windowElement = document.querySelector(`[data-window-id="${id}"]`) as HTMLElement;
            if (windowElement) {
                windowElement.style.display = windowInfo.isMinimized ? 'none' : 'flex';
                if (!windowInfo.isMinimized) {
                    const newZIndex = WindowManager.ins().getNextZIndex();
                    windowElement.style.zIndex = String(newZIndex);
                }
            }
            WindowManager.ins().registerWindow(id, windowInfo);
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