import { Component, ReactNode, MouseEvent, createRef, Ref } from 'react';
import styles from './Window.module.less';
import classNames from "classnames";
import { WindowManager } from "../WindowManager.ts";
import { createPortal } from "react-dom";

interface WindowProps {
    title: string;
    children?: ReactNode;
    className?: string;
    initWidth?: number;
    initHeight?: number;
    initX?: number;
    initY?: number;
}

interface WindowState {
    isDragging: boolean;
    isMinimized: boolean;
    showMask: boolean;
}

export class Window extends Component<WindowProps, WindowState> {
    private divRef = createRef<HTMLDivElement>();
    readonly id = WindowManager.getNewId();

    title = '';

    x = 0;
    y = 0;
    width = 0;
    height = 0;

    private prevX = 0;
    private prevY = 0;
    private prevWidth = 0;
    private prevHeight = 0;

    isMaximized = false;
    isMinimized = false;

    state = {
        isDragging: false,
        isMinimized: false,
        showMask: false
    };

    componentDidMount() {

        const { title, initX, initY, initWidth, initHeight } = this.props;

        this.title = title;

        this.move(initX, initY);
        this.resize(initWidth, initHeight);

        WindowManager.ins().registerWindow(this.id, this);

        const iframeElement = this.divRef.current?.querySelector('iframe');
        iframeElement?.addEventListener('load', () => {
            iframeElement?.contentWindow?.document.addEventListener('pointerup', this.focus);
        });

        this.divRef.current?.addEventListener('pointerup', focus);
    }

    componentWillUnmount() {
        WindowManager.ins().unregisterWindow(this.id);

        const iframeElement = this.divRef.current?.querySelector('iframe');
        iframeElement?.contentWindow?.document.removeEventListener('click', this.focus);

        this.divRef.current?.removeEventListener('pointerup', this.focus, { capture: false });
    }

    handleMaximize = () => {
        this.isMaximized = true;
        this.prevX = this.x;
        this.prevY = this.y;
        this.prevWidth = this.width;
        this.prevHeight = this.height;

        const { innerWidth, innerHeight } = window;
        this.move(0, 0);
        this.resize(innerWidth, innerHeight);
    };

    handleRestore = () => {
        this.isMaximized = false;
        this.move(this.prevX, this.prevY);
        this.resize(this.prevWidth, this.prevHeight);
    };

    handleMinimize = () => {
        console.log(this.isMaximized);
        this.isMinimized = !this.isMinimized;
        this.setState({ isMinimized: this.isMinimized });
        this.isMinimized && this.focus();
    };

    handleClose = () => {
        if (this.divRef.current) {
            this.divRef.current.remove();
            WindowManager.ins().unregisterWindow(this.id);
        }
    };

    focus = () => {
        if (this.divRef.current) {
            const newZIndex = WindowManager.ins().getNextZIndex();
            this.divRef.current.style.zIndex = String(newZIndex);
        }
    };

    move = (x: number, y: number) => {
        this.x = x;
        this.y = y;
        if (this.divRef.current) {
            this.divRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    resize = (width: number, height: number) => {
        this.width = width;
        this.height = height;
        if (this.divRef.current) {
            this.divRef.current.style.width = `${width}px`;
            this.divRef.current.style.height = `${height}px`;
        }
    };

    handleReadyMove = (e: MouseEvent) => {
        e.stopPropagation();
        this.setState({ isDragging: true });
        document.body.style.userSelect = 'none';

        const startX = e.clientX - this.x;
        const startY = e.clientY - this.y;

        const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
            this.setState({ showMask: true });
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            this.move(x, y);
        };

        const handleGlobalMouseUp = () => {
            this.setState({
                isDragging: false,
                showMask: false
            });
            document.body.style.userSelect = '';
            document.removeEventListener('pointermove', handleGlobalMouseMove);
            document.removeEventListener('pointerup', handleGlobalMouseUp);
        };

        document.addEventListener('pointermove', handleGlobalMouseMove);
        document.addEventListener('pointerup', handleGlobalMouseUp);
    };

    handleResizeStart = (e: MouseEvent, resizeType: 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw') => {
        e.stopPropagation();
        document.body.style.userSelect = 'none';

        const startX = e.clientX;
        const startY = e.clientY;

        const oldX = this.x;
        const oldY = this.y;
        const oldWidth = this.width;
        const oldHeight = this.height;

        const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
            this.setState({ showMask: true });
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            if (resizeType.includes('e')) {
                this.width = Math.max(200, oldWidth + deltaX);
            }

            if (resizeType.includes('w')) {
                const newWidth = this.width = Math.max(200, oldWidth - deltaX);
                const widthDiff = newWidth - oldWidth;
                this.x = oldX - widthDiff;
            }

            if (resizeType.includes('s')) {
                this.height = Math.max(200, oldHeight + deltaY);
            }

            if (resizeType.includes('n')) {
                const newHeight = Math.max(200, oldHeight - deltaY);
                this.height = newHeight;
                const heightDiff = newHeight - oldHeight;
                this.y = oldY - heightDiff;
            }

            this.move(this.x, this.y);
            this.resize(this.width, this.height);
        };

        const handleGlobalMouseUp = () => {
            this.setState({ showMask: false });
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.body.style.userSelect = '';
        };

        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
    };

    handleChangeMaximize = () => {
        this.isMaximized ? this.handleRestore() : this.handleMaximize();
    }

    render() {
        const { title, children, className, initX, initY, initWidth, initHeight } = this.props;
        const { isDragging, isMinimized, showMask } = this.state;

        return (
            <div
                className={`${styles.window} ${className}`}
                ref={this.divRef}
                data-window-id={this.id}
                style={{
                    transform: `translate(${initX}px, ${initY}px)`,
                    width: initWidth,
                    height: initHeight,
                    cursor: isDragging ? 'grabbing' : 'default',
                    zIndex: String(WindowManager.ins().getNextZIndex()),
                    display: isMinimized ? 'none' : 'flex'
                }}
            >
                {showMask && createPortal(
                    <div
                        style={{
                            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 9999
                        }}
                    />,
                    document.body
                )}
                <div
                    className={classNames(styles.resizeHandle, styles.nw)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'nw')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.ne)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'ne')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.sw)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'sw')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.se)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'se')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.n)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'n')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.s)}
                    onPointerDown={(e) => this.handleResizeStart(e, 's')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.w)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'w')}
                />
                <div
                    className={classNames(styles.resizeHandle, styles.e)}
                    onPointerDown={(e) => this.handleResizeStart(e, 'e')}
                />
                <div
                    className={styles.titleBar}
                    onPointerDown={this.handleReadyMove}
                    onDoubleClick={this.handleChangeMaximize}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    <div className={styles.windowControls}>
                        <div className={`${styles.controlButton} ${styles.close}`} onClick={this.handleClose}/>
                        <div className={`${styles.controlButton} ${styles.minimize}`} onClick={this.handleMinimize}/>
                        <div
                            className={`${styles.controlButton} ${styles.maximize}`}
                            onClick={this.handleChangeMaximize}
                        />
                    </div>
                    <span className={styles.title}>{title}</span>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        );
    }
}
