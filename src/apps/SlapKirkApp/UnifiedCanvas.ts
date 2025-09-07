/**
 * 统一Canvas系统 - 管理动画和手部关键点绘制
 * 支持多层Canvas渲染，动画层和调试层分离
 */

import { AnimationSystem, AnimationConfig } from './AnimationSystem';

// 手部关键点数据接口
export interface HandLandmark {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
}

// 手部连接线定义
export interface HandConnection {
  from: number;
  to: number;
}

// 手部绘制配置
export interface HandDrawConfig {
  showLandmarks: boolean;
  showConnections: boolean;
  landmarkColor: string;
  connectionColor: string;
  landmarkSize: number;
  connectionWidth: number;
  showLabels: boolean;
  labelColor: string;
  labelFont: string;
}

// Canvas层类型
export enum CanvasLayerType {
  BACKGROUND = 'background',
  ANIMATION = 'animation', 
  HAND_DEBUG = 'hand_debug',
  UI_OVERLAY = 'ui_overlay'
}

// Canvas层接口
export interface CanvasLayer {
  id: string;
  type: CanvasLayerType;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  zIndex: number;
  visible: boolean;
  alpha: number;
}

export class UnifiedCanvas {
  private container: HTMLElement;
  private layers: Map<string, CanvasLayer> = new Map();
  private animationSystem: AnimationSystem | null = null;
  
  // 手部关键点连接定义 (MediaPipe Hand格式)
  private static readonly HAND_CONNECTIONS: HandConnection[] = [
    // 拇指
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    // 食指
    { from: 0, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 },
    // 中指
    { from: 0, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 }, { from: 11, to: 12 },
    // 无名指
    { from: 0, to: 13 }, { from: 13, to: 14 }, { from: 14, to: 15 }, { from: 15, to: 16 },
    // 小指
    { from: 0, to: 17 }, { from: 17, to: 18 }, { from: 18, to: 19 }, { from: 19, to: 20 },
    // 手掌连接
    { from: 5, to: 9 }, { from: 9, to: 13 }, { from: 13, to: 17 }
  ];

  // 默认手部绘制配置
  private static readonly DEFAULT_HAND_CONFIG: HandDrawConfig = {
    showLandmarks: true,
    showConnections: true,
    landmarkColor: '#FF6B6B',
    connectionColor: '#4ECDC4',
    landmarkSize: 4,
    connectionWidth: 2,
    showLabels: false,
    labelColor: '#FFFFFF',
    labelFont: '12px Arial'
  };

  constructor(container: HTMLElement) {
    this.container = container;
    this.setupContainer();
    this.initializeLayers();
  }

  /**
   * 设置容器样式
   */
  private setupContainer(): void {
    this.container.style.position = 'relative';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.overflow = 'hidden';
  }

  /**
   * 初始化Canvas层
   */
  private initializeLayers(): void {
    // 创建背景层
    this.createLayer(CanvasLayerType.BACKGROUND, 1);
    
    // 创建动画层
    const animationLayer = this.createLayer(CanvasLayerType.ANIMATION, 2);
    this.animationSystem = new AnimationSystem(animationLayer.canvas);
    
    // 创建手部调试层
    this.createLayer(CanvasLayerType.HAND_DEBUG, 3);
    
    // 创建UI覆盖层
    this.createLayer(CanvasLayerType.UI_OVERLAY, 4);
  }

  /**
   * 创建Canvas层
   */
  private createLayer(type: CanvasLayerType, zIndex: number): CanvasLayer {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error(`无法创建${type}层的Canvas上下文`);
    }

    // 设置Canvas样式
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = zIndex.toString();
    canvas.style.pointerEvents = 'none';

    // 设置高DPI支持
    this.setupHighDPI(canvas, ctx);

    // 添加到容器
    this.container.appendChild(canvas);

    const layer: CanvasLayer = {
      id: type,
      type,
      canvas,
      ctx,
      zIndex,
      visible: true,
      alpha: 1.0
    };

