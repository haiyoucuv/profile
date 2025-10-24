import { LUTData, WebGPUResources } from "./const.ts";

export class WebGPUResourceManager {
    private device: GPUDevice;
    private pipeline: GPURenderPipeline;

    constructor(device: GPUDevice, pipeline: GPURenderPipeline) {
        this.device = device;
        this.pipeline = pipeline;
    }

    async createImageTexture(imageData: ImageData): Promise<GPUTexture> {
        const texture = this.device.createTexture({
            size: [imageData.width, imageData.height, 1],
            format: 'rgba8unorm',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        });

        this.device.queue.writeTexture(
            { texture },
            imageData.data,
            { bytesPerRow: imageData.width * 4 },
            { width: imageData.width, height: imageData.height }
        );

        return texture;
    }

    async createLUTTexture(lutData: LUTData): Promise<GPUTexture> {
        const texture = this.device.createTexture({
            size: [lutData.size, lutData.size, lutData.size],
            format: 'rgba8unorm',
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: '3d',
        });

        console.log(`Created 3D LUT texture: ${lutData.size}x${lutData.size}x${lutData.size}`);

        // 转换Float32Array到Uint8Array
        const uint8Data = new Uint8Array(lutData.data.length);
        for (let i = 0; i < lutData.data.length; i++) {
            uint8Data[i] = Math.round(Math.max(0, Math.min(1, lutData.data[i])) * 255);
        }

        this.device.queue.writeTexture(
            { texture },
            uint8Data,
            {
                bytesPerRow: lutData.size * 4,
                rowsPerImage: lutData.size
            },
            { width: lutData.size, height: lutData.size, depthOrArrayLayers: lutData.size }
        );

        return texture;
    }

    createUniformBuffer(): GPUBuffer {
        return this.device.createBuffer({
            size: 32, // 5 floats + padding for 16-byte alignment
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
    }

    createBindGroup(imageTexture: GPUTexture, lutTexture: GPUTexture, uniformBuffer: GPUBuffer): GPUBindGroup {
        console.log('Creating WebGPU bind group with 3D LUT texture');

        const bindGroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                { binding: 0, resource: { buffer: uniformBuffer } },
                { binding: 1, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 2, resource: imageTexture.createView() },
                { binding: 3, resource: this.device.createSampler({ magFilter: 'linear', minFilter: 'linear' }) },
                { binding: 4, resource: lutTexture.createView({ dimension: '3d' }) },
            ],
        });

        console.log('WebGPU bind group created successfully');
        return bindGroup;
    }

    async createResources(imageData: ImageData, lutData: LUTData): Promise<WebGPUResources> {
        const imageTexture = await this.createImageTexture(imageData);
        const lutTexture = await this.createLUTTexture(lutData);
        const uniformBuffer = this.createUniformBuffer();
        const bindGroup = this.createBindGroup(imageTexture, lutTexture, uniformBuffer);

        return {
            imageTexture,
            lutTexture,
            uniformBuffer,
            bindGroup
        };
    }

    updateUniformBuffer(uniformBuffer: GPUBuffer, options: any): void {
        const uniformData = new Float32Array(8); // 32 bytes / 4 = 8 floats
        uniformData[0] = options.intensity;
        uniformData[1] = options.brightness;
        uniformData[2] = options.contrast;
        uniformData[3] = options.saturation;
        uniformData[4] = options.hue;
        // uniformData[5-7] are padding for alignment

        this.device.queue.writeBuffer(uniformBuffer, 0, uniformData);
    }

    disposeResources(resources: WebGPUResources): void {
        resources.imageTexture.destroy();
        resources.lutTexture.destroy();
        resources.uniformBuffer.destroy();
    }
}
