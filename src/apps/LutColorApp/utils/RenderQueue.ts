import { RefObject } from 'react';
import { BaseRenderer, defaultRenderOptions, RenderOptions } from '../renderer';
import { LutManager, LutPreset } from '../LutManager';

// 定义任务类型
interface MainRenderTask {
    type: 'main';
    options: RenderOptions;
}

interface PreviewRenderTask {
    type: 'preview';
    preset: LutPreset;
    width: number;
    height: number;
    options: RenderOptions;
    resolve: (blob: Blob) => void;
    reject: (error: Error) => void;
}

type RenderTask = MainRenderTask | PreviewRenderTask;

export class RenderQueue {
    private rendererRef: RefObject<BaseRenderer>;
    private taskQueue: RenderTask[] = [];
    private isProcessing = false;

    constructor(rendererRef: RefObject<BaseRenderer>) {
        this.rendererRef = rendererRef;
    }

    // 请求主画布渲染（高优先级）
    public requestMainRender(options: RenderOptions): void {
        // 移除队列中任何待处理的主渲染任务，以避免不必要的重复渲染
        this.taskQueue = this.taskQueue.filter(task => task.type !== 'main');
        // 将新任务插入到队列的最前面
        this.taskQueue.unshift({ type: 'main', options });
        this.startProcessing();
    }

    // 请求预览图渲染（低优先级）
    public requestPreviewRender(preset: LutPreset, width: number, height: number, options: RenderOptions): Promise<Blob> {
        return new Promise((resolve, reject) => {
            const task: PreviewRenderTask = {
                type: 'preview',
                preset,
                width,
                height,
                options,
                resolve,
                reject
            };
            // 将任务添加到队列末尾
            this.taskQueue.push(task);
            this.startProcessing();
        });
    }

    private startProcessing(): void {
        if (!this.isProcessing) {
            this.isProcessing = true;
            requestAnimationFrame(this.processNextTask);
        }
    }

    private processNextTask = async (): Promise<void> => {
        if (this.taskQueue.length === 0) {
            this.isProcessing = false;
            return;
        }

        const task = this.taskQueue.shift()!;
        const renderer = this.rendererRef.current;

        if (!renderer) {
            console.error("Renderer not available, skipping render task.");
            // 如果有待处理的promise，拒绝它
            if (task.type === 'preview') {
                task.reject(new Error('Renderer not available'));
            }
            this.continueProcessing();
            return;
        }

        try {
            switch (task.type) {
                case 'main':
                    await renderer.render(task.options);
                    break;
                case 'preview':
                    const lutData = await LutManager.instance.getLutData(task.preset);
                    const blob = await renderer.renderToBlob(task.options, lutData, task.width, task.height);
                    task.resolve(blob);
                    break;
            }
        } catch (error) {
            console.error("Failed to process render task:", error);
            if (task.type === 'preview') {
                task.reject(error as Error);
            }
        }

        this.continueProcessing();
    }

    private continueProcessing(): void {
        if (this.taskQueue.length > 0) {
            requestAnimationFrame(this.processNextTask);
        } else {
            this.isProcessing = false;
        }
    }
}
