import React, { useRef, useEffect, useState, useCallback } from 'react';
import { VirtualApp } from "../VirtualApp.ts";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import { config } from "./config.ts";
import { AppManager } from "../AppManager.ts";
import styles from './LutColorApp.module.less';
import { BaseRenderEngine, RenderEngineFactory, RenderOptions, LUTData } from './RenderEngine.ts';
import { LutParser } from './LutParser.ts';
import { useHotkeys, createHotkeyMap, commonHotkeys } from './hooks/useHotkeys.ts';
import { LutManager, LutPreset } from './LutManager.ts';
import { LutPresetTabs } from './components/LutPresetTabs.tsx';

interface LutColorAppState {
  isLoading: boolean;
  error: string | null;
  hasImage: boolean;
  hasLut: boolean;
  renderBackend: string;
  renderOptions: RenderOptions;
  currentPreset: string;
  // 缩放和平移状态
  zoom: number;
  panX: number;
  panY: number;
  imageWidth: number;
  imageHeight: number;
  // LUT加载状态
  isLutLoading: boolean;
}

const LutColorAppComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const lutInputRef = useRef<HTMLInputElement>(null);
  const renderEngineRef = useRef<BaseRenderEngine | null>(null);

  const [state, setState] = useState<LutColorAppState>({
    isLoading: false,
    error: null,
    hasImage: false,
    hasLut: false,
    renderBackend: '',
    renderOptions: {
      intensity: 1.0,
      brightness: 0.0,
      contrast: 1.0,
      saturation: 1.0,
      hue: 0.0
    },
    currentPreset: 'identity',
    // 缩放和平移初始状态
    zoom: 1.0,
    panX: 0,
    panY: 0,
    imageWidth: 0,
    imageHeight: 0,
    // LUT加载状态
    isLutLoading: false
  });

  // 初始化渲染引擎
  useEffect(() => {
    const initRenderEngine = async () => {
      if (!canvasRef.current) return;

      setState(prev => ({ ...prev, isLoading: true, error: null }));

      try {
        const engine = await RenderEngineFactory.create(canvasRef.current);
        renderEngineRef.current = engine;

        setState(prev => ({
          ...prev,
          isLoading: false,
          renderBackend: engine.backend === 'webgpu' ? 'WebGPU' : 'WebGL2'
        }));

        // 加载默认身份LUT
        await loadDefaultLUT();

      } catch (error) {
        console.error('Failed to initialize render engine:', error);
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: '渲染引擎初始化失败: ' + (error as Error).message
        }));
      }
    };

    initRenderEngine();

    return () => {
      if (renderEngineRef.current) {
        renderEngineRef.current.dispose();
      }
    };
  }, []);

  const loadDefaultLUT = async () => {
    if (!renderEngineRef.current) return;

    try {
      const identityLUT = LutParser.createIdentityLUT(32);
      await renderEngineRef.current.loadLUT(identityLUT);
      setState(prev => ({ ...prev, hasLut: true }));
    } catch (error) {
      console.error('Failed to load default LUT:', error);
    }
  };

  const handleImageUpload = useCallback(async (file: File) => {
    if (!renderEngineRef.current) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height);

        await renderEngineRef.current!.loadTexture(imageData);

        setState(prev => ({
          ...prev,
          isLoading: false,
          hasImage: true,
          imageWidth: img.width,
          imageHeight: img.height,
          // 重置缩放和平移
          zoom: 1.0,
          panX: 0,
          panY: 0
        }));

        // 确保在状态更新后渲染和自动适应
        await renderImage();
        // 自动适应窗口大小
        autoFitToWindow(img.width, img.height);
      };

      img.onerror = () => {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: '图片加载失败'
        }));
      };

      img.src = URL.createObjectURL(file);

    } catch (error) {
      console.error('Failed to load image:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: '图片处理失败: ' + (error as Error).message
      }));
    }
  }, []);

  const handleLutUpload = useCallback(async (file: File) => {
    if (!renderEngineRef.current) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const lutData = await LutParser.parseLUT(file);
      await renderEngineRef.current.loadLUT(lutData);
      await renderImage();

      setState(prev => ({
        ...prev,
        isLoading: false,
        hasLut: true,
        currentPreset: 'custom'
      }));

    } catch (error) {
      console.error('Failed to load LUT:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'LUT文件加载失败: ' + (error as Error).message
      }));
    }
  }, []);

  const handlePresetChange = useCallback(async (preset: LutPreset) => {
    if (!renderEngineRef.current) return;

    setState(prev => ({ ...prev, isLutLoading: true, currentPreset: preset.id }));

    try {
      const lutData = await LutManager.instance.getLutData(preset);
      await renderEngineRef.current.loadLUT(lutData);
      await renderImage();

      setState(prev => ({ ...prev, isLutLoading: false, hasLut: true }));

    } catch (error) {
      console.error('Failed to apply preset:', error);
      setState(prev => ({
        ...prev,
        isLutLoading: false,
        error: '预设应用失败: ' + (error as Error).message
      }));
    }
  }, []);

  const renderImage = async () => {
    if (!renderEngineRef.current) {
      console.log('No render engine');
      return;
    }

    try {
      console.log('Rendering with options:', state.renderOptions);
      await renderEngineRef.current.render(state.renderOptions);
      console.log('Render completed');
    } catch (error) {
      console.error('Render failed:', error);
      setState(prev => ({
        ...prev,
        error: '渲染失败: ' + (error as Error).message
      }));
    }
  };

  const handleParameterChange = useCallback((parameter: keyof RenderOptions, value: number) => {
    setState(prev => ({
      ...prev,
      renderOptions: {
        ...prev.renderOptions,
        [parameter]: value
      }
    }));
  }, []);

  // 重置所有调色参数到默认值
  const handleResetParameters = useCallback(() => {
    setState(prev => ({
      ...prev,
      renderOptions: {
        intensity: 1.0,
        brightness: 0.0,
        contrast: 1.0,
        saturation: 1.0,
        hue: 0.0
      }
    }));
  }, []);

  // 当参数改变时重新渲染
  useEffect(() => {
    if (state.hasImage && state.hasLut) {
      renderImage();
    }
  }, [state.renderOptions, state.hasImage, state.hasLut]);


  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    const lutFile = files.find(file => file.name.toLowerCase().endsWith('.cube') || file.name.toLowerCase().endsWith('.3dl'));

    if (imageFile) {
      handleImageUpload(imageFile);
    }
    if (lutFile) {
      handleLutUpload(lutFile);
    }
  }, [handleImageUpload, handleLutUpload]);

  const handleExport = useCallback(async () => {
    if (!renderEngineRef.current || !state.hasImage) return;

    try {
      console.log('Starting export process...');
      console.log('Canvas dimensions:', canvasRef.current?.width, 'x', canvasRef.current?.height);
      console.log('Image dimensions:', state.imageWidth, 'x', state.imageHeight);

      // 确保在导出前重新渲染一次，以获得最新的效果
      await renderImage();

      // 等待一小段时间确保渲染完成
      await new Promise(resolve => setTimeout(resolve, 100));

      const blob = await renderEngineRef.current.exportImage();
      console.log('Blob created:', blob.size, 'bytes, type:', blob.type);

      if (blob.size === 0) {
        throw new Error('导出的图片为空，可能渲染未完成');
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lut-processed-${Date.now()}.png`;
      document.body.appendChild(a); // 确保元素在DOM中
      a.click();
      document.body.removeChild(a); // 清理DOM
      URL.revokeObjectURL(url);

      console.log('Export completed successfully');

      // 显示成功消息
      setState(prev => ({
        ...prev,
        error: null // 清除之前的错误
      }));

    } catch (error) {
      console.error('Export failed:', error);
      setState(prev => ({
        ...prev,
        error: '导出失败: ' + (error as Error).message
      }));
    }
  }, [state.hasImage]);

  // 缩放功能 - 以鼠标位置为中心缩放
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!state.hasImage || !canvasRef.current) return;

    // e.preventDefault();

    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.1, Math.min(5.0, state.zoom * zoomFactor));

    // 计算缩放后的平移偏移
    const zoomChange = newZoom / state.zoom;
    const newPanX = state.panX - mouseX * (zoomChange - 1);
    const newPanY = state.panY - mouseY * (zoomChange - 1);

    setState(prev => ({
      ...prev,
      zoom: newZoom,
      panX: newPanX,
      panY: newPanY
    }));
  }, [state.hasImage, state.zoom, state.panX, state.panY]);

  // 平移功能
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!state.hasImage) return;

    setIsDragging(true);
    setDragStart({ x: e.clientX - state.panX, y: e.clientY - state.panY });
  }, [state.hasImage, state.panX, state.panY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !state.hasImage) return;

    const newPanX = e.clientX - dragStart.x;
    const newPanY = e.clientY - dragStart.y;

    setState(prev => ({
      ...prev,
      panX: newPanX,
      panY: newPanY
    }));
  }, [isDragging, state.hasImage, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 重置缩放和平移
  const handleResetView = useCallback(() => {
    setState(prev => ({
      ...prev,
      zoom: 1.0,
      panX: 0,
      panY: 0
    }));
  }, []);

  // 自动适应窗口大小（内部函数，用于图片加载后）
  const autoFitToWindow = useCallback((imageWidth: number, imageHeight: number) => {
    if (!canvasRef.current) return;

    const container = canvasRef.current.parentElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const scaleX = (containerRect.width - 40) / imageWidth;
    const scaleY = (containerRect.height - 40) / imageHeight;
    const newZoom = Math.min(scaleX, scaleY, 1.0);

    setState(prev => ({
      ...prev,
      zoom: newZoom,
      panX: 0,
      panY: 0
    }));
  }, []);

  // 适应窗口大小（手动触发）
  const handleFitToWindow = useCallback(() => {
    if (!state.hasImage) return;
    autoFitToWindow(state.imageWidth, state.imageHeight);
  }, [state.hasImage, state.imageWidth, state.imageHeight, autoFitToWindow]);

  // 缩放控制函数
  const handleZoomIn = useCallback(() => {
    setState(prev => ({ ...prev, zoom: Math.min(5.0, prev.zoom * 1.2) }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setState(prev => ({ ...prev, zoom: Math.max(0.1, prev.zoom * 0.8) }));
  }, []);

  // 使用快捷键Hook
  const hotkeyMap = createHotkeyMap(
    {
      zoomReset: commonHotkeys.zoomReset,
      zoomFit: commonHotkeys.zoomFit,
      zoomIn: commonHotkeys.zoomIn,
      zoomOut: commonHotkeys.zoomOut,
      export: commonHotkeys.export,
    },
    {
      zoomReset: handleResetView,
      zoomFit: handleFitToWindow,
      zoomIn: handleZoomIn,
      zoomOut: handleZoomOut,
      export: handleExport,
    }
  );

  useHotkeys(hotkeyMap, state.hasImage);

  return (
    <div className={styles.container}>
      {/* 左侧 LUT 库 */}
      <div className={styles.leftPanel}>
        <div className={styles.panelHeader}>
          <h3 className={styles.panelTitle}>LUT 预设库</h3>
        </div>
        <div className={styles.panelContent}>
          <LutPresetTabs
            currentPreset={state.currentPreset}
            onPresetChange={handlePresetChange}
            isLoading={state.isLutLoading}
          />
        </div>
        <div className={styles.panelFooter}>
          <button
            className={`${styles.button} ${styles.buttonSecondary}`}
            onClick={() => lutInputRef.current?.click()}
          >
            加载自定义LUT
          </button>
          <input
            ref={lutInputRef}
            type="file"
            accept=".cube,.3dl"
            className={styles.fileInput}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleLutUpload(file);
            }}
          />
        </div>
      </div>

      {/* 中间画布区域 */}
      <div className={styles.centerPanel}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <button
              className={styles.button}
              onClick={() => fileInputRef.current?.click()}
            >
              选择图片
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className={styles.fileInput}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
            />
          </div>
          {state.hasImage && (
            <div className={styles.viewControls}>
              <button
                className={styles.toolbarButton}
                onClick={handleResetView}
                title="重置视图 (1:1)"
              >
                1:1
              </button>
              <button
                className={styles.toolbarButton}
                onClick={handleFitToWindow}
                title="适应窗口"
              >
                适应
              </button>
              <span className={styles.zoomInfo}>
                缩放: {(state.zoom * 100).toFixed(0)}%
              </span>
            </div>
          )}
        </div>

        <div
          className={styles.canvasContainer}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {!state.hasImage && (
            <div
              className={styles.dropZone}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
            >
              <div className={styles.dropZoneIcon}>🖼️</div>
              <div className={styles.dropZoneText}>拖拽图片到这里</div>
              <div className={styles.dropZoneSubtext}>或点击这里选择图片</div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className={styles.canvas}
            width={state.imageWidth || 800}
            height={state.imageHeight || 600}
            style={{
              display: state.hasImage ? 'block' : 'none',
              transform: `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`,
              cursor: isDragging ? 'grabbing' : (state.hasImage ? 'grab' : 'default')
            }}
          />

          {state.isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner} />
            </div>
          )}
        </div>

        <div className={styles.statusBar}>
          {state.error && <span className={styles.errorMessage}>{state.error}</span>}
          {state.hasImage && (
            <span className={styles.helpText}>
              滚轮缩放 | 拖拽平移 | Ctrl+0重置 | Ctrl+1适应 | Ctrl+E导出
            </span>
          )}
          <span className={styles.renderBackend}>
            渲染后端: {state.renderBackend}
          </span>
        </div>
      </div>

      {/* 右侧参数调整面板 */}
      <div className={styles.rightPanel}>
        <div className={styles.panelHeader}>
          <h3 className={styles.panelTitle}>调色参数</h3>
          <button
            className={`${styles.button} ${styles.buttonSecondary} ${styles.resetButton}`}
            onClick={handleResetParameters}
            title="重置所有参数到默认值"
          >
            重置
          </button>
        </div>
        <div className={styles.panelContent}>
          <div className={styles.controlSection}>
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                LUT强度
                <span className={styles.sliderValue}>{state.renderOptions.intensity.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={state.renderOptions.intensity}
                className={styles.slider}
                onChange={(e) => handleParameterChange('intensity', parseFloat(e.target.value))}
              />
            </div>

            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                亮度
                <span className={styles.sliderValue}>{state.renderOptions.brightness.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="-0.5"
                max="0.5"
                step="0.01"
                value={state.renderOptions.brightness}
                className={styles.slider}
                onChange={(e) => handleParameterChange('brightness', parseFloat(e.target.value))}
              />
            </div>

            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                对比度
                <span className={styles.sliderValue}>{state.renderOptions.contrast.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.01"
                value={state.renderOptions.contrast}
                className={styles.slider}
                onChange={(e) => handleParameterChange('contrast', parseFloat(e.target.value))}
              />
            </div>

            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                饱和度
                <span className={styles.sliderValue}>{state.renderOptions.saturation.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.01"
                value={state.renderOptions.saturation}
                className={styles.slider}
                onChange={(e) => handleParameterChange('saturation', parseFloat(e.target.value))}
              />
            </div>

            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                色相偏移
                <span className={styles.sliderValue}>{(state.renderOptions.hue * 360).toFixed(0)}°</span>
              </label>
              <input
                type="range"
                min="-0.5"
                max="0.5"
                step="0.01"
                value={state.renderOptions.hue}
                className={styles.slider}
                onChange={(e) => handleParameterChange('hue', parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className={styles.panelFooter}>
          <button
            className={styles.button}
            onClick={handleExport}
            disabled={!state.hasImage}
          >
            导出图片
          </button>
        </div>
      </div>
    </div>
  );
};

export class LutColorApp extends VirtualApp {
  static icon: string = config.icon;
  static name = config.name;
  static id = config.id;

  private appRoot: Root | null = null;

  launch() {
    this.openMainWindow();
  }

  private openMainWindow() {
    const window = WindowManager.ins.showWindow("", {
      title: config.name,
      icon: config.icon,
      x: config.defaultWindow.x || 100,
      y: config.defaultWindow.y || 50,
      width: config.defaultWindow.width,
      height: config.defaultWindow.height,
    });

    this.appRoot = createRoot(window.content);
    this.appRoot.render(React.createElement(LutColorAppComponent));

    this.windows.set(window.id, window);
    window.on(Window.EventType.ON_CLOSE, this.onClickClose);
  }

  private onClickClose = () => {
    AppManager.ins.exitApp(LutColorApp);
  };

  onExit() {
    if (this.appRoot) {
      this.appRoot.unmount();
      this.appRoot = null;
    }
  }
}
