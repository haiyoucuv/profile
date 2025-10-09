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
