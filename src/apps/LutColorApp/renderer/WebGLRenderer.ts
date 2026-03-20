import { BaseRenderer } from "./BaseRenderer.ts";
import { LUTData, RenderOptions, WebGLResources, RenderParams } from "./const.ts";
import { WebGLResourceManager } from "./WebGLResourceManager.ts";

import lutVert from "./shader/lut.vert?raw";
import lutFrag from "./shader/lut.frag?raw";


export class WebGLRenderer extends BaseRenderer {
    private gl: WebGL2RenderingContext | null = null;
    private program: WebGLProgram | null = null;
    private resourceManager: WebGLResourceManager | null = null;
    private framebuffer: WebGLFramebuffer | null = null;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'webgl');
    }

    // 辅助函数：翻转像素数据的Y轴
    private flipPixelsY(pixels: Uint8Array, width: number, height: number): Uint8Array {
        const flipped = new Uint8Array(pixels.length);
        const rowSize = width * 4;
        
        for (let y = 0; y < height; y++) {
            const sourceRow = (height - 1 - y) * rowSize;
            const targetRow = y * rowSize;
            flipped.set(pixels.subarray(sourceRow, sourceRow + rowSize), targetRow);
        }
        
        return flipped;
    }

    async initialize(): Promise<boolean> {
        try {
            this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext;
            if (!this.gl) {
                console.warn('WebGL2 not supported');
                return false;
            }

            await this.createShaderProgram();
            this.setupGeometry();
            this.resourceManager = new WebGLResourceManager(this.gl, this.program!);
            console.log('WebGL initialized successfully');
            return true;
        } catch (error) {
            console.error('WebGL initialization failed:', error);
            return false;
        }
    }

    private async createShaderProgram(): Promise<void> {
        if (!this.gl) return;

        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, lutVert);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, lutFrag);

        this.program = this.gl.createProgram()!;
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);

        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            throw new Error('Shader program linking failed: ' + this.gl.getProgramInfoLog(this.program));
        }
    }

    private createShader(type: number, source: string): WebGLShader {
        if (!this.gl) throw new Error('WebGL context not initialized');

        const shader = this.gl.createShader(type)!;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            throw new Error('Shader compilation failed: ' + this.gl.getShaderInfoLog(shader));
        }

        return shader;
    }

    private setupGeometry(): void {
        if (!this.gl || !this.program) return;

        const positions = new Float32Array([
            -1, -1, 0, 1,
            1, -1, 1, 1,
            -1, 1, 0, 0,
            1, -1, 1, 1,
            1, 1, 1, 0,
            -1, 1, 0, 0,
        ]);

        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

        const positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
        const texCoordLocation = this.gl.getAttribLocation(this.program, 'a_texCoord');

        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 16, 0);

        this.gl.enableVertexAttribArray(texCoordLocation);
        this.gl.vertexAttribPointer(texCoordLocation, 2, this.gl.FLOAT, false, 16, 8);
    }

    async loadTexture(imageData: ImageData): Promise<void> {
        if (!this.gl) return;

        // 设置canvas尺寸
        this.canvas.width = imageData.width;
        this.canvas.height = imageData.height;
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
        if (!this.gl || !this.program || !this.resourceManager) return;

        const resources = params.resources as WebGLResources;

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.useProgram(this.program);

        // 绑定纹理
        this.resourceManager.bindTextures(resources);

        // 更新uniform
        this.resourceManager.updateUniforms(params.options);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }

    async renderToBlob(options: RenderOptions, lutData: LUTData, width: number, height: number): Promise<Blob> {
        if (!this.gl || !this.program || !this.resourceManager) {
            throw new Error("WebGL renderer not ready for preview.");
        }

        // 使用ResourceManager创建临时资源
        const tempResources = await this.resourceManager.createResources(
            new ImageData(new Uint8ClampedArray(width * height * 4), width, height),
            lutData
        );

        // 创建离屏framebuffer
        const framebuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);

        const renderTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, renderTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, width, height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, renderTexture, 0);

        // 渲染到离屏buffer
        this.gl.viewport(0, 0, width, height);
        this.gl.useProgram(this.program);

        this.resourceManager.bindTextures(tempResources);
        this.resourceManager.updateUniforms(options);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

        // 读取像素
        const pixels = new Uint8Array(width * height * 4);
        this.gl.readPixels(0, 0, width, height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);

        // 翻转Y轴（WebGL坐标系与Canvas 2D不同）
        const flippedPixels = this.flipPixelsY(pixels, width, height);

        // 清理资源
        this.gl.deleteFramebuffer(framebuffer);
        this.gl.deleteTexture(renderTexture);
        this.resourceManager.disposeResources(tempResources);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        // 转换为Blob
        return new Promise((resolve, reject) => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = width;
            tempCanvas.height = height;
            const ctx = tempCanvas.getContext('2d')!;
            const imageData = new ImageData(new Uint8ClampedArray(flippedPixels), width, height);
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
        if (!this.gl || !this.program || !this.resourceManager) {
            throw new Error("WebGL renderer not ready for preview.");
        }

        const resources = params.resources as WebGLResources;

        // 创建离屏framebuffer
        const framebuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);

        const renderTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, renderTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, params.width, params.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, renderTexture, 0);

        // 渲染到离屏buffer
        this.gl.viewport(0, 0, params.width, params.height);
        this.gl.useProgram(this.program);

        this.resourceManager.bindTextures(resources);
        this.resourceManager.updateUniforms(params.options);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

        // 读取像素
        const pixels = new Uint8Array(params.width * params.height * 4);
        this.gl.readPixels(0, 0, params.width, params.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);

        // 翻转Y轴（WebGL坐标系与Canvas 2D不同）
        const flippedPixels = this.flipPixelsY(pixels, params.width, params.height);

        // 清理资源
        this.gl.deleteFramebuffer(framebuffer);
        this.gl.deleteTexture(renderTexture);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        // 转换为Blob
        return new Promise((resolve, reject) => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = params.width;
            tempCanvas.height = params.height;
            const ctx = tempCanvas.getContext('2d')!;
            const imageData = new ImageData(new Uint8ClampedArray(flippedPixels), params.width, params.height);
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
        // 确保WebGL完成所有渲染操作
        if (this.gl) {
            this.gl.finish();
        }

        return new Promise((resolve, reject) => {
            try {
                this.canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    }
                    else {
                        reject(new Error('Failed to create blob from canvas'));
                    }
                }, 'image/png', 1.0);
            }
            catch (error) {
                reject(error);
            }
        });
    }

    dispose(): void {
        if (this.gl) {
            this.gl.deleteProgram(this.program);
            this.gl.deleteFramebuffer(this.framebuffer);
        }
        this.gl = null;
        this.resourceManager = null;
    }

    // 获取ResourceManager，供外部使用
    getResourceManager(): WebGLResourceManager | null {
        return this.resourceManager;
    }
}
