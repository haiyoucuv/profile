
import lutWgsl from "./shader/lut.wgsl?raw";

import lutVert from "./shader/lut.vert?raw";
import lutFrag from "./shader/lut.frag?raw";

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

export abstract class BaseRenderEngine {
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

export class WebGPURenderEngine extends BaseRenderEngine {
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

      const adapter = await navigator.gpu.requestAdapter();
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

      await this.createPipeline();
      console.log('WebGPU initialized successfully');
      return true;
    } catch (error) {
      console.error('WebGPU initialization failed:', error);
      return false;
    }
  }

  private async createPipeline(): Promise<void> {
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

export class WebGLRenderEngine extends BaseRenderEngine {
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
      -1, -1,  0, 1,
       1, -1,  1, 1,
      -1,  1,  0, 0,
       1, -1,  1, 1,
       1,  1,  1, 0,
      -1,  1,  0, 0,
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

export class RenderEngineFactory {
  static async create(canvas: HTMLCanvasElement): Promise<BaseRenderEngine> {
    // 优先尝试WebGPU
    const webgpuEngine = new WebGPURenderEngine(canvas);
    if (await webgpuEngine.initialize()) {
      return webgpuEngine;
    }

    // 降级到WebGL
    console.log('Falling back to WebGL');
    const webglEngine = new WebGLRenderEngine(canvas);
    if (await webglEngine.initialize()) {
      return webglEngine;
    }

    throw new Error('Neither WebGPU nor WebGL2 is supported');
  }
}
