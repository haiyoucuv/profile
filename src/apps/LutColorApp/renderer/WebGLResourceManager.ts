import { LUTData, WebGLResources } from "./const.ts";

export class WebGLResourceManager {
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram;

    constructor(gl: WebGL2RenderingContext, program: WebGLProgram) {
        this.gl = gl;
        this.program = program;
    }

    async createImageTexture(imageData: ImageData): Promise<WebGLTexture> {
        const texture = this.gl.createTexture();
        if (!texture) {
            throw new Error('Failed to create image texture');
        }

        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(
            this.gl.TEXTURE_2D, 
            0, 
            this.gl.RGBA, 
            imageData.width, 
            imageData.height, 
            0, 
            this.gl.RGBA, 
            this.gl.UNSIGNED_BYTE, 
            imageData.data
        );
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        console.log(`Created WebGL image texture: ${imageData.width}x${imageData.height}`);
        return texture;
    }

    async createLUTTexture(lutData: LUTData): Promise<WebGLTexture> {
        const texture = this.gl.createTexture();
        if (!texture) {
            throw new Error('Failed to create LUT texture');
        }

        this.gl.bindTexture(this.gl.TEXTURE_3D, texture);

        // 转换Float32Array到Uint8Array
        const uint8Data = new Uint8Array(lutData.data.length);
        for (let i = 0; i < lutData.data.length; i++) {
            uint8Data[i] = Math.round(Math.max(0, Math.min(1, lutData.data[i])) * 255);
        }

        this.gl.texImage3D(
            this.gl.TEXTURE_3D, 
            0, 
            this.gl.RGBA,
            lutData.size, 
            lutData.size, 
            lutData.size, 
            0,
            this.gl.RGBA, 
            this.gl.UNSIGNED_BYTE, 
            uint8Data
        );
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);

        console.log(`Created WebGL 3D LUT texture: ${lutData.size}x${lutData.size}x${lutData.size}`);
        return texture;
    }

    async createResources(imageData: ImageData, lutData: LUTData): Promise<WebGLResources> {
        const imageTexture = await this.createImageTexture(imageData);
        const lutTexture = await this.createLUTTexture(lutData);

        return {
            imageTexture,
            lutTexture
        };
    }

    updateUniforms(options: any): void {
        this.gl.useProgram(this.program);
        
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_intensity'), options.intensity);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_brightness'), options.brightness);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_contrast'), options.contrast);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_saturation'), options.saturation);
        this.gl.uniform1f(this.gl.getUniformLocation(this.program, 'u_hue'), options.hue);
    }

    bindTextures(resources: WebGLResources): void {
        // 绑定图片纹理
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, resources.imageTexture);
        this.gl.uniform1i(this.gl.getUniformLocation(this.program, 'u_image'), 0);

        // 绑定LUT纹理
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_3D, resources.lutTexture);
        this.gl.uniform1i(this.gl.getUniformLocation(this.program, 'u_lut'), 1);
    }

    disposeResources(resources: WebGLResources): void {
        this.gl.deleteTexture(resources.imageTexture);
        this.gl.deleteTexture(resources.lutTexture);
    }
}
