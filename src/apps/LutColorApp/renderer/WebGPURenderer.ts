import { BaseRenderer } from "./BaseRenderer.ts";
import { LUTData, RenderOptions, WebGPUResources, RenderParams } from "./const.ts";
import { WebGPUResourceManager } from "./WebGPUResourceManager.ts";

import lutWgsl from "./shader/lut.wgsl?raw";

export class WebGPURenderer extends BaseRenderer {
    private device: GPUDevice | null = null;
    private context: GPUCanvasContext | null = null;
    private pipeline: GPURenderPipeline | null = null;
    private offscreenPipeline: GPURenderPipeline | null = null; // 用于离屏渲染的pipeline
    private pipelineLayout: GPUPipelineLayout | null = null; // 共享的pipeline layout
    private resourceManager: WebGPUResourceManager | null = null;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'webgpu');
    }

    async initialize(): Promise<boolean> {
        try {
            if (!navigator.gpu) {
                console.warn('WebGPU not supported');
                return false;
            }

            const adapter = await navigator.gpu.requestAdapter({ powerPreference: "high-performance" });
            if (!adapter) {
                console.warn('WebGPU adapter not available');
                return false;
            }

            this.device = await adapter.requestDevice();
            this.context = this.canvas.getContext('webgpu') as GPUCanvasContext;

            if (!this.context) {
                console.warn('WebGPU context not available');
                return false;
            }

            const format = navigator.gpu.getPreferredCanvasFormat();
            this.context.configure({
                device: this.device,
                format: format,
                alphaMode: 'premultiplied',
            });

            this.createPipelineLayout(); // 先创建共享的layout
            this.createPipeline();
            this.createOffscreenPipeline(); // 创建离屏渲染pipeline
            this.resourceManager = new WebGPUResourceManager(this.device, this.pipeline!);
            console.log('WebGPU initialized successfully');
            return true;
        } catch (error) {
            console.error('WebGPU initialization failed:', error);
            return false;
        }
    }

    private createPipelineLayout() {
        if (!this.device) return;

        // 创建显式的bind group layout
        const bindGroupLayout = this.device.createBindGroupLayout({
            entries: [
                { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } },
                { binding: 1, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'filtering' } },
                { binding: 2, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'float' } },
                { binding: 3, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'filtering' } },
                { binding: 4, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'float', viewDimension: '3d' } },
            ]
        });

        // 创建pipeline layout
        this.pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [bindGroupLayout]
        });
    }

    private createPipeline() {
        if (!this.device || !this.pipelineLayout) return;

        const shaderModule = this.device.createShaderModule({
            code: lutWgsl
        });

        this.pipeline = this.device.createRenderPipeline({
            layout: this.pipelineLayout, // 使用显式layout
            vertex: {
                module: shaderModule,
                entryPoint: 'vs_main',
            },
            fragment: {
                module: shaderModule,
                entryPoint: 'fs_main',
                targets: [{
                    format: navigator.gpu.getPreferredCanvasFormat(),
                }],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });
    }

    private createOffscreenPipeline() {
        if (!this.device || !this.pipelineLayout) return;

        const shaderModule = this.device.createShaderModule({
            code: lutWgsl
        });

        // 创建专门用于rgba8unorm格式的离屏渲染pipeline
        this.offscreenPipeline = this.device.createRenderPipeline({
            layout: this.pipelineLayout, // 使用相同的显式layout
            vertex: {
                module: shaderModule,
                entryPoint: 'vs_main',
            },
            fragment: {
                module: shaderModule,
                entryPoint: 'fs_main',
                targets: [{
                    format: 'rgba8unorm', // 固定使用rgba8unorm格式
                }],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });
    }

    async loadTexture(imageData: ImageData): Promise<void> {
        // 重新配置canvas尺寸和context
        if (!this.device || !this.context) return;

        this.canvas.width = imageData.width;
        this.canvas.height = imageData.height;

        const format = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: format,
            alphaMode: 'premultiplied',
        });
    }

    async loadLUT(lutData: LUTData): Promise<void> {
        // 这个方法现在只用于兼容性，实际资源管理由ResourceManager处理
        console.log('LUT loaded:', lutData.size);
    }

    async render(options: RenderOptions): Promise<void> {
        // 这个方法现在只用于兼容性，实际渲染使用renderWithResources
        console.log('Legacy render method called');
    }

    // 新的渲染方法，接受外部传入的资源
    async renderWithResources(params: RenderParams): Promise<void> {
        if (!this.device || !this.context || !this.pipeline) return;

        const resources = params.resources as WebGPUResources;

        // 更新uniform数据
        this.resourceManager?.updateUniformBuffer(resources.uniformBuffer, params.options);

        const commandEncoder = this.device.createCommandEncoder();
        const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: this.context.getCurrentTexture().createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 1 },
                loadOp: 'clear',
                storeOp: 'store',
            }],
        });

        renderPass.setPipeline(this.pipeline);
        renderPass.setBindGroup(0, resources.bindGroup);
        renderPass.draw(6);
        renderPass.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }

    async renderToBlob(options: RenderOptions, lutData: LUTData, width: number, height: number): Promise<Blob> {
        if (!this.device || !this.pipeline || !this.resourceManager) {
            throw new Error("WebGPU renderer not ready for preview.");
        }

        // 使用ResourceManager创建临时资源
        const tempResources = await this.resourceManager.createResources(
            new ImageData(new Uint8ClampedArray(width * height * 4), width, height), // 临时空图片
            lutData
        );

        // 创建离屏渲染纹理
        const renderTexture = this.device.createTexture({
            size: [width, height, 1],
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });

        const alignedBytesPerRow = Math.ceil(width * 4 / 256) * 256;
        const outputBuffer = this.device.createBuffer({
            size: alignedBytesPerRow * height,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        });

        // 更新uniform数据
        this.resourceManager.updateUniformBuffer(tempResources.uniformBuffer, options);

        // 渲染到离屏纹理
        const commandEncoder = this.device.createCommandEncoder();
        const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: renderTexture.createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 1 },
                loadOp: 'clear',
                storeOp: 'store',
            }],
        });
        renderPass.setPipeline(this.pipeline);
        renderPass.setBindGroup(0, tempResources.bindGroup);
        renderPass.draw(6);
        renderPass.end();

        // 复制纹理到缓冲区
        commandEncoder.copyTextureToBuffer(
            { texture: renderTexture },
            { buffer: outputBuffer, bytesPerRow: alignedBytesPerRow, rowsPerImage: height },
            { width, height, depthOrArrayLayers: 1 }
        );

        this.device.queue.submit([commandEncoder.finish()]);

        // 从缓冲区读取数据
        await outputBuffer.mapAsync(GPUMapMode.READ);
        const arrayBuffer = outputBuffer.getMappedRange();
        const pixels = new Uint8Array(width * height * 4);
        for (let y = 0; y < height; y++) {
            const start = y * alignedBytesPerRow;
            const end = start + width * 4;
            pixels.set(new Uint8Array(arrayBuffer.slice(start, end)), y * width * 4);
        }
        outputBuffer.unmap();

        // 清理资源
        renderTexture.destroy();
        outputBuffer.destroy();
        this.resourceManager.disposeResources(tempResources);

        // 转换为Blob
        return new Promise((resolve, reject) => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = width;
            tempCanvas.height = height;
            const ctx = tempCanvas.getContext('2d')!;
            const imageData = new ImageData(new Uint8ClampedArray(pixels.buffer), width, height);
            ctx.putImageData(imageData, 0, 0);
            tempCanvas.toBlob(blob => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error('Failed to create blob from preview canvas'));
                }
            }, 'image/png');
        });
    }

    // 新的预览渲染方法，接受外部传入的资源
    async renderToBlobWithResources(params: RenderParams): Promise<Blob> {
        if (!this.device || !this.offscreenPipeline) {
            throw new Error("WebGPU renderer not ready for preview.");
        }

        const resources = params.resources as WebGPUResources;

        // 使用rgba8unorm格式以确保颜色通道顺序正确
        const textureFormat: GPUTextureFormat = 'rgba8unorm';
        
        // 创建离屏渲染纹理
        const renderTexture = this.device.createTexture({
            size: [params.width, params.height, 1],
            format: textureFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });

        const alignedBytesPerRow = Math.ceil(params.width * 4 / 256) * 256;
        const outputBuffer = this.device.createBuffer({
            size: alignedBytesPerRow * params.height,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        });

        // 更新uniform数据
        this.resourceManager?.updateUniformBuffer(resources.uniformBuffer, params.options);

        // 渲染到离屏纹理（使用offscreenPipeline）
        const commandEncoder = this.device.createCommandEncoder();
        const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: renderTexture.createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 1 },
                loadOp: 'clear',
                storeOp: 'store',
            }],
        });
        renderPass.setPipeline(this.offscreenPipeline); // 使用离屏渲染pipeline
        renderPass.setBindGroup(0, resources.bindGroup);
        renderPass.draw(6);
        renderPass.end();

        // 复制纹理到缓冲区
        commandEncoder.copyTextureToBuffer(
            { texture: renderTexture },
            { buffer: outputBuffer, bytesPerRow: alignedBytesPerRow, rowsPerImage: params.height },
            { width: params.width, height: params.height, depthOrArrayLayers: 1 }
        );

        this.device.queue.submit([commandEncoder.finish()]);

        // 从缓冲区读取数据
        await outputBuffer.mapAsync(GPUMapMode.READ);
        const arrayBuffer = outputBuffer.getMappedRange();
        const pixels = new Uint8Array(params.width * params.height * 4);
        for (let y = 0; y < params.height; y++) {
            const start = y * alignedBytesPerRow;
            const end = start + params.width * 4;
            pixels.set(new Uint8Array(arrayBuffer.slice(start, end)), y * params.width * 4);
        }
        outputBuffer.unmap();

        // 清理资源
        renderTexture.destroy();
        outputBuffer.destroy();

        // 转换为Blob
        return new Promise((resolve, reject) => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = params.width;
            tempCanvas.height = params.height;
            const ctx = tempCanvas.getContext('2d')!;
            const imageData = new ImageData(new Uint8ClampedArray(pixels.buffer), params.width, params.height);
            ctx.putImageData(imageData, 0, 0);
            tempCanvas.toBlob(blob => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error('Failed to create blob from preview canvas'));
                }
            }, 'image/png');
        });
    }

    async exportImage(): Promise<Blob> {
        // 确保在导出前完成当前的渲染
        if (this.device) {
            await this.device.queue.onSubmittedWorkDone();
        }

        return new Promise((resolve, reject) => {
            try {
                this.canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error('Failed to create blob from canvas'));
                    }
                }, 'image/png', 1.0); // 设置最高质量
            } catch (error) {
                reject(error);
            }
        });
    }

    dispose(): void {
        this.device = null;
        this.context = null;
        this.resourceManager = null;
    }

    // 获取ResourceManager，供外部使用
    getResourceManager(): WebGPUResourceManager | null {
        return this.resourceManager;
    }
}
