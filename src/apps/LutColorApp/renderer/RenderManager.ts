import { BaseRenderer } from "./BaseRenderer.ts";
import { WebGPURenderer } from "./WebGPURenderer.ts";
import { WebGLRenderer } from "./WebGLRenderer.ts";
import { WebGPUResourceManager } from "./WebGPUResourceManager.ts";
import { WebGLResourceManager } from "./WebGLResourceManager.ts";
import { LUTData, RenderOptions, WebGPUResources, WebGLResources, RenderParams } from "./const.ts";
import { LutManager, LutPreset } from "../LutManager.ts";

/**
 * 统一的渲染管理器
 * 负责资源管理和渲染调度，确保主渲染和预览渲染效果一致
 */
export class RenderManager {
    private renderer: BaseRenderer | null = null;
    private gpuResourceManager: WebGPUResourceManager | null = null;
    private glResourceManager: WebGLResourceManager | null = null;
    private currentResources: WebGPUResources | WebGLResources | null = null;
    private currentImageData: ImageData | null = null;
    private currentLutData: LUTData | null = null;
    private isWebGPU: boolean = false;

    constructor() {}

    async initialize(canvas: HTMLCanvasElement): Promise<boolean> {
        try {
            // 尝试创建WebGPU渲染器
            const webgpuRenderer = new WebGPURenderer(canvas);
            if (await webgpuRenderer.initialize()) {
                this.renderer = webgpuRenderer;
                this.gpuResourceManager = webgpuRenderer.getResourceManager();
                this.isWebGPU = true;
                console.log('WebGPU renderer initialized');
                return true;
            }
        } catch (error) {
            console.warn('WebGPU initialization failed:', error);
        }

        // 降级到WebGL
        try {
            console.log('Falling back to WebGL2');
            const webglRenderer = new WebGLRenderer(canvas);
            if (await webglRenderer.initialize()) {
                this.renderer = webglRenderer;
                this.glResourceManager = webglRenderer.getResourceManager();
                this.isWebGPU = false;
                console.log('WebGL2 renderer initialized');
                return true;
            }
        } catch (error) {
            console.error('WebGL2 initialization failed:', error);
        }

        return false;
    }

    /**
     * 加载图片资源
     */
    async loadImage(imageData: ImageData): Promise<void> {
        if (!this.renderer) {
            throw new Error('Renderer not initialized');
        }

        this.currentImageData = imageData;

        // 先配置canvas尺寸
        await this.renderer.loadTexture(imageData);

        if (this.isWebGPU && this.gpuResourceManager) {
            // WebGPU: 如果已有LUT，创建资源
            if (this.currentLutData) {
                this.currentResources = await this.gpuResourceManager.createResources(
                    imageData, 
                    this.currentLutData
                );
                console.log('WebGPU resources created after loading image');
            }
        } else if (!this.isWebGPU && this.glResourceManager) {
            // WebGL: 如果已有LUT，创建资源
            if (this.currentLutData) {
                this.currentResources = await this.glResourceManager.createResources(
                    imageData, 
                    this.currentLutData
                );
                console.log('WebGL resources created after loading image');
            }
        }
    }

    /**
     * 加载LUT资源
     */
    async loadLUT(lutData: LUTData): Promise<void> {
        if (!this.renderer) {
            throw new Error('Renderer not initialized');
        }

        this.currentLutData = lutData;

        if (this.isWebGPU && this.gpuResourceManager) {
            // WebGPU: 如果已有图片，创建资源
            if (this.currentImageData) {
                this.currentResources = await this.gpuResourceManager.createResources(
                    this.currentImageData, 
                    lutData
                );
                console.log('WebGPU resources created after loading LUT');
            } else {
                console.log('LUT loaded but no image yet');
            }
        } else if (!this.isWebGPU && this.glResourceManager) {
            // WebGL: 如果已有图片，创建资源
            if (this.currentImageData) {
                this.currentResources = await this.glResourceManager.createResources(
                    this.currentImageData, 
                    lutData
                );
                console.log('WebGL resources created after loading LUT');
            } else {
                console.log('LUT loaded but no image yet');
            }
        }
    }

