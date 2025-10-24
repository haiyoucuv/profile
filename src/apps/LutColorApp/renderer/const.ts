export type RenderBackend = 'webgpu' | 'webgl';

export interface LUTData {
    size: number;
    data: Float32Array;
}

export interface RenderOptions {
    intensity: number;
    brightness: number;
    contrast: number;
    saturation: number;
    hue: number;
}

export const defaultRenderOptions = {
    intensity: 1.0,
    brightness: 0.0,
    contrast: 1.0,
    saturation: 1.0,
    hue: 0.0
}

// WebGPU资源接口
export interface WebGPUResources {
    imageTexture: GPUTexture;
    lutTexture: GPUTexture;
    uniformBuffer: GPUBuffer;
    bindGroup: GPUBindGroup;
}

// WebGL资源接口
export interface WebGLResources {
    imageTexture: WebGLTexture;
    lutTexture: WebGLTexture;
}

// 渲染参数接口
export interface RenderParams {
    options: RenderOptions;
    resources: WebGPUResources | WebGLResources;
    width: number;
    height: number;
}
