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

    abstract renderToBlob(options: RenderOptions, lutData: LUTData, width: number, height: number): Promise<Blob>;

    abstract exportImage(): Promise<Blob>;

    abstract dispose(): void;
}
