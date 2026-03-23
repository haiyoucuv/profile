import React, { useEffect, useState } from 'react';
import { SystemWindow, WindowManager } from '@system';
import { WindowView } from './WindowView';
import styles from './WindowManager.module.less';

export const WindowManagerView: React.FC = () => {
    const [windows, setWindows] = useState<SystemWindow[]>([]);

    useEffect(() => {
        const updateWindows = () => {
            setWindows(WindowManager.ins.getWindows());
        };

        // 首次加载
        updateWindows();

        // 监听系统模型变化
        WindowManager.ins.on(WindowManager.EventType.ON_WINDOW_LIST_CHANGE, updateWindows);
        
        return () => {
            WindowManager.ins.off(WindowManager.EventType.ON_WINDOW_LIST_CHANGE, updateWindows);
        };
    }, []);

    return (
        <div className={styles.windowContainer}>
            {windows.map(win => (
                <WindowView key={win.id} model={win} />
            ))}
        </div>
    );
};
