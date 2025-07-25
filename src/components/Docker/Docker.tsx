import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './Docker.module.less';
import { GitHubApp } from "../../apps/GitHubApp/GitHubApp.ts";
import { EditorApp } from "../../apps/EditorApp/EditorApp.ts";
import { AppManager, TAppConstructor } from "../../apps/AppManager.ts";
import { VirtualApp } from "../../apps/VirtualApp.ts";
import useForceUpdate from "use-force-update";
import { BiliBiliApp } from "../../apps/BiliBiliApp/BiliBiliApp.ts";
import { WeChatApp } from "../../apps/WeChatApp/WeChatApp.tsx";
import { SandGameApp } from "../../apps/SandGameApp/SandGameApp.tsx";

interface WindowWrapperProps {
    children?: ReactNode;
}

const PinnedApp = [EditorApp, WeChatApp, BiliBiliApp, GitHubApp, SandGameApp];

export const Docker: FC<WindowWrapperProps> = ({ children }) => {
    const forceUpdate = useForceUpdate();

    // 监听窗口状态变化
    useEffect(() => {
        const updateDocker = () => {
            forceUpdate();
        };

        // 使用WindowManager的订阅机制来监听窗口状态变化
        AppManager.ins.on(AppManager.EventType.ON_APP_CHANGE, updateDocker);
        updateDocker(); // 初始化Docker栏

        return () => {
            AppManager.ins.off(AppManager.EventType.ON_APP_CHANGE, updateDocker);
        }
    }, []);

    // 处理DockerItem点击
    const handleItemClick = useCallback((cls: TAppConstructor<VirtualApp>) => {
        const isRunning = AppManager.ins.isAppRunning(cls);
        if (isRunning) {
            AppManager.ins.getApp(cls).windows.forEach((window) => {
                window.handleMinimize();
            });
        } else {
            AppManager.ins.launchApp(cls);
        }
    }, []);

    return <div className={styles.warper}>
        <div className={styles.content}>
            {children}
        </div>
        <div className={styles.docker}>
            <div className={styles.pinnedArea}>
                {PinnedApp.map((cls) => {
                    const isRunning = AppManager.ins.isAppRunning(cls);
                    return <div key={cls.id} className={styles.dockerItemWrapper}>
                        <img
                            src={cls.icon}
                            className={styles.dockerItem}
                            onClick={() => handleItemClick(cls)}
                        />
                        {isRunning && <div className={styles.activeIndicator}/>}
                    </div>
                })}
            </div>
        </div>
    </div>;
};
