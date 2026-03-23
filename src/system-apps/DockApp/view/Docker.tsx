import React, { useState, useEffect, useCallback } from 'react';
import styles from './Docker.module.less';
import { SystemContext, SystemEvent } from "@system";
import useForceUpdate from "use-force-update";

interface WindowWrapperProps {
    sys: SystemContext;
}

export const Docker: React.FC<WindowWrapperProps> = ({ sys }) => {
    const forceUpdate = useForceUpdate();
    const [loadingApps, setLoadingApps] = useState<Set<string>>(new Set());

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            forceUpdate();
        };

        const handleAppLoading = (appId: string) => {
            setLoadingApps(prev => new Set(prev).add(appId));
        };

        const handleAppLoaded = (appId: string) => {
            setLoadingApps(prev => {
                const newSet = new Set(prev);
                newSet.delete(appId);
                return newSet;
            });
        };

        const unAppChange = sys.ipc.on(SystemEvent.APP_CHANGE, updateDocker);
        const unAppLoading = sys.ipc.on(SystemEvent.APP_LOADING, (appId: string) => handleAppLoading(appId));
        const unAppLoaded = sys.ipc.on(SystemEvent.APP_LOADED, (appId: string) => handleAppLoaded(appId));
        
        updateDocker(); // 初始化Docker栏

        return () => {
            unAppChange();
            unAppLoading();
            unAppLoaded();
        }
    }, [sys]);

    // 处理DockerItem点击
    const handleItemClick = async (appId: string) => {
        if (loadingApps.has(appId)) return;

        const isRunning = sys.app.isRunning(appId);
        if (isRunning) {
            // 如果应用正在运行，切换窗口最小化状态
            const windows = sys.app.getWindows(appId);
            if (windows && windows.length > 0) {
                const allMinimized = windows.every(w => w.isMinimized);
                windows.forEach((window) => {
                    window.setMinimized(!allMinimized);
                    if (allMinimized) window.focus();
                });
            }
        } else {
            // 如果应用未运行，启动应用
            try {
                await sys.app.launch(appId);
            } catch (error) {
                console.error(`Failed to launch app ${appId}:`, error);
            }
        }
    };

    // 获取 Docker 应用列表
    const dockerApps = sys.app.list();

    return <div className={styles.docker}>
        <div className={styles.pinnedArea}>
            {dockerApps.map((app) => {
                const isRunning = sys.app.isRunning(app.id);
                const isLoading = loadingApps.has(app.id);
                return <div key={app.id} className={styles.dockerItemWrapper}>
                    <img
                        src={app.icon}
                        className={`${styles.dockerItem} ${isLoading ? styles.loading : ''}`}
                        onClick={() => handleItemClick(app.id)}
                        style={{ opacity: isLoading ? 0.8 : 1 }}
                    />
                    {isRunning && <div className={styles.activeIndicator}/>}
                </div>
            })}
        </div>
    </div>;
};
