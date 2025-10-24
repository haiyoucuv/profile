import { RefObject } from 'react';
import { BaseRenderer, defaultRenderOptions, RenderOptions } from '../renderer';
import { LutManager, LutPreset } from '../LutManager';
import { RenderManager } from '../renderer/RenderManager';

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
    private renderManager: RenderManager | null = null;
    private taskQueue: RenderTask[] = [];
    private isProcessing = false;

    constructor(rendererRef: RefObject<BaseRenderer>, renderManager?: RenderManager) {
        this.rendererRef = rendererRef;
        this.renderManager = renderManager || null;
    }

    // 设置渲染管理器
    setRenderManager(renderManager: RenderManager): void {
        this.renderManager = renderManager;
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

        // 检查是否有可用的渲染器
        if (!this.renderManager && !renderer) {
            console.error("Neither render manager nor renderer available, skipping render task.");
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
                    if (this.renderManager) {
                        // 使用新的渲染管理器
                        await this.renderManager.render(task.options);
                    } else if (renderer) {
                        // 降级到传统方式
                        await renderer.render(task.options);
                    }
                    break;
                case 'preview':
                    if (this.renderManager) {
                        // 使用新的渲染管理器进行预览
                        const blob = await this.renderManager.renderPreviewWithPreset(
                            task.preset, 
                            task.options, 
                            task.width, 
                            task.height
                        );
                        task.resolve(blob);
                    } else if (renderer) {
                        // 降级到传统方式
                        const lutData = await LutManager.instance.getLutData(task.preset);
                        const blob = await renderer.renderToBlob(task.options, lutData, task.width, task.height);
                        task.resolve(blob);
                    }
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
