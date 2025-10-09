import { LUTData, RenderBackend, RenderOptions } from "./const.ts";


export abstract class BaseRenderer {
    protected canvas: HTMLCanvasElement;
    backend: RenderBackend;

    constructor(canvas: HTMLCanvasElement, backend: RenderBackend) {
        this.canvas = canvas;
        this.backend = backend;
    }

    abstract initialize(): Promise<boolean>;

    abstract loadTexture(imageData: ImageData): Promise<void>;

    abstract loadLUT(lutData: LUTData): Promise<void>;

    abstract render(options: RenderOptions): Promise<void>;

    abstract exportImage(): Promise<Blob>;

    abstract dispose(): void;
}
