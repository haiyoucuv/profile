import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from "classnames";
import { Window } from "@system";
import styles from './Window/Window.module.less';

export interface WindowViewProps {
    model: Window;
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

        model.on(Window.EventType.ON_CONFIG_CHANGE, updateConfig);
        model.on(Window.EventType.ON_FOCUS, updateConfig);
        
        return () => {
            model.off(Window.EventType.ON_CONFIG_CHANGE, updateConfig);
            model.off(Window.EventType.ON_FOCUS, updateConfig);
        };
    }, [model]);

    // 挂载内容
    useEffect(() => {
        if (!contentRef.current) return;
        // 如果内容已经挂载，不要重复挂载，防止 React 状态丢失
        if (contentRef.current.contains(model.content)) return;
        contentRef.current.innerHTML = '';
        contentRef.current.appendChild(model.content);
    }, [model.content]);

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
            model.move(moveEvent.clientX - startX, moveEvent.clientY - startY);
        };

        const handleMouseUp = () => {
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
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            let newX = oldX;
            let newY = oldY;
            let newWidth = oldWidth;
            let newHeight = oldHeight;

            if (resizeType.includes('e')) newWidth = Math.max(200, oldWidth + deltaX);
            if (resizeType.includes('w')) {
                newWidth = Math.max(200, oldWidth - deltaX);
                newX = oldX + (oldWidth - newWidth);
            }
            if (resizeType.includes('s')) newHeight = Math.max(200, oldHeight + deltaY);
            if (resizeType.includes('n')) {
                newHeight = Math.max(200, oldHeight - deltaY);
                newY = oldY + (oldHeight - newHeight);
            }

            model.move(newX, newY);
            model.resize(newWidth, newHeight);
        };

        const handleMouseUp = () => {
            document.removeEventListener('pointermove', handleMouseMove);
            document.removeEventListener('pointerup', handleMouseUp);
        };

        document.addEventListener('pointermove', handleMouseMove);
        document.addEventListener('pointerup', handleMouseUp);
        handleFocus();
    };

    if (config.isMinimized) return null;

    const transform = config.isMaximized ? 'none' : `translate(${config.x}px, ${config.y}px)`;
    const width = config.isMaximized ? '100%' : `${config.width}px`;
    const height = config.isMaximized ? '100%' : `${config.height}px`;

    return (
        <div
            className={classNames(styles.window, { [styles.maximized]: config.isMaximized })}
            style={{
                zIndex: config.zIndex,
                transform,
                width,
                height,
                display: config.isMinimized ? 'none' : 'flex'
            }}
            onPointerDown={handleFocus}
        >
            {/* Resize Handles */}
            {!config.isMaximized && (['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'] as TResizeType[]).map(type => (
                <div
                    key={type}
                    className={classNames(styles.resizeHandle, styles[type])}
                    onPointerDown={(e) => handleResizeStart(e, type)}
                />
            ))}

            <div className={styles.titleBar} onPointerDown={handleMoveStart} onDoubleClick={handleMaximize}>
                <div className={styles.windowControls}>
                    <div className={classNames(styles.controlButton, styles.close)} onClick={handleClose}></div>
                    <div className={classNames(styles.controlButton, styles.minimize)} onClick={handleMinimize}></div>
                    <div className={classNames(styles.controlButton, styles.maximize)} onClick={handleMaximize}></div>
                </div>
                <span className={styles.title}>{config.title}</span>
            </div>

            <div className={styles.content} ref={contentRef} />
        </div>
    );
};
