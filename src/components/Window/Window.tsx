import { FC, ReactNode, useState, MouseEvent, useEffect, useCallback, useRef } from 'react';
import styles from './Window.module.less';
import classNames from "classnames";

interface WindowProps {
    title: string;
    children?: ReactNode;
    className?: string;
    initWidth?: number;
    initHeight?: number;
    initX?: number;
    initY?: number;
}

interface WindowInfo  {
    x: number;
    y: number;
    width: number;
    height: number;
}


const Window: FC<WindowProps> = (
    {
        title,
        children,
        className = '',
        initWidth = 600,
        initHeight = 600,
        initX = 0,
        initY = 0,
    }
) => {
    const [isDragging, setIsDragging] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);
    const winInfoRef = useRef<WindowInfo>({
        x: initX,
        y: initY,
        width: initWidth,
        height: initHeight,
    });

    /**
     * 移动窗口
     * @param e
     */
    const handleReadyMove = (e: MouseEvent) => {
        e.stopPropagation();
        setIsDragging(true);
        document.body.style.userSelect = 'none';

        const winInfo = winInfoRef.current;
        const startX = e.clientX - winInfo.x;
        const startY = e.clientY - winInfo.y;

        const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
            const x = winInfo.x = e.clientX - startX;
            const y = winInfo.y = e.clientY - startY;
            divRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        const handleGlobalMouseUp = () => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
        };

        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
    };

    /**
     * 调整窗口大小
     * @param e
     * @param resizeType
     */
    const handleResizeStart = (e: MouseEvent, resizeType: 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw') => {
        e.stopPropagation();
        document.body.style.userSelect = 'none';

        const winInfo = winInfoRef.current;

        const startX = e.clientX;
        const startY = e.clientY;

        const initWinInfo = { ...winInfo };

        const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {

            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            if (resizeType.includes('w')) {
                winInfo.width = Math.max(200, initWinInfo.width + deltaX);
            }

            if (resizeType.includes('e')) {
                const newWidth = Math.max(200, initWinInfo.width - deltaX);
                winInfo.width = newWidth;
                const widthDiff = newWidth - initWinInfo.width;
                winInfo.x = initWinInfo.x - widthDiff;
            }

            if (resizeType.includes('s')) {
                winInfo.height = Math.max(200, initWinInfo.height + deltaY);
            }

            if (resizeType.includes('n')) {
                const newHeight = Math.max(200, initWinInfo.height - deltaY);
                winInfo.height = newHeight;
                const heightDiff = newHeight - initWinInfo.height;
                winInfo.y = initWinInfo.y - heightDiff;
            }

            divRef.current.style.width = `${winInfo.width}px`;
            divRef.current.style.height = `${winInfo.height}px`;
            divRef.current.style.transform = `translate(${winInfo.x}px, ${winInfo.y}px)`;
        };

        const handleGlobalMouseUp = () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.body.style.userSelect = '';
        };

        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
    };

    return <div
        className={`${styles.window} ${className}`}
        ref={divRef}
        style={{
            transform: `translate(${initX}px, ${initY}px)`,
            width: initWidth,
            height: initHeight,
            cursor: isDragging ? 'grabbing' : 'default'
        }}
    >
        <div
            className={classNames(styles.resizeHandle, styles.nw)}
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.ne)}
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.sw)}
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.se)}
            onMouseDown={(e) => handleResizeStart(e, 'se')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.n)}
            onMouseDown={(e) => handleResizeStart(e, 'n')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.s)}
            onMouseDown={(e) => handleResizeStart(e, 's')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.e)}
            onMouseDown={(e) => handleResizeStart(e, 'w')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.w)}
            onMouseDown={(e) => handleResizeStart(e, 'e')}
        />
        <div
            className={styles.titleBar}
            onMouseDown={handleReadyMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>;
};

export default Window;