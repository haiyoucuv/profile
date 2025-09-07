/**
 * Canvas动画系统 - 负责处理各种Canvas动画效果
 * 支持视频动画、帧动画、粒子效果等，全部基于Canvas渲染
 */

// 动画配置接口
export interface AnimationConfig {
  type: 'video' | 'frames' | 'particles' | 'sprite';
  loop?: boolean;
  autoplay?: boolean;
  frameRate?: number; // 帧率 (仅用于帧动画)
  
  // 视频动画配置
  videoPath?: string;
  
  // 帧动画配置
  framePaths?: string[];
  
  // 精灵动画配置
  spriteConfig?: {
    imagePath: string;
    frameWidth: number;
    frameHeight: number;
    totalFrames: number;
    framesPerRow: number;
  };
  
  // 粒子效果配置
  particleConfig?: {
    count: number;
    colors: string[];
    size: { min: number; max: number };
    velocity: { min: number; max: number };
    lifetime: number;
  };
}

// Canvas动画层接口
export interface AnimationLayer {
  id: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  zIndex: number;
  visible: boolean;
  alpha: number;
}

// 粒子接口
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

// 资源路径生成器
export class AssetPathGenerator {
  private static readonly KIRK_SLAP_VIDEOS = [
    '/src/assets/SlapKirkApp/kirkslap/kirkslap1.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap2.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap3.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap4.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap5.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap6.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap7.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap8.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap9.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap10.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap11.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap12.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap13.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap14.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap15.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap16.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap17.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap18.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap19.webm',
    '/src/assets/SlapKirkApp/kirkslap/kirkslap20.webm'
  ];

  private static readonly SPOCK_SLAP_FRAMES = [
    '/src/assets/SlapKirkApp/spockslap/spockslap1.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap2.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap3.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap4.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap5.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap6.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap7.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap8.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap9.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap10.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap11.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap12.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap13.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap14.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap15.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap16.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap17.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap18.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap19.webp',
    '/src/assets/SlapKirkApp/spockslap/spockslap20.webp'
  ];

  /**
   * 获取随机柯克被扇击视频路径
   */
  static getRandomKirkSlapVideo(): string {
    const randomIndex = Math.floor(Math.random() * this.KIRK_SLAP_VIDEOS.length);
    return this.KIRK_SLAP_VIDEOS[randomIndex];
  }

  /**
   * 获取史波克扇击帧序列
   */
  static getSpockSlapFrames(): string[] {
    return [...this.SPOCK_SLAP_FRAMES];
  }

  /**
   * 获取所有柯克被扇击视频路径
   */
  static getAllKirkSlapVideos(): string[] {
    return [...this.KIRK_SLAP_VIDEOS];
  }
}

