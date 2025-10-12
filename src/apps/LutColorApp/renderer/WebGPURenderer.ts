import { BaseRenderer } from "./BaseRenderer.ts";
import { LUTData, RenderOptions } from "./const.ts";

import lutWgsl from "./shader/lut.wgsl?raw";

export class WebGPURenderer extends BaseRenderer {
    private device: GPUDevice | null = null;
    private context: GPUCanvasContext | null = null;
    private pipeline: GPURenderPipeline | null = null;
    private imageTexture: GPUTexture | null = null;
    private lutTexture: GPUTexture | null = null;
    private uniformBuffer: GPUBuffer | null = null;
    private bindGroup: GPUBindGroup | null = null;

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

            this.createPipeline();
            console.log('WebGPU initialized successfully');
            return true;
        } catch (error) {
            console.error('WebGPU initialization failed:', error);
            return false;
        }
    }

    private createPipeline() {
        if (!this.device) return;

        const shaderModule = this.device.createShaderModule({
            code: lutWgsl
        });

        this.pipeline = this.device.createRenderPipeline({
            layout: 'auto',
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

        // 创建uniform buffer (需要16字节对齐)
        this.uniformBuffer = this.device.createBuffer({
            size: 32, // 5 floats + padding for 16-byte alignment
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
    }

    private createBindGroup(): void {
        if (!this.device || !this.pipeline || !this.imageTexture || !this.lutTexture || !this.uniformBuffer) {
            console.log('Cannot create bind group - missing resources');
            return;
        }

        console.log('Creating WebGPU bind group with 3D LUT texture');

        this.bindGroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                { binding: 0, resource: { buffer: this.uniformBuffer } },
                { binding: 1, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 2, resource: this.imageTexture.createView() },
                { binding: 3, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 4, resource: this.lutTexture.createView({ dimension: '3d' }) },
            ],
        });

        console.log('WebGPU bind group created successfully');
    }

    async loadTexture(imageData: ImageData): Promise<void> {
        if (!this.device || !this.context) return;

        // 重新配置canvas尺寸和context
        this.canvas.width = imageData.width;
        this.canvas.height = imageData.height;

        const format = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: format,
            alphaMode: 'premultiplied',
        });

        this.imageTexture = this.device.createTexture({
            size: [imageData.width, imageData.height, 1],
            format: 'rgba8unorm',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        });

        this.device.queue.writeTexture(
            { texture: this.imageTexture },
            imageData.data,
            { bytesPerRow: imageData.width * 4 },
            { width: imageData.width, height: imageData.height }
        );

        // 重新创建bind group（如果LUT已加载）
        if (this.lutTexture && this.uniformBuffer && this.pipeline) {
            this.createBindGroup();
        }
    }

    async loadLUT(lutData: LUTData): Promise<void> {
        if (!this.device) return;

        this.lutTexture = this.device.createTexture({
            size: [lutData.size, lutData.size, lutData.size],
            format: 'rgba8unorm',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: '3d',
        });

        console.log(`Created 3D LUT texture: ${lutData.size}x${lutData.size}x${lutData.size}`);

        // 转换Float32Array到Uint8Array (WebGPU版本)
        const uint8Data = new Uint8Array(lutData.data.length);
        for (let i = 0; i < lutData.data.length; i++) {
            uint8Data[i] = Math.round(Math.max(0, Math.min(1, lutData.data[i])) * 255);
        }

        this.device.queue.writeTexture(
            { texture: this.lutTexture },
            uint8Data,
            {
                bytesPerRow: lutData.size * 4,
                rowsPerImage: lutData.size
            },
            { width: lutData.size, height: lutData.size, depthOrArrayLayers: lutData.size }
        );

        // 创建bind group（如果图片已加载）
        if (this.imageTexture && this.uniformBuffer && this.pipeline) {
            this.createBindGroup();
        }
    }

    async render(options: RenderOptions): Promise<void> {
        if (!this.device || !this.context || !this.pipeline || !this.bindGroup || !this.uniformBuffer) return;

        // 更新uniform数据 (16字节对齐)
        const uniformData = new Float32Array(8); // 32 bytes / 4 = 8 floats
        uniformData[0] = options.intensity;
        uniformData[1] = options.brightness;
        uniformData[2] = options.contrast;
        uniformData[3] = options.saturation;
        uniformData[4] = options.hue;
        // uniformData[5-7] are padding for alignment

        this.device.queue.writeBuffer(this.uniformBuffer, 0, uniformData);

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
        renderPass.setBindGroup(0, this.bindGroup);
        renderPass.draw(6);
        renderPass.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }

    async renderToBlob(options: RenderOptions, lutData: LUTData, width: number, height: number): Promise<Blob> {
        if (!this.device || !this.pipeline || !this.imageTexture) {
            throw new Error("WebGPU renderer not ready for preview.");
        }

        // 1. Create temporary resources for off-screen rendering
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

        const tempLutTexture = this.device.createTexture({
            size: [lutData.size, lutData.size, lutData.size],
            format: 'rgba8unorm',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: '3d',
        });
        const uint8Data = new Uint8Array(lutData.data.map(v => Math.round(Math.max(0, Math.min(1, v)) * 255)));
        this.device.queue.writeTexture(
            { texture: tempLutTexture },
            uint8Data,
            { bytesPerRow: lutData.size * 4, rowsPerImage: lutData.size },
            { width: lutData.size, height: lutData.size, depthOrArrayLayers: lutData.size }
        );

        const tempUniformBuffer = this.device.createBuffer({
            size: 32,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        const uniformData = new Float32Array(8);
        uniformData[0] = options.intensity;
        uniformData[1] = options.brightness;
        uniformData[2] = options.contrast;
        uniformData[3] = options.saturation;
        uniformData[4] = options.hue;
        this.device.queue.writeBuffer(tempUniformBuffer, 0, uniformData);

        const tempBindGroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                { binding: 0, resource: { buffer: tempUniformBuffer } },
                { binding: 1, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 2, resource: this.imageTexture.createView() },
                { binding: 3, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 4, resource: tempLutTexture.createView({ dimension: '3d' }) },
            ],
        });

        // 2. Render to the off-screen texture
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
        renderPass.setBindGroup(0, tempBindGroup);
        renderPass.draw(6);
        renderPass.end();

        // 3. Copy the texture to the buffer
        commandEncoder.copyTextureToBuffer(
            { texture: renderTexture },
            { buffer: outputBuffer, bytesPerRow: alignedBytesPerRow, rowsPerImage: height },
            { width, height, depthOrArrayLayers: 1 }
        );

        this.device.queue.submit([commandEncoder.finish()]);

        // 4. Read data back from the buffer
        await outputBuffer.mapAsync(GPUMapMode.READ);
        const arrayBuffer = outputBuffer.getMappedRange();
        const pixels = new Uint8Array(width * height * 4);
        for (let y = 0; y < height; y++) {
            const start = y * alignedBytesPerRow;
            const end = start + width * 4;
            pixels.set(new Uint8Array(arrayBuffer.slice(start, end)), y * width * 4);
        }
        outputBuffer.unmap();

        // 5. Cleanup
        renderTexture.destroy();
        outputBuffer.destroy();
        tempLutTexture.destroy();
        tempUniformBuffer.destroy();

        // 6. Convert pixels to Blob
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
        this.imageTexture?.destroy();
        this.lutTexture?.destroy();
        this.uniformBuffer?.destroy();
        this.device = null;
        this.context = null;
    }
}
