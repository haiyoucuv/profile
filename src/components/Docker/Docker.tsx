import React, { useState, useEffect, useCallback } from 'react';
import styles from './Docker.module.less';
import { AppManager } from "../../apps/AppManager.ts";
import { AppRegistry } from "../../apps/AppRegistry.ts";
import useForceUpdate from "use-force-update";

interface WindowWrapperProps {
    children?: React.ReactNode;
}

export const Docker: React.FC<WindowWrapperProps> = ({ children }) => {
    const forceUpdate = useForceUpdate();
    const [loadingApps, setLoadingApps] = useState<Set<string>>(new Set());
    const [isInitialized, setIsInitialized] = useState(false);

    // 初始化应用注册表
    useEffect(() => {
        // 自动发现所有应用
        const initializeApps = async () => {
            try {
                // 使用 Vite 的 import.meta.glob 自动发现应用
                const manifests = await AppRegistry.discoverAppsWithGlob();

                // 注册到清单管理器
                manifests.forEach(manifest => {
                    AppRegistry.ins.registerManifest(manifest);
                });

                // 注册到应用注册表
                manifests.forEach(manifest => {
                    AppRegistry.ins.registerFromManifest(manifest);
                });

                setIsInitialized(true);
                forceUpdate();
            } catch (error) {
                console.error('Failed to initialize apps:', error);
            }
        };

        initializeApps();
    }, [forceUpdate]);

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            forceUpdate();
        };

        const handleAppLoading = (appId: string) => {
            setLoadingApps(prev => new Set(prev).add(appId));
        };

        const handleAppLoaded = ({ appId }: { appId: string }) => {
            setLoadingApps(prev => {
                const newSet = new Set(prev);
                newSet.delete(appId);
                return newSet;
            });
        };

        // 使用WindowManager的订阅机制来监听窗口状态变化
        AppManager.ins.on(AppManager.EventType.ON_APP_CHANGE, updateDocker);
        AppManager.ins.on(AppManager.EventType.ON_APP_LOADING, handleAppLoading);
        AppManager.ins.on(AppManager.EventType.ON_APP_LOADED, handleAppLoaded);
        updateDocker(); // 初始化Docker栏

        return () => {
            AppManager.ins.off(AppManager.EventType.ON_APP_CHANGE, updateDocker);
            AppManager.ins.off(AppManager.EventType.ON_APP_LOADING, handleAppLoading);
            AppManager.ins.off(AppManager.EventType.ON_APP_LOADED, handleAppLoaded);
        }
    }, []);

    // 处理DockerItem点击
    const handleItemClick = async (appId: string) => {
        if (loadingApps.has(appId)) return;

        const isRunning = AppManager.ins.isAppRunningById(appId);
        if (isRunning) {
            // 如果应用正在运行，最小化所有窗口
            const app = AppManager.ins.getAppById(appId);
            if (app) {
                app.windows.forEach((window) => {
                    window.handleMinimize();
                });
            }
        } else {
            // 如果应用未运行，启动应用
            setLoadingApps(prev => new Set(prev).add(appId));

            try {
                await AppManager.ins.launchAppById(appId);
            } catch (error) {
                console.error(`Failed to launch app ${appId}:`, error);
            } finally {
                setLoadingApps(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(appId);
                    return newSet;
                });
            }
        }
    };

    // 获取 Docker 应用列表
    const dockerApps = AppRegistry.ins.getDockerAppInfos();

    // 如果还没初始化完成，显示加载状态
    if (!isInitialized) {
        return <div className={styles.warper}>
            <div className={styles.docker}>
                <div className={styles.pinnedArea}>
                    <div className={styles.loadingText}>正在加载应用...</div>
                </div>
            </div>
        </div>;
    }

    return <div className={styles.warper}>
        <div className={styles.docker}>
            <div className={styles.pinnedArea}>
                {dockerApps.map((app) => {
                    const isRunning = AppManager.ins.isAppRunningById(app.id);
                    const isLoading = loadingApps.has(app.id);
                    return <div key={app.id} className={styles.dockerItemWrapper}>
                        <img
                            src={app.icon}
                            className={`${styles.dockerItem} ${isLoading ? styles.loading : ''}`}
                            onClick={() => handleItemClick(app.id)}
                            style={{ opacity: isLoading ? 0.8 : 1 }}
                        />
                        {isRunning && <div className={styles.activeIndicator} />}
                    </div>
                })}
            </div>
        </div>
    </div>;
};