    /**
     * 主渲染 - 渲染到canvas
     */
    async render(options: RenderOptions): Promise<void> {
        if (!this.renderer) {
            throw new Error('Renderer not initialized');
        }

        if (!this.currentResources) {
            console.warn('Cannot render: resources not ready. Image:', !!this.currentImageData, 'LUT:', !!this.currentLutData);
            return;
        }
        
        // 使用新的渲染方法
        const params: RenderParams = {
            options,
            resources: this.currentResources,
            width: this.currentImageData?.width || 800,
            height: this.currentImageData?.height || 600
        };
        
        console.log(`Rendering with ${this.isWebGPU ? 'WebGPU' : 'WebGL'} resources:`, params.width, 'x', params.height);
        
        if (this.isWebGPU) {
            await (this.renderer as WebGPURenderer).renderWithResources(params);
        } else {
            await (this.renderer as WebGLRenderer).renderWithResources(params);
        }
    }

    /**
     * 预览渲染 - 渲染到Blob
     */
    async renderPreview(options: RenderOptions, width: number, height: number): Promise<Blob> {
        if (!this.renderer || !this.currentResources) {
            throw new Error('Renderer not ready for preview');
        }

        // 使用新的预览渲染方法
        const params: RenderParams = {
            options,
            resources: this.currentResources,
            width,
            height
        };
        
        if (this.isWebGPU) {
            return await (this.renderer as WebGPURenderer).renderToBlobWithResources(params);
        } else {
            return await (this.renderer as WebGLRenderer).renderToBlobWithResources(params);
        }
    }

    /**
     * 使用预设进行预览渲染
     */
    async renderPreviewWithPreset(preset: LutPreset, options: RenderOptions, width: number, height: number): Promise<Blob> {
        if (!this.renderer || !this.currentImageData) {
            throw new Error('Renderer not ready for preview');
        }

        // 获取预设的LUT数据
        const lutData = await LutManager.instance.getLutData(preset);

        if (this.isWebGPU && this.gpuResourceManager) {
            // WebGPU: 创建临时资源进行预览
            const tempResources = await this.gpuResourceManager.createResources(
                this.currentImageData, 
                lutData
            );

            const params: RenderParams = {
                options,
                resources: tempResources,
                width,
                height
            };

            const blob = await (this.renderer as WebGPURenderer).renderToBlobWithResources(params);
            
            // 清理临时资源
            this.gpuResourceManager.disposeResources(tempResources);
            
            return blob;
        } else if (!this.isWebGPU && this.glResourceManager) {
            // WebGL: 创建临时资源进行预览
            const tempResources = await this.glResourceManager.createResources(
                this.currentImageData, 
                lutData
            );

            const params: RenderParams = {
                options,
                resources: tempResources,
                width,
                height
            };

            const blob = await (this.renderer as WebGLRenderer).renderToBlobWithResources(params);
            
            // 清理临时资源
            this.glResourceManager.disposeResources(tempResources);
            
            return blob;
        } else {
            throw new Error('Resource manager not available');
        }
    }

    /**
     * 导出图片
     */
    async exportImage(): Promise<Blob> {
        if (!this.renderer) {
            throw new Error('Renderer not initialized');
        }

        return await this.renderer.exportImage();
    }

    /**
     * 检查是否有图片和LUT
     */
    hasResources(): boolean {
        return !!(this.currentImageData && this.currentLutData);
    }

    /**
     * 获取当前图片尺寸
     */
    getImageDimensions(): { width: number; height: number } | null {
        if (!this.currentImageData) return null;
        return {
            width: this.currentImageData.width,
            height: this.currentImageData.height
        };
    }

    /**
     * 获取渲染器后端信息
     */
    getBackendInfo(): string {
        if (!this.renderer) return 'Not initialized';
        return this.isWebGPU ? 'WebGPU' : 'WebGL2';
    }

    /**
     * 清理资源
     */
    dispose(): void {
        if (this.currentResources) {
            if (this.isWebGPU && this.gpuResourceManager) {
                this.gpuResourceManager.disposeResources(this.currentResources as WebGPUResources);
            } else if (!this.isWebGPU && this.glResourceManager) {
                this.glResourceManager.disposeResources(this.currentResources as WebGLResources);
            }
        }
        this.renderer?.dispose();
        this.renderer = null;
        this.gpuResourceManager = null;
        this.glResourceManager = null;
        this.currentResources = null;
        this.currentImageData = null;
        this.currentLutData = null;
    }
}