    this.layers.set(type, layer);
    return layer;
  }

  /**
   * 设置高DPI支持
   */
  private setupHighDPI(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.container.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // 设置Canvas显示尺寸
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }

  /**
   * 获取指定层
   */
  getLayer(type: CanvasLayerType): CanvasLayer | null {
    return this.layers.get(type) || null;
  }

  /**
   * 设置层可见性
   */
  setLayerVisible(type: CanvasLayerType, visible: boolean): void {
    const layer = this.layers.get(type);
    if (layer) {
      layer.visible = visible;
      layer.canvas.style.display = visible ? 'block' : 'none';
    }
  }

  /**
   * 设置层透明度
   */
  setLayerAlpha(type: CanvasLayerType, alpha: number): void {
    const layer = this.layers.get(type);
    if (layer) {
      layer.alpha = Math.max(0, Math.min(1, alpha));
      layer.canvas.style.opacity = layer.alpha.toString();
    }
  }

  /**
   * 清空指定层
   */
  clearLayer(type: CanvasLayerType): void {
    const layer = this.layers.get(type);
    if (layer) {
      layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
    }
  }

  /**
   * 清空所有层
   */
  clearAllLayers(): void {
    this.layers.forEach(layer => {
      layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
    });
  }

  /**
   * 播放动画
   */
  async playAnimation(config: AnimationConfig, onComplete?: () => void): Promise<void> {
    if (!this.animationSystem) {
      throw new Error('动画系统未初始化');
    }

    try {
      switch (config.type) {
        case 'video':
          if (config.videoPath) {
            await this.animationSystem.playVideoAnimation(config as any, onComplete);
          }
          break;
        case 'frames':
          if (config.framePaths) {
            await this.animationSystem.playFrameAnimation(config as any, onComplete);
          }
          break;
        case 'particles':
          if (config.particleConfig) {
            this.animationSystem.playParticleEffect(config as any, onComplete);
          }
          break;
        default:
          console.warn('不支持的动画类型:', config.type);
      }
    } catch (error) {
      console.error('动画播放失败:', error);
      onComplete?.();
    }
  }

  /**
   * 停止动画
   */
  stopAnimation(): void {
    if (this.animationSystem) {
      this.animationSystem.stop();
    }
  }

  /**
   * 绘制手部关键点
   */
  drawHandLandmarks(
    landmarks: HandLandmark[],
    config: Partial<HandDrawConfig> = {},
    canvasWidth?: number,
    canvasHeight?: number
  ): void {
    const layer = this.layers.get(CanvasLayerType.HAND_DEBUG);
    if (!layer || !layer.visible) return;

    const ctx = layer.ctx;
    const drawConfig = { ...UnifiedCanvas.DEFAULT_HAND_CONFIG, ...config };
    
    // 清空调试层
    this.clearLayer(CanvasLayerType.HAND_DEBUG);

    if (landmarks.length === 0) return;

    // 获取Canvas实际尺寸
    const width = canvasWidth || layer.canvas.width / (window.devicePixelRatio || 1);
    const height = canvasHeight || layer.canvas.height / (window.devicePixelRatio || 1);

    ctx.save();

    // 绘制连接线
    if (drawConfig.showConnections) {
      ctx.strokeStyle = drawConfig.connectionColor;
      ctx.lineWidth = drawConfig.connectionWidth;
      ctx.lineCap = 'round';

      UnifiedCanvas.HAND_CONNECTIONS.forEach(connection => {
        const fromPoint = landmarks[connection.from];
        const toPoint = landmarks[connection.to];

        if (fromPoint && toPoint) {
          ctx.beginPath();
          ctx.moveTo(fromPoint.x * width, fromPoint.y * height);
          ctx.lineTo(toPoint.x * width, toPoint.y * height);
          ctx.stroke();
        }
      });
    }

    // 绘制关键点
    if (drawConfig.showLandmarks) {
      ctx.fillStyle = drawConfig.landmarkColor;

      landmarks.forEach((landmark, index) => {
        const x = landmark.x * width;
        const y = landmark.y * height;

        // 绘制关键点圆圈
        ctx.beginPath();
        ctx.arc(x, y, drawConfig.landmarkSize, 0, Math.PI * 2);
        ctx.fill();

        // 绘制标签
        if (drawConfig.showLabels) {
          ctx.fillStyle = drawConfig.labelColor;
          ctx.font = drawConfig.labelFont;
          ctx.textAlign = 'center';
          ctx.fillText(index.toString(), x, y - drawConfig.landmarkSize - 2);
          ctx.fillStyle = drawConfig.landmarkColor;
        }
      });
    }

    ctx.restore();
  }

  /**
   * 绘制手势识别信息
   */
  drawGestureInfo(
    gestureType: string,
    confidence: number,
    position: { x: number; y: number } = { x: 10, y: 30 }
  ): void {
    const layer = this.layers.get(CanvasLayerType.UI_OVERLAY);
    if (!layer || !layer.visible) return;

    const ctx = layer.ctx;
    
    // 清空UI层
    this.clearLayer(CanvasLayerType.UI_OVERLAY);

    ctx.save();
    
    // 绘制背景
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.roundRect(position.x - 5, position.y - 25, 200, 50, 5);
    ctx.fill();

    // 绘制手势类型
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText(`手势: ${gestureType}`, position.x, position.y);

    // 绘制置信度
    ctx.font = '14px Arial';
    ctx.fillText(`置信度: ${(confidence * 100).toFixed(1)}%`, position.x, position.y + 20);

    // 绘制置信度条
    const barWidth = 150;
    const barHeight = 4;
    const barX = position.x + 5;
    const barY = position.y + 25;

    // 背景条
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(barX, barY, barWidth, barHeight);

    // 置信度条
    const confidenceColor = confidence > 0.7 ? '#4CAF50' : confidence > 0.4 ? '#FF9800' : '#F44336';
    ctx.fillStyle = confidenceColor;
    ctx.fillRect(barX, barY, barWidth * confidence, barHeight);

    ctx.restore();
  }

  /**
   * 绘制调试网格
   */
  drawDebugGrid(gridSize: number = 50): void {
    const layer = this.layers.get(CanvasLayerType.BACKGROUND);
    if (!layer) return;

    const ctx = layer.ctx;
    const width = layer.canvas.width / (window.devicePixelRatio || 1);
    const height = layer.canvas.height / (window.devicePixelRatio || 1);

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    // 绘制垂直线
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // 绘制水平线
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * 调整Canvas尺寸
   */
  resize(): void {
    this.layers.forEach(layer => {
      this.setupHighDPI(layer.canvas, layer.ctx);
    });
  }

  /**
   * 获取动画系统
   */
  getAnimationSystem(): AnimationSystem | null {
    return this.animationSystem;
  }

  /**
   * 获取调试Canvas (兼容旧接口)
   */
  getDebugCanvas(): HTMLCanvasElement | null {
    const layer = this.layers.get(CanvasLayerType.HAND_DEBUG);
    return layer ? layer.canvas : null;
  }

  /**
   * 销毁Canvas系统
   */
  destroy(): void {
    // 停止动画
    if (this.animationSystem) {
      this.animationSystem.destroy();
      this.animationSystem = null;
    }

    // 移除所有Canvas
    this.layers.forEach(layer => {
      if (layer.canvas.parentNode) {
        layer.canvas.parentNode.removeChild(layer.canvas);
      }
    });

    this.layers.clear();
  }
}