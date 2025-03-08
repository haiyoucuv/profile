import styles from './Window.module.less';
import classNames from "classnames";
import { WindowManager } from "../WindowManager.ts";


export type TResizeType = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export interface IWindowOptions {
    title: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
}

export class Window {
    readonly id = WindowManager.getNewId();

    title = '';

    private _children: HTMLElement | string = null;

    set children(children) {
        if (children === this._children) return;
        this._children = children;
        if (this.children instanceof HTMLElement) {
            this.content.appendChild(this.children);
        } else if (typeof this.children === 'string') {
            this.content.innerText = this.children;
        }
    }

    get children() {
        return this._children;
    }

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

    body: HTMLDivElement = document.createElement("div");
    titleBar: HTMLDivElement = document.createElement("div");
    content: HTMLDivElement = document.createElement("div");

    constructor(children: HTMLElement | string, options: IWindowOptions) {
        const { title = "Window", x = 100, y = 100, width = 250, height = 600 } = options;
        this.title = title;

        this.body.style.zIndex = String(WindowManager.ins.getNextZIndex());
        this.body.className = styles.window;


        this.createResizeHandle();
        this.createTitleBar();

        this.move(x, y);
        this.resize(width, height);

        this.content.className = styles.content;
        this.body.appendChild(this.content);
        this.children = children;

        this.createForceEvent();

        WindowManager.ins.registerWindow(this.id, this);
    }

    createResizeHandle() {
        (['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'] as TResizeType[]).forEach((resizeType) => {
            const handle = document.createElement('div');
            handle.className = classNames(styles.resizeHandle, styles[resizeType]);
            handle.addEventListener("pointerdown", (e) => this.handleResizeStart(e, resizeType));
            this.body.appendChild(handle);
        });
    }

    createTitleBar() {
        this.titleBar.innerHTML = `
            <div class=${styles.titleBar}>
                <div class="${styles.windowControls}">
                    <div class="${styles.controlButton} ${styles.close}"></div>
                    <div class="${styles.controlButton} ${styles.minimize}"></div>
                    <div class="${styles.controlButton} ${styles.maximize}"></div>
                </div>
                <span class="${styles.title}">${this.title}</span>
            </div>
        `;

        this.titleBar.addEventListener('pointerdown', this.handleReadyMove);
        this.titleBar.addEventListener('dblclick', this.handleChangeMaximize);

        this.titleBar.querySelector(`.${styles.close}`).addEventListener('click', this.handleClose);
        this.titleBar.querySelector(`.${styles.minimize}`).addEventListener('click', this.handleMinimize);
        this.titleBar.querySelector(`.${styles.maximize}`).addEventListener('click', this.handleChangeMaximize);

        this.body.appendChild(this.titleBar);
    }

    createForceEvent() {
        const iframeElement = this.body.querySelector('iframe');
        iframeElement?.addEventListener('load', () => {
            iframeElement?.contentWindow?.document.addEventListener('pointerup', this.focus);
        });

        this.body.addEventListener('pointerup', this.focus);
    }

    destroy() {
        WindowManager.ins.unregisterWindow(this.id);

        const iframeElement = this.body.querySelector('iframe');
        iframeElement?.contentWindow?.document.removeEventListener('click', this.focus);

        this.body.removeEventListener('pointerup', this.focus);
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
        this.isMinimized = !this.isMinimized;
        this.body.style.display = this.isMinimized ? 'none' : 'flex';
        this.isMinimized && this.focus();
    };

    handleClose = () => {
        WindowManager.ins.closeWindow(this);
    };

    focus = () => {
        const newZIndex = WindowManager.ins.getNextZIndex();
        this.body.style.zIndex = String(newZIndex);
    };

    move = (x: number, y: number) => {
        this.x = x;
        this.y = y;
        this.body.style.transform = `translate(${x}px, ${y}px)`;
    };

    resize = (width: number, height: number) => {
        this.width = width;
        this.height = height;
        this.body.style.width = `${width}px`;
        this.body.style.height = `${height}px`;
    };

    handleReadyMove = (e: PointerEvent) => {
        e.stopPropagation();
        document.body.style.userSelect = 'none';
        this.titleBar.style.cursor = 'grabbing';

        const startX = e.clientX - this.x;
        const startY = e.clientY - this.y;

        const handleGlobalMouseMove = (e: PointerEvent) => {
            WindowManager.ins.enableMask = true;
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            this.move(x, y);
        };

        const handleGlobalMouseUp = () => {
            WindowManager.ins.enableMask = false;
            document.body.style.userSelect = '';
            this.titleBar.style.cursor = 'grab';
            document.removeEventListener('pointermove', handleGlobalMouseMove);
            document.removeEventListener('pointerup', handleGlobalMouseUp);
        };

        document.addEventListener('pointermove', handleGlobalMouseMove);
        document.addEventListener('pointerup', handleGlobalMouseUp);
    };

    handleResizeStart = (e: PointerEvent, resizeType: TResizeType) => {
        e.stopPropagation();
        document.body.style.userSelect = 'none';

        const startX = e.clientX;
        const startY = e.clientY;

        const oldX = this.x;
        const oldY = this.y;
        const oldWidth = this.width;
        const oldHeight = this.height;

        const handleGlobalMouseMove = (e: PointerEvent) => {
            WindowManager.ins.enableMask = true;
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
            WindowManager.ins.enableMask = false;
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

}
