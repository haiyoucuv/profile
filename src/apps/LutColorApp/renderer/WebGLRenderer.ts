import { BaseRenderer } from "./BaseRenderer.ts";
import { LUTData, RenderOptions } from "./const.ts";

import lutVert from "./shader/lut.vert?raw";
import lutFrag from "./shader/lut.frag?raw";


export class WebGLRenderer extends BaseRenderer {
    private gl: WebGL2RenderingContext | null = null;
    private program: WebGLProgram | null = null;
    private imageTexture: WebGLTexture | null = null;
    private lutTexture: WebGLTexture | null = null;
    private framebuffer: WebGLFramebuffer | null = null;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'webgl');
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

        this.imageTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, imageData.width, imageData.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, imageData.data);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    }

    async loadLUT(lutData: LUTData): Promise<void> {
        if (!this.gl) return;

        this.lutTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_3D, this.lutTexture);
        // 转换Float32Array到Uint8Array (WebGL版本)
        const uint8Data = new Uint8Array(lutData.data.length);
        for (let i = 0; i < lutData.data.length; i++) {
            uint8Data[i] = Math.round(Math.max(0, Math.min(1, lutData.data[i])) * 255);
        }

        this.gl.texImage3D(
            this.gl.TEXTURE_3D, 0, this.gl.RGBA,
            lutData.size, lutData.size, lutData.size, 0,
            this.gl.RGBA, this.gl.UNSIGNED_BYTE, uint8Data
        );
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);
    }

    async render(options: RenderOptions): Promise<void> {
        if (!this.gl || !this.program || !this.imageTexture || !this.lutTexture) return;

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.useProgram(this.program);

        // 绑定纹理
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture);
        this.gl.uniform1i(this.gl.getUniformLocation(this.program, 'u_image'), 0);

        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_3D, this.lutTexture);
        this.gl.uniform1i(this.gl.getUniformLocation(this.program, 'u_lut'), 1);

        // 设置uniform
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_intensity'), options.intensity);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_brightness'), options.brightness);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_contrast'), options.contrast);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_saturation'), options.saturation);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_hue'), options.hue);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
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
        if (this.gl) {
            this.gl.deleteTexture(this.imageTexture);
            this.gl.deleteTexture(this.lutTexture);
            this.gl.deleteProgram(this.program);
            this.gl.deleteFramebuffer(this.framebuffer);
        }
        this.gl = null;
    }
}