export class AnimationSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationId: number | null = null;
  private isPlaying = false;
  
  // 动画状态
  private currentAnimation: AnimationConfig | null = null;
  private frameIndex = 0;
  private frameImages: HTMLImageElement[] = [];
  private video: HTMLVideoElement | null = null;
  private particles: Particle[] = [];
  
  // 时间控制
  private lastFrameTime = 0;
  private frameInterval = 1000 / 24; // 默认24fps
  
  // 回调函数
  private onComplete?: () => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('无法获取Canvas 2D上下文');
    }
    this.ctx = ctx;
    
    // 设置Canvas样式
    this.setupCanvas();
  }

  /**
   * 设置Canvas基本样式
   */
  private setupCanvas(): void {
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    
    // 设置高DPI支持
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  /**
   * 播放视频动画
   */
  async playVideoAnimation(config: AnimationConfig & { videoPath: string }, onComplete?: () => void): Promise<void> {
    this.stop();
    this.currentAnimation = config;
    this.onComplete = onComplete;
    
    // 创建视频元素
    this.video = document.createElement('video');
    this.video.src = config.videoPath;
    this.video.muted = true;
    this.video.loop = config.loop || false;
    
    return new Promise((resolve, reject) => {
      if (!this.video) return reject(new Error('视频创建失败'));
      
      this.video.onloadeddata = () => {
        if (this.video) {
          this.video.play();
          this.startVideoRender();
          resolve();
        }
      };
      
      this.video.onerror = () => reject(new Error('视频加载失败'));
      
      this.video.onended = () => {
        if (!config.loop) {
          this.stop();
          this.onComplete?.();
        }
      };
    });
  }

  /**
   * 播放帧动画
   */
  async playFrameAnimation(config: AnimationConfig & { framePaths: string[] }, onComplete?: () => void): Promise<void> {
    this.stop();
    this.currentAnimation = config;
    this.onComplete = onComplete;
    this.frameIndex = 0;
    this.frameInterval = 1000 / (config.frameRate || 24);
    
    // 预加载所有帧
    this.frameImages = [];
    const loadPromises = config.framePaths.map((path, index) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.frameImages[index] = img;
          resolve();
        };
        img.onerror = () => reject(new Error(`帧 ${index} 加载失败: ${path}`));
        img.src = path;
      });
    });
    
    try {
      await Promise.all(loadPromises);
      this.startFrameRender();
    } catch (error) {
      console.error('帧动画加载失败:', error);
    }
  }

  /**
   * 播放粒子效果
   */
  playParticleEffect(config: AnimationConfig & { particleConfig: NonNullable<AnimationConfig['particleConfig']> }, onComplete?: () => void): void {
    this.stop();
    this.currentAnimation = config;
    this.onComplete = onComplete;
    
    // 创建粒子
    this.particles = [];
    const { particleConfig } = config;
    
    for (let i = 0; i < particleConfig.count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * (particleConfig.velocity.max - particleConfig.velocity.min) + particleConfig.velocity.min,
        vy: (Math.random() - 0.5) * (particleConfig.velocity.max - particleConfig.velocity.min) + particleConfig.velocity.min,
        size: Math.random() * (particleConfig.size.max - particleConfig.size.min) + particleConfig.size.min,
        color: particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)],
        life: particleConfig.lifetime,
        maxLife: particleConfig.lifetime
      });
    }
    
    this.startParticleRender();
  }

  /**
   * 开始视频渲染循环
   */
  private startVideoRender(): void {
    this.isPlaying = true;
    
    const render = () => {
      if (!this.isPlaying || !this.video) return;
      
      // 清空画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // 绘制视频帧
      if (this.video.readyState >= 2) { // HAVE_CURRENT_DATA
        const { width, height } = this.canvas;
        this.ctx.drawImage(this.video, 0, 0, width, height);
      }
      
      this.animationId = requestAnimationFrame(render);
    };
    
    render();
  }

  /**
   * 开始帧动画渲染循环
   */
  private startFrameRender(): void {
    this.isPlaying = true;
    this.lastFrameTime = performance.now();
    
    const render = (currentTime: number) => {
      if (!this.isPlaying) return;
      
      const deltaTime = currentTime - this.lastFrameTime;
      
      if (deltaTime >= this.frameInterval) {
        // 清空画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制当前帧
        if (this.frameImages[this.frameIndex]) {
          const { width, height } = this.canvas;
          this.ctx.drawImage(this.frameImages[this.frameIndex], 0, 0, width, height);
        }
        
        // 更新帧索引
        this.frameIndex++;
        if (this.frameIndex >= this.frameImages.length) {
          if (this.currentAnimation?.loop) {
            this.frameIndex = 0;
          } else {
            this.stop();
            this.onComplete?.();
            return;
          }
        }
        
        this.lastFrameTime = currentTime;
      }
      
      this.animationId = requestAnimationFrame(render);
    };
    
    render(performance.now());
  }

  /**
   * 开始粒子效果渲染循环
   */
  private startParticleRender(): void {
    this.isPlaying = true;
    
    const render = () => {
      if (!this.isPlaying) return;
      
      // 清空画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // 更新和绘制粒子
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        
        // 更新粒子位置
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // 移除死亡的粒子
        if (particle.life <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        
        // 绘制粒子
        const alpha = particle.life / particle.maxLife;
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = particle.color;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
      
      // 检查是否所有粒子都消失了
      if (this.particles.length === 0) {
        this.stop();
        this.onComplete?.();
        return;
      }
      
      this.animationId = requestAnimationFrame(render);
    };
    
    render();
  }

  /**
   * 停止当前动画
   */
  stop(): void {
    this.isPlaying = false;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    if (this.video) {
      this.video.pause();
      this.video = null;
    }
    
    // 清空画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.currentAnimation = null;
    this.frameIndex = 0;
    this.frameImages = [];
    this.particles = [];
  }

  /**
   * 暂停动画
   */
  pause(): void {
    this.isPlaying = false;
    if (this.video) {
      this.video.pause();
    }
  }

  /**
   * 恢复动画
   */
  resume(): void {
    if (!this.currentAnimation) return;
    
    this.isPlaying = true;
    
    if (this.video) {
      this.video.play();
      this.startVideoRender();
    } else if (this.frameImages.length > 0) {
      this.startFrameRender();
    } else if (this.particles.length > 0) {
      this.startParticleRender();
    }
  }

  /**
   * 获取Canvas元素
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * 获取Canvas上下文
   */
  getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  /**
   * 检查是否正在播放
   */
  isAnimationPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * 销毁动画系统
   */
  destroy(): void {
    this.stop();
  }
}