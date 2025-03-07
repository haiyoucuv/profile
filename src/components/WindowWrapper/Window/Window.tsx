import {
    ReactNode,
    useState,
    MouseEvent,
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle
} from 'react';
import styles from './Window.module.less';
import classNames from "classnames";
import { WindowManager } from "../WindowManager.ts";

interface WindowProps {
    title: string;
    children?: ReactNode;
    className?: string;
    initWidth?: number;
    initHeight?: number;
    initX?: number;
    initY?: number;
}

export interface WindowInfo {
    x: number;
    y: number;
    width: number;
    height: number;
    title: string;
    id: string;
    isMinimized?: boolean;
    isMaximized?: boolean;
    prevX: number,
    prevY: number,
    prevWidth: number,
    prevHeight: number,
}

export interface WindowHandle {
    minimize: () => void;
    maximize: () => void;
    restore: () => void;
    focus: () => void;
    move: (x: number, y: number) => void;
    resize: (width: number, height: number) => void;
}

export const Window = forwardRef<WindowHandle, WindowProps>((
    {
        title,
        children,
        className = '',
        initWidth = 600,
        initHeight = 400,
        initX = 0,
        initY = 0,
    }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const id = useRef(Math.random().toString(36).substr(2, 9));

    const winInfoRef = useRef<WindowInfo>({
        x: initX,
        y: initY,
        width: initWidth,
        height: initHeight,
        prevX: initX,
        prevY: initY,
        prevWidth: initWidth,
        prevHeight: initHeight,
        title,
        id: id.current,
        isMinimized: false
    });

    useImperativeHandle(ref, () => ({
        minimize: handleMinimize,
        maximize: handleMaximize,
        restore: handleRestore,
        focus: focus,
        move: move,
        resize: resize
    }));

    useEffect(() => {
        WindowManager.ins().registerWindow(id.current, winInfoRef.current, {
            minimize: handleMinimize,
            maximize: handleMaximize,
            restore: handleRestore,
            focus: focus,
            move: move,
            resize: resize
        });
        return () => {
            WindowManager.ins().unregisterWindow(id.current);
        }
    }, []);


    const handleMaximize = () => {
        if (!isMaximized) {
            // 保存当前状态
            winInfoRef.current = {
                ...winInfoRef.current,
                prevX: winInfoRef.current.x,
                prevY: winInfoRef.current.y,
                prevWidth: winInfoRef.current.width,
                prevHeight: winInfoRef.current.height
            };
            // 最大化窗口
            const { innerWidth, innerHeight } = window;
            move(0, 0);
            resize(innerWidth, innerHeight);
        }
        setIsMaximized(!isMaximized);
        winInfoRef.current.isMaximized = !isMaximized;
        WindowManager.ins().registerWindow(id.current, winInfoRef.current);
    };

    const handleRestore = () => {
        if (isMaximized) {
            // 恢复到之前的状态
            const { prevX, prevY, prevWidth, prevHeight } = winInfoRef.current;
            move(prevX, prevY);
            resize(prevWidth, prevHeight);
            setIsMaximized(false);
            winInfoRef.current.isMaximized = false;
            WindowManager.ins().registerWindow(id.current, winInfoRef.current);
        }
    };

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
        winInfoRef.current.isMinimized = !isMinimized;
        if (divRef.current) {
            divRef.current.style.display = !isMinimized ? 'none' : 'flex';
            if (!isMinimized) {
                const newZIndex = WindowManager.ins().getNextZIndex();
                divRef.current.style.zIndex = String(newZIndex);
            }
        }
        WindowManager.ins().registerWindow(id.current, winInfoRef.current);
    };

    const focus = () => {
        const newZIndex = WindowManager.ins().getNextZIndex();
        divRef.current.style.zIndex = String(newZIndex);
    }

    const move = (x: number, y: number) => {
        winInfoRef.current.x = x;
        winInfoRef.current.y = y;
        divRef.current.style.left = `${x}px`;
        divRef.current.style.top = `${y}px`;
        // divRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    const resize = (width: number, height: number) => {
        winInfoRef.current.width = width;
        winInfoRef.current.height = height;
        divRef.current.style.width = `${width}px`;
        divRef.current.style.height = `${height}px`;
    }

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
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            move(x, y);
        };

        const handleGlobalMouseUp = () => {
            setIsDragging(false);
            document.body.style.userSelect = '';
            document.removeEventListener('pointermove', handleGlobalMouseMove);
            document.removeEventListener('pointerup', handleGlobalMouseUp);
        };

        document.addEventListener('pointermove', handleGlobalMouseMove);
        document.addEventListener('pointerup', handleGlobalMouseUp);
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
        const newWinIndo = { ...winInfo };

        const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {

            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            if (resizeType.includes('e')) {
                newWinIndo.width = Math.max(200, initWinInfo.width + deltaX);
            }

            if (resizeType.includes('w')) {
                const newWidth = newWinIndo.width = Math.max(200, initWinInfo.width - deltaX);
                const widthDiff = newWidth - initWinInfo.width;
                newWinIndo.x = initWinInfo.x - widthDiff;
            }

            if (resizeType.includes('s')) {
                newWinIndo.height = Math.max(200, initWinInfo.height + deltaY);
            }

            if (resizeType.includes('n')) {
                const newHeight = Math.max(200, initWinInfo.height - deltaY);
                newWinIndo.height = newHeight;
                const heightDiff = newHeight - initWinInfo.height;
                newWinIndo.y = initWinInfo.y - heightDiff;
            }

            move(newWinIndo.x, newWinIndo.y);
            resize(newWinIndo.width, newWinIndo.height);
        };

        const handleGlobalMouseUp = () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.body.style.userSelect = '';
        };

        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
    };

    useEffect(() => {
        const iframeElement = divRef.current?.querySelector('iframe');
        if (iframeElement) {
            iframeElement.addEventListener('load', () => {
                const iframeWindow = iframeElement.contentWindow;
                if (iframeWindow) {
                    iframeWindow.document.addEventListener('pointerup', focus);
                }
            });
        }

        divRef.current.addEventListener('pointerup', focus, { capture: false });

        return () => {
            const iframeElement = divRef.current?.querySelector('iframe');
            if (iframeElement?.contentWindow) {
                iframeElement.contentWindow.document.removeEventListener('click', focus);
            }
            divRef.current.removeEventListener('pointerup', focus, { capture: false });
        };
    }, []);

    return <div
        className={`${styles.window} ${className}`}
        ref={divRef}
        data-window-id={id.current}
        style={{
            pointerEvents: 'all',
            left: initX,
            top: initY,
            width: initWidth,
            height: initHeight,
            cursor: isDragging ? 'grabbing' : 'default',
            zIndex: String(WindowManager.ins().getNextZIndex()),
            display: isMinimized ? 'none' : 'flex'
        }}
    >
        <div
            className={classNames(styles.resizeHandle, styles.nw)}
            onPointerDown={(e) => handleResizeStart(e, 'nw')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.ne)}
            onPointerDown={(e) => handleResizeStart(e, 'ne')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.sw)}
            onPointerDown={(e) => handleResizeStart(e, 'sw')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.se)}
            onPointerDown={(e) => handleResizeStart(e, 'se')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.n)}
            onPointerDown={(e) => handleResizeStart(e, 'n')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.s)}
            onPointerDown={(e) => handleResizeStart(e, 's')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.w)}
            onPointerDown={(e) => handleResizeStart(e, 'w')}
        />
        <div
            className={classNames(styles.resizeHandle, styles.e)}
            onPointerDown={(e) => handleResizeStart(e, 'e')}
        />
        <div
            className={styles.titleBar} onPointerDown={handleReadyMove}
            onDoubleClick={isMaximized ? handleRestore : handleMaximize}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            <div className={styles.windowControls}>
                <div className={`${styles.controlButton} ${styles.close}`} />
                <div className={`${styles.controlButton} ${styles.minimize}`} onClick={handleMinimize} />
                <div className={`${styles.controlButton} ${styles.maximize}`}
                    onClick={isMaximized ? handleRestore : handleMaximize} />
            </div>
            <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>;
});
