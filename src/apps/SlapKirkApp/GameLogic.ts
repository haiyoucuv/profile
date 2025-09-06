import { GestureResult, GestureType } from './HandGestureEngine';

export interface GameStats {
  totalSlaps: number;
  currentCombo: number;
  maxCombo: number;
  accuracy: number; // 成功手势识别的准确率
  sessionTime: number; // 游戏时长（秒）
}


export enum GameState {
  LOADING = 'loading',
  CALIBRATING = 'calibrating', 
  READY = 'ready',
  PLAYING = 'playing',
  PAUSED = 'paused'
}

export class GameLogic {
  private stats: GameStats = {
    totalSlaps: 0,
    currentCombo: 0,
    maxCombo: 0,
    accuracy: 0,
    sessionTime: 0
  };

  private gameState: GameState = GameState.LOADING;
  private sessionStartTime: number = 0;
  private lastSlapTime: number = 0;
  private readonly COMBO_TIMEOUT = 2000; // 2秒内连击有效
  

  // 事件回调
  onStatsUpdate?: (stats: GameStats) => void;
  onGameStateChange?: (state: GameState) => void;
  onSlapEffect?: (intensity: number) => void; // 触发视觉效果

  constructor() {
    this.loadFromStorage();
  }

  // 开始游戏会话
  startSession(): void {
    this.gameState = GameState.PLAYING;
    this.sessionStartTime = Date.now();
    this.onGameStateChange?.(this.gameState);
    console.log('游戏会话开始');
  }

  // 暂停游戏
  pauseGame(): void {
    if (this.gameState === GameState.PLAYING) {
      this.gameState = GameState.PAUSED;
      this.updateSessionTime();
      this.onGameStateChange?.(this.gameState);
    }
  }

  // 恢复游戏
  resumeGame(): void {
    if (this.gameState === GameState.PAUSED) {
      this.gameState = GameState.PLAYING;
      this.sessionStartTime = Date.now() - this.stats.sessionTime * 1000;
      this.onGameStateChange?.(this.gameState);
    }
  }

  // 处理手势输入
  handleGesture(gesture: GestureResult): void {
    if (this.gameState !== GameState.PLAYING) {
      return;
    }

    switch (gesture.type) {
      case GestureType.SLAP:
        this.handleSlap(gesture);
        break;
      case GestureType.FIST:
        this.handleReset();
        break;
      case GestureType.PEACE:
        this.handleSpecialGesture();
        break;
    }

    this.updateSessionTime();
    this.saveToStorage();
  }

  private handleSlap(gesture: GestureResult): void {
    const currentTime = Date.now();
    const intensity = gesture.velocity?.magnitude || 0.5;

    // 更新统计
    this.stats.totalSlaps++;
    
    // 检查连击
    if (currentTime - this.lastSlapTime < this.COMBO_TIMEOUT) {
      this.stats.currentCombo++;
    } else {
      this.stats.currentCombo = 1; // 重新开始连击
    }

    // 更新最大连击
    if (this.stats.currentCombo > this.stats.maxCombo) {
      this.stats.maxCombo = this.stats.currentCombo;
    }

    this.lastSlapTime = currentTime;

    // 触发视觉效果
    const effectIntensity = Math.min(intensity * 2, 1.0);
    this.onSlapEffect?.(effectIntensity);

    // 更新UI
    this.onStatsUpdate?.(this.stats);

    console.log(`扇击！强度: ${intensity.toFixed(2)}, 连击: ${this.stats.currentCombo}`);
  }

  private handleReset(): void {
    // 重置连击
    this.stats.currentCombo = 0;
    this.onStatsUpdate?.(this.stats);
    console.log('重置连击');
  }

  private handleSpecialGesture(): void {
    // 特殊手势效果
    console.log('触发特殊效果！');
    this.onSlapEffect?.(1.5); // 超强效果
  }


  private updateSessionTime(): void {
    if (this.gameState === GameState.PLAYING && this.sessionStartTime > 0) {
      this.stats.sessionTime = (Date.now() - this.sessionStartTime) / 1000;
    }
  }

  // 数据持久化
  private saveToStorage(): void {
    try {
      const data = {
        stats: this.stats
      };
      localStorage.setItem('slapkirk_game_data', JSON.stringify(data));
    } catch (error) {
      console.warn('保存游戏数据失败:', error);
    }
  }

  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem('slapkirk_game_data');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.stats) {
          this.stats = { ...this.stats, ...parsed.stats };
          // 重置会话相关数据
          this.stats.currentCombo = 0;
          this.stats.sessionTime = 0;
        }
      }
    } catch (error) {
      console.warn('加载游戏数据失败:', error);
    }
  }

  // 重置所有数据
  resetAllData(): void {
    this.stats = {
      totalSlaps: 0,
      currentCombo: 0,
      maxCombo: 0,
      accuracy: 0,
      sessionTime: 0
    };
    

    this.saveToStorage();
    this.onStatsUpdate?.(this.stats);
    console.log('所有数据已重置');
  }

  // Getters
  getStats(): GameStats {
    this.updateSessionTime();
    return { ...this.stats };
  }


  getGameState(): GameState {
    return this.gameState;
  }

  setGameState(state: GameState): void {
    this.gameState = state;
    this.onGameStateChange?.(state);
  }

  // 格式化时间显示
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // 计算扇击频率（每分钟）
  getSlapRate(): number {
    if (this.stats.sessionTime === 0) return 0;
    return (this.stats.totalSlaps / this.stats.sessionTime) * 60;
  }
}
