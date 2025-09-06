/**
 * 声音播放系统
 * 管理游戏中的音效播放
 */

export interface SoundConfig {
  volume?: number; // 音量 0-1
  loop?: boolean;
  preload?: boolean;
}

export class SoundSystem {
  private audioElements: Map<string, HTMLAudioElement> = new Map();
  private masterVolume = 0.7;
  private enabled = true;

  constructor() {
    // 预加载一些常用音效
    this.preloadSounds();
  }

  /**
   * 预加载声音文件
   */
  private async preloadSounds(): Promise<void> {
    try {
      // 预加载几个常用的柯克呻吟声
      for (let i = 1; i <= 5; i++) {
        const path = `/src/assets/SlapKirkApp/kirkgrunt/kirkgrunt${i}.webm`;
        await this.loadSound(`kirkgrunt${i}`, path, { preload: true });
      }
      console.log('声音预加载完成');
    } catch (error) {
      console.warn('声音预加载失败:', error);
    }
  }

  /**
   * 加载声音文件
   */
  async loadSound(
    id: string, 
    path: string, 
    config: SoundConfig = {}
  ): Promise<HTMLAudioElement> {
    // 如果已经加载过，直接返回
    if (this.audioElements.has(id)) {
      return this.audioElements.get(id)!;
    }

    const audio = new Audio();
    audio.src = path;
    audio.volume = (config.volume || 1) * this.masterVolume;
    audio.loop = config.loop || false;
    
    if (config.preload) {
      audio.preload = 'auto';
    }

    // 等待音频加载完成
    return new Promise((resolve, reject) => {
      audio.addEventListener('canplaythrough', () => {
        this.audioElements.set(id, audio);
        resolve(audio);
      });

      audio.addEventListener('error', (e) => {
        console.warn(`音频加载失败: ${path}`, e);
        reject(e);
      });

      // 开始加载
      audio.load();
    });
  }

  /**
   * 播放声音
   */
  async playSound(
    id: string, 
    path?: string, 
    config: SoundConfig = {}
  ): Promise<void> {
    if (!this.enabled) return;

    try {
      let audio: HTMLAudioElement;

      if (this.audioElements.has(id)) {
        audio = this.audioElements.get(id)!;
      } else if (path) {
        audio = await this.loadSound(id, path, config);
      } else {
        console.warn(`声音 ${id} 未找到且未提供路径`);
        return;
      }

      // 重置播放位置
      audio.currentTime = 0;
      audio.volume = (config.volume || 1) * this.masterVolume;
      
      await audio.play();
    } catch (error) {
      console.warn(`播放声音失败: ${id}`, error);
    }
  }

  /**
   * 播放随机柯克呻吟声
   */
  async playRandomKirkGrunt(): Promise<void> {
    const randomIndex = Math.floor(Math.random() * 24) + 1;
    const soundId = `kirkgrunt${randomIndex}`;
    const path = `/src/assets/SlapKirkApp/kirkgrunt/kirkgrunt${randomIndex}.webm`;
    
    await this.playSound(soundId, path, { volume: 0.8 });
  }

  /**
   * 停止声音
   */
  stopSound(id: string): void {
    const audio = this.audioElements.get(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  /**
   * 停止所有声音
   */
  stopAllSounds(): void {
    this.audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  /**
   * 设置主音量
   */
  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    
    // 更新所有音频的音量
    this.audioElements.forEach(audio => {
      audio.volume = audio.volume * this.masterVolume;
    });
  }

  /**
   * 获取主音量
   */
  getMasterVolume(): number {
    return this.masterVolume;
  }

  /**
   * 启用/禁用声音
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.stopAllSounds();
    }
  }

  /**
   * 获取声音启用状态
   */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * 销毁声音系统
   */
  destroy(): void {
    this.stopAllSounds();
    this.audioElements.clear();
  }
}

// 全局声音系统实例
export const soundSystem = new SoundSystem();
