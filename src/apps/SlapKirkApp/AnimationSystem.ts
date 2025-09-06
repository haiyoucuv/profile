/**
 * 动画播放系统
 * 支持视频动画和帧动画播放
 */

export interface AnimationConfig {
  type: 'video' | 'frames';
  duration?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export interface VideoAnimationConfig extends AnimationConfig {
  type: 'video';
  videoPath: string;
}

export interface FrameAnimationConfig extends AnimationConfig {
  type: 'frames';
  framePaths: string[];
  frameRate?: number; // 帧率，默认24fps
}

export class AnimationSystem {
  private currentAnimation: HTMLVideoElement | HTMLImageElement | null = null;
  private frameTimer: number | null = null;
  private frameIndex = 0;
  private isPlaying = false;

  /**
   * 播放视频动画
   */
  async playVideoAnimation(
    container: HTMLElement,
    config: VideoAnimationConfig,
    onComplete?: () => void
  ): Promise<void> {
    this.stop(); // 停止当前动画

    const video = document.createElement('video');
    video.src = config.videoPath;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'contain';
    video.muted = true; // 视频静音，声音单独处理
    video.loop = config.loop || false;
    video.autoplay = config.autoplay !== false;

    // 清空容器并添加视频
    container.innerHTML = '';
    container.appendChild(video);
    this.currentAnimation = video;
    this.isPlaying = true;

    // 监听播放结束
    video.addEventListener('ended', () => {
      if (!config.loop) {
        this.isPlaying = false;
        onComplete?.();
      }
    });

    // 开始播放
    try {
      await video.play();
    } catch (error) {
      console.warn('视频播放失败:', error);
      this.isPlaying = false;
    }
  }

  /**
   * 播放帧动画
   */
  playFrameAnimation(
    container: HTMLElement,
    config: FrameAnimationConfig,
    onComplete?: () => void
  ): void {
    this.stop(); // 停止当前动画

    if (config.framePaths.length === 0) {
      onComplete?.();
      return;
    }

    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';

    // 清空容器并添加图片
    container.innerHTML = '';
    container.appendChild(img);
    this.currentAnimation = img;
    this.isPlaying = true;
    this.frameIndex = 0;

    const frameRate = config.frameRate || 24;
    const frameInterval = 1000 / frameRate;

    const playNextFrame = () => {
      if (!this.isPlaying) return;

      if (this.frameIndex >= config.framePaths.length) {
        if (config.loop) {
          this.frameIndex = 0;
        } else {
          this.isPlaying = false;
          onComplete?.();
          return;
        }
      }

      img.src = config.framePaths[this.frameIndex];
      this.frameIndex++;

      this.frameTimer = window.setTimeout(playNextFrame, frameInterval);
    };

    playNextFrame();
  }

  /**
   * 停止当前动画
   */
  stop(): void {
    this.isPlaying = false;

    if (this.frameTimer) {
      clearTimeout(this.frameTimer);
      this.frameTimer = null;
    }

    if (this.currentAnimation) {
      if (this.currentAnimation instanceof HTMLVideoElement) {
        this.currentAnimation.pause();
        this.currentAnimation.currentTime = 0;
      }
      this.currentAnimation = null;
    }
  }

  /**
   * 暂停动画
   */
  pause(): void {
    this.isPlaying = false;
    if (this.currentAnimation instanceof HTMLVideoElement) {
      this.currentAnimation.pause();
    }
    if (this.frameTimer) {
      clearTimeout(this.frameTimer);
      this.frameTimer = null;
    }
  }

  /**
   * 恢复动画
   */
  resume(): void {
    if (this.currentAnimation instanceof HTMLVideoElement) {
      this.currentAnimation.play();
      this.isPlaying = true;
    }
    // 帧动画需要重新开始计时器，这里简化处理
  }

  /**
   * 获取当前播放状态
   */
  getPlayingState(): boolean {
    return this.isPlaying;
  }

  /**
   * 销毁动画系统
   */
  destroy(): void {
    this.stop();
  }
}

/**
 * 资源路径生成器
 */
export class AssetPathGenerator {
  private static readonly BASE_PATH = '/src/assets/SlapKirkApp';

  /**
   * 生成柯克被扇击视频路径
   */
  static getKirkSlapVideo(index: number): string {
    return `${this.BASE_PATH}/kirkslap/kirkslap${index}.webm`;
  }

  /**
   * 生成柯克呻吟声音路径
   */
  static getKirkGruntSound(index: number): string {
    return `${this.BASE_PATH}/kirkgrunt/kirkgrunt${index}.webm`;
  }

  /**
   * 生成史波克扇击帧动画路径数组
   */
  static getSpockSlapFrames(): string[] {
    const frames: string[] = [];
    for (let i = 1; i <= 25; i++) {
      frames.push(`${this.BASE_PATH}/spockslap/spockslap${i}.webp`);
    }
    return frames;
  }

  /**
   * 随机选择柯克被扇击视频
   */
  static getRandomKirkSlapVideo(): string {
    const randomIndex = Math.floor(Math.random() * 16) + 1; // 1-16
    return this.getKirkSlapVideo(randomIndex);
  }

  /**
   * 随机选择柯克呻吟声音
   */
  static getRandomKirkGruntSound(): string {
    const randomIndex = Math.floor(Math.random() * 24) + 1; // 1-24
    return this.getKirkGruntSound(randomIndex);
  }

  /**
   * 获取应用logo
   */
  static getAppLogo(): string {
    return `${this.BASE_PATH}/logo.svg`;
  }
}
