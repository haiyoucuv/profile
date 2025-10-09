

import { BaseRenderer } from "./BaseRenderer.ts";
import { WebGPURenderer } from "./WebGPURenderer.ts";
import { WebGLRenderer } from "./WebGLRenderer.ts";


export class RendererFactory {
    static async create(canvas: HTMLCanvasElement): Promise<BaseRenderer> {
        // 优先尝试WebGPU
        const webgpuRenderer = new WebGPURenderer(canvas);
        if (await webgpuRenderer.initialize()) {
            return webgpuRenderer;
        }

        // 降级到WebGL
        console.log('Falling back to WebGL');
        const webglRenderer = new WebGLRenderer(canvas);
        if (await webglRenderer.initialize()) {
            return webglRenderer;
        }

        throw new Error('Neither WebGPU nor WebGL2 is supported');
    }
}
