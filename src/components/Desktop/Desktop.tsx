import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Desktop.module.less';
import { AppManager } from "../../apps/AppManager.ts";
import { AppRegistry } from "../../apps/AppRegistry.ts";

interface DesktopIconProps {
    id: string;
    name: string;
    icon: string;
    x: number;
    y: number;
    onDoubleClick: (appId: string) => void;
    onMove: (appId: string, x: number, y: number) => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, name, icon, x, y, onDoubleClick, onMove }) => {
    const [isDragging, setIsDragging] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);

        const sX = e.clientX - x;
        const sY = e.clientY - y;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = e.clientX - sX;
            const newY = e.clientY - sY;

            // 限制在桌面范围内
            const maxX = window.innerWidth - 80;
            const maxY = window.innerHeight - 120; // 考虑Docker栏高度

            const clampedX = Math.max(0, Math.min(newX, maxX));
            const clampedY = Math.max(0, Math.min(newY, maxY));

            onMove(id, clampedX, clampedY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleDoubleClick = () => {
        onDoubleClick(id);
    };

    return <div
        ref={iconRef}
        className={`${styles.desktopIcon} ${isDragging ? styles.dragging : ''}`}
        style={{
            left: x,
            top: y,
            cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
    >
        <div className={styles.iconImage}>
            <img src={icon} alt={name}/>
        </div>
        <div className={styles.iconLabel}>
            {name}
        </div>
    </div>;
};

export interface DesktopProps {
    children?: React.ReactNode;
}

export const Desktop: React.FC<DesktopProps> = () => {
    const [desktopIcons, setDesktopIcons] = useState<Array<{
        id: string;
        name: string;
        icon: string;
        x: number;
        y: number;
    }>>([]);

    // 初始化桌面图标
    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 10;

        const initializeDesktopIcons = () => {
            const allApps = AppRegistry.ins.getDockerAppInfos();

            console.log(`Desktop: Attempt ${retryCount + 1}, Found apps:`, allApps);

            if (allApps.length === 0 && retryCount < maxRetries) {
                retryCount++;
                setTimeout(initializeDesktopIcons, 200);
                return;
            }

            // 为桌面创建图标布局（网格排列）
            const iconsPerRow = Math.floor(window.innerWidth / 100);
            const iconSpacing = 100;

            const icons = allApps.map((app, index) => {
                // 检查是否有保存的位置

                const row = Math.floor(index / iconsPerRow);
                const col = index % iconsPerRow;
                const x = 20 + col * iconSpacing;
                const y = 20 + row * 120;

                return {
                    id: app.id,
                    name: app.name,
                    icon: app.icon,
                    x,
                    y
                };
            });

            setDesktopIcons(icons);
            console.log('Desktop: Icons initialized:', icons.length);
        };

        // 开始初始化
        initializeDesktopIcons();
    }, []);

    // 处理图标双击启动应用
    const handleIconDoubleClick = async (appId: string) => {
        const result = await AppManager.ins.launchAppById(appId);
        console.log('Desktop: App launched successfully:', appId, result);
    };

    // 处理图标移动
    const handleIconMove = (appId: string, x: number, y: number) => {
        // 使用网格对齐
        setDesktopIcons((prev) => {
            return prev.map((icon) => {
                return icon.id === appId
                    ? { ...icon, x, y }
                    : icon;
            })
        });

    };

    return <div className={styles.desktop}>
        {/* 桌面背景 */}
        <div className={styles.desktopBackground}/>

        {/* 桌面图标 */}
        {desktopIcons.map(icon => {
            return <DesktopIcon
                key={icon.id}
                id={icon.id}
                name={icon.name}
                icon={icon.icon}
                x={icon.x}
                y={icon.y}
                onDoubleClick={handleIconDoubleClick}
                onMove={handleIconMove}
            />
        })}
    </div>;
};
