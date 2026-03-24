import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from "classnames";
import { SystemWindow } from "@system";
import styles from './Window/Window.module.less';

export interface WindowViewProps {
    model: SystemWindow;
}

type TResizeType = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export const WindowView: React.FC<WindowViewProps> = ({ model }) => {
    const [config, setConfig] = useState({
        x: model.x,
        y: model.y,
        width: model.width,
        height: model.height,
        isMaximized: model.isMaximized,
        isMinimized: model.isMinimized,
        zIndex: model.zIndex,
        title: model.title,
        icon: model.icon,
    });
    const [isInteracting, setIsInteracting] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    // 同步模型状态到 React
    useEffect(() => {
        const updateConfig = () => {
            setConfig({
                x: model.x,
                y: model.y,
                width: model.width,
                height: model.height,
                isMaximized: model.isMaximized,
                isMinimized: model.isMinimized,
                zIndex: model.zIndex,
                title: model.title,
                icon: model.icon,
            });
        };

        model.on(SystemWindow.EventType.ON_CONFIG_CHANGE, updateConfig);
        model.on(SystemWindow.EventType.ON_FOCUS, updateConfig);
        
        return () => {
            model.off(SystemWindow.EventType.ON_CONFIG_CHANGE, updateConfig);
            model.off(SystemWindow.EventType.ON_FOCUS, updateConfig);
        };
    }, [model]);

    // 挂载内容
    useEffect(() => {
        if (!contentRef.current) return;
        model.attachContent(contentRef.current);
    }, [model]);

    const handleFocus = useCallback(() => {
        model.focus();
    }, [model]);

    const handleClose = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        model.close();
    }, [model]);

    const handleMaximize = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        model.setMaximized(!model.isMaximized);
    }, [model]);

    const handleMinimize = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        model.setMinimized(!model.isMinimized);
    }, [model]);

    const handleMoveStart = (e: React.PointerEvent) => {
        e.stopPropagation();
        const startX = e.clientX - model.x;
        const startY = e.clientY - model.y;

        const handleMouseMove = (moveEvent: PointerEvent) => {
            setIsInteracting(true);
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            let newX = moveEvent.clientX - startX;
            let newY = moveEvent.clientY - startY;

            // 限制窗口不能完全移出屏幕
            // 顶部不能移出屏幕（确保标题栏可见）
            newY = Math.max(0, newY);
            // 底部留出一点距离，确保能拖回去
            newY = Math.min(newY, screenHeight - 40);

            // 左右留出一点距离，防止完全消失
            newX = Math.max(newX, -model.width + 100);
            newX = Math.min(newX, screenWidth - 100);

            model.move(newX, newY);
        };

        const handleMouseUp = () => {
            setIsInteracting(false);
            document.removeEventListener('pointermove', handleMouseMove);
            document.removeEventListener('pointerup', handleMouseUp);
        };

        document.addEventListener('pointermove', handleMouseMove);
        document.addEventListener('pointerup', handleMouseUp);
        handleFocus();
    };

    const handleResizeStart = (e: React.PointerEvent, resizeType: TResizeType) => {
        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;
        const oldX = model.x;
        const oldY = model.y;
        const oldWidth = model.width;
        const oldHeight = model.height;

        const handleMouseMove = (moveEvent: PointerEvent) => {
            setIsInteracting(true);
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            let newX = oldX;
            let newY = oldY;
            let newWidth = oldWidth;
            let newHeight = oldHeight;

            const minWidth = 200;
            const minHeight = 200;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            if (resizeType.includes('e')) {
                newWidth = Math.max(minWidth, oldWidth + deltaX);
                // 限制右边界
                if (newX + newWidth > screenWidth) {
                    newWidth = screenWidth - newX;
                }
            }
            if (resizeType.includes('w')) {
                newWidth = Math.max(minWidth, oldWidth - deltaX);
                // 限制左边界
                let potentialX = oldX + (oldWidth - newWidth);
                if (potentialX < 0) {
                    potentialX = 0;
                    newWidth = oldX + oldWidth;
                }
                newX = potentialX;
            }
            if (resizeType.includes('s')) {
                newHeight = Math.max(minHeight, oldHeight + deltaY);
                // 限制下边界
                if (newY + newHeight > screenHeight) {
                    newHeight = screenHeight - newY;
                }
            }
            if (resizeType.includes('n')) {
                newHeight = Math.max(minHeight, oldHeight - deltaY);
                // 限制上边界
                let potentialY = oldY + (oldHeight - newHeight);
                if (potentialY < 0) {
                    potentialY = 0;
                    newHeight = oldY + oldHeight;
                }
                newY = potentialY;
            }

            model.move(newX, newY);
            model.resize(newWidth, newHeight);
        };

        const handleMouseUp = () => {
            setIsInteracting(false);
            document.removeEventListener('pointermove', handleMouseMove);
            document.removeEventListener('pointerup', handleMouseUp);
        };

        document.addEventListener('pointermove', handleMouseMove);
        document.addEventListener('pointerup', handleMouseUp);
        handleFocus();
    };

    const transform = config.isMaximized ? 'none' : `translate(${config.x}px, ${config.y}px)`;
    const width = config.isMaximized ? '100%' : `${config.width}px`;
    const height = config.isMaximized ? '100%' : `${config.height}px`;

    return (
        <div
            className={classNames(styles.window, { 
                [styles.maximized]: config.isMaximized,
                [styles.frameless]: model.frameless 
            })}
            style={{
                zIndex: config.zIndex,
                transform,
                width,
                height,
                display: config.isMinimized ? 'none' : 'flex'
            }}
            onPointerDown={handleFocus}
        >
            {isInteracting && <div className={styles.pointerMask} />}
            {/* Resize Handles */}
            {!config.isMaximized && !model.frameless && (['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'] as TResizeType[]).map(type => (
                <div
                    key={type}
                    className={classNames(styles.resizeHandle, styles[type])}
                    onPointerDown={(e) => handleResizeStart(e, type)}
                />
            ))}

            {!model.frameless && (
                <div className={styles.titleBar} onPointerDown={handleMoveStart} onDoubleClick={handleMaximize}>
                    <div className={styles.windowControls}>
                        <svg className={classNames(styles.controlButton, styles.close)} onClick={handleClose} onPointerDown={e => e.stopPropagation()} width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" className={styles.bg} />
                            <path className={styles.icon} d="M3.5 3.5L8.5 8.5M8.5 3.5L3.5 8.5" />
                        </svg>
                        <svg className={classNames(styles.controlButton, styles.minimize)} onClick={handleMinimize} onPointerDown={e => e.stopPropagation()} width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" className={styles.bg} />
                            <path className={styles.icon} d="M3 6H9" />
                        </svg>
                        <svg className={classNames(styles.controlButton, styles.maximize)} onClick={handleMaximize} onPointerDown={e => e.stopPropagation()} width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" className={styles.bg} />
                            <path className={classNames(styles.icon, styles.filled)} d="M8.5 3.5V7.5L4.5 3.5H8.5Z" />
                            <path className={classNames(styles.icon, styles.filled)} d="M3.5 8.5V4.5L7.5 8.5H3.5Z" />
                        </svg>
                    </div>
                    <span className={styles.title}>{config.title}</span>
                </div>
            )}

            <div className={styles.content} ref={contentRef} />
        </div>
    );
};
