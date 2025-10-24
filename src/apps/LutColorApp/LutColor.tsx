import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './LutColorApp.module.less';
import { LutParser } from './LutParser.ts';
import { LutManager, LutPreset } from './LutManager.ts';
import { LutPresetTabs } from './components/LutPresetTabs.tsx';
import classNames from "classnames";
import { BaseRenderer, defaultRenderOptions, RendererFactory, RenderOptions } from "./renderer";
import { RenderQueue } from './utils/RenderQueue';
import { RenderManager } from './renderer/RenderManager';

interface LutColorAppState {
    isLoading: boolean;
    error: string | null;
    hasImage: boolean;
    hasLut: boolean;
    renderBackend: string;
    currentPreset: string;
    zoom: number;
    panX: number;
    panY: number;
    imageWidth: number;
    imageHeight: number;
    isLutLoading: boolean;
    imageVersion: number;
}

export const LutColor: React.FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const lutInputRef = useRef<HTMLInputElement>(null);
    const rendererRef = useRef<BaseRenderer | null>(null);
    const renderManagerRef = useRef<RenderManager | null>(null);
    const renderQueueRef = useRef<RenderQueue | null>(null);

    const [renderOptions, setRenderOptions] = useState<RenderOptions>({ ...defaultRenderOptions });

    const [state, setState] = useState<LutColorAppState>({
        isLoading: true,
        error: null,
        hasImage: false,
        hasLut: false,
        renderBackend: '',
        currentPreset: 'identity',
        zoom: 1.0,
        panX: 0,
        panY: 0,
        imageWidth: 0,
        imageHeight: 0,
        isLutLoading: false,
        imageVersion: 0,
    });

    useEffect(() => {
        const init = async () => {
            if (!canvasRef.current) return;

            try {
                // 创建渲染管理器
                const renderManager = new RenderManager();
                const initialized = await renderManager.initialize(canvasRef.current);
                
                if (!initialized) {
                    throw new Error('Failed to initialize render manager');
                }

                renderManagerRef.current = renderManager;
                
                // 创建一个空的ref用于兼容RenderQueue
                rendererRef.current = null;
                
                // 创建渲染队列，传入渲染管理器
                renderQueueRef.current = new RenderQueue(rendererRef, renderManager);

                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    renderBackend: renderManager.getBackendInfo(),
                }));

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

        init();

        return () => {
            renderManagerRef.current?.dispose();
        };
    }, []);

    const loadDefaultLUT = async () => {
        if (!renderManagerRef.current) return;

        try {
            const identityLUT = LutParser.createIdentityLUT(32);
            await renderManagerRef.current.loadLUT(identityLUT);
            setState(prev => ({ ...prev, hasLut: true }));
        } catch (error) {
            console.error('Failed to load default LUT:', error);
        }
    };

    const renderImage = useCallback(() => {
        if (!renderQueueRef.current) {
            console.log('No render queue');
            return;
        }
        renderQueueRef.current.requestMainRender(renderOptions);
    }, [renderOptions]);

    const handleImageUpload = useCallback(async (file: File) => {
        if (!renderManagerRef.current) return;

        setState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            const img = new Image();
            img.onload = async () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d')!;
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const mainImageData = ctx.getImageData(0, 0, img.width, img.height);
                await renderManagerRef.current!.loadImage(mainImageData);

                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    hasImage: true,
                    imageWidth: img.width,
                    imageHeight: img.height,
                    zoom: 1.0,
                    panX: 0,
                    panY: 0,
                    imageVersion: prev.imageVersion + 1,
                }));

                renderImage();
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
    }, [renderImage]);

    const handleLutUpload = useCallback(async (file: File) => {
        if (!renderManagerRef.current) return;

        setState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            const lutData = await LutParser.parseLUT(file);
            await renderManagerRef.current.loadLUT(lutData);
            renderImage();

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
    }, [renderImage]);

    const handlePresetChange = useCallback(async (preset: LutPreset) => {
        if (!renderManagerRef.current) return;

        setState(prev => ({ ...prev, isLutLoading: true, currentPreset: preset.id }));

        try {
            const lutData = await LutManager.instance.getLutData(preset);
            await renderManagerRef.current.loadLUT(lutData);
            renderImage();

            setState(prev => ({ ...prev, isLutLoading: false, hasLut: true }));

        } catch (error) {
            console.error('Failed to apply preset:', error);
            setState(prev => ({
                ...prev,
                isLutLoading: false,
                error: '预设应用失败: ' + (error as Error).message
            }));
        }
    }, [renderImage]);

    const handleResetParameters = useCallback(() => {
        setRenderOptions({ ...defaultRenderOptions });
        if (renderQueueRef.current) {
            renderQueueRef.current.requestMainRender({ ...defaultRenderOptions });
        }
    }, []);

    const handleParameterChange = useCallback((parameter: keyof RenderOptions, value: number) => {
        const newOptions = { ...renderOptions, [parameter]: value };
        setRenderOptions(newOptions);
        if (renderQueueRef.current) {
            renderQueueRef.current.requestMainRender(newOptions);
        }
    }, [renderOptions]);

    useEffect(() => {
        if (state.hasImage && state.hasLut) {
            renderImage();
        }
    }, [state.hasImage, state.hasLut, renderImage]);


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

    const handleExport = useCallback(async (e) => {
        if (!renderManagerRef.current || !state.hasImage) return;

        try {
            console.log('Starting export process...');
            const blob = await renderManagerRef.current.exportImage();
            console.log('Blob created:', blob.size, 'bytes, type:', blob.type);

            if (blob.size === 0) {
                throw new Error('导出的图片为空，可能渲染未完成');
            }

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `lut-processed-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Export failed:', error);
            setState(prev => ({
                ...prev,
                error: '导出失败: ' + (error as Error).message
            }));
        }
    }, [state.hasImage]);

    const handleWheel = useCallback((e: React.WheelEvent) => {
        if (!state.hasImage || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = Math.max(0.1, Math.min(5.0, state.zoom * zoomFactor));

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

    const handleResetView = useCallback(() => {
        setState(prev => ({
            ...prev,
            zoom: 1.0,
            panX: 0,
            panY: 0
        }));
    }, []);

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

    const handleFitToWindow = useCallback(() => {
        if (!state.hasImage) return;
        autoFitToWindow(state.imageWidth, state.imageHeight);
    }, [state.hasImage, state.imageWidth, state.imageHeight, autoFitToWindow]);

    return <div className={styles.container} ref={rootRef}>
        <div className={styles.leftPanel}>
            <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>LUT 预设库</h3>
            </div>
            <div className={styles.panelContent}>
                <LutPresetTabs
                    key={state.imageVersion}
                    currentPreset={state.currentPreset}
                    onPresetChange={handlePresetChange}
                    isLoading={state.isLutLoading}
                    renderQueue={renderQueueRef}
                    imageWidth={state.imageWidth}
                    imageHeight={state.imageHeight}
                />
            </div>
            <div className={styles.panelFooter}>
                <button
                    className={classNames(styles.button, styles.buttonSecondary)}
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
                {state.hasImage && <div className={styles.viewControls}>
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
                }
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
                {!state.hasImage && <div
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
                </div>}

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

                {
                    state.isLoading && <div className={styles.loadingOverlay}>
                    <div className={styles.spinner}/>
                  </div>
                }
            </div>

            <div className={styles.statusBar}>
                {state.error && <span className={styles.errorMessage}>{state.error}</span>}
                <span className={styles.renderBackend}>
                    渲染后端: {state.renderBackend}
                </span>
            </div>
        </div>

        <div className={styles.rightPanel}>
            <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>调色参数</h3>
                <button
                    className={classNames(styles.button, styles.buttonSecondary, styles.resetButton)}
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
                            <span className={styles.sliderValue}>{renderOptions.intensity.toFixed(2)}</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={renderOptions.intensity}
                            className={styles.slider}
                            onChange={(e) => handleParameterChange('intensity', parseFloat(e.target.value))}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <label className={styles.controlLabel}>
                            亮度
                            <span className={styles.sliderValue}>{renderOptions.brightness.toFixed(2)}</span>
                        </label>
                        <input
                            type="range"
                            min="-0.5"
                            max="0.5"
                            step="0.01"
                            value={renderOptions.brightness}
                            className={styles.slider}
                            onChange={(e) => handleParameterChange('brightness', parseFloat(e.target.value))}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <label className={styles.controlLabel}>
                            对比度
                            <span className={styles.sliderValue}>{renderOptions.contrast.toFixed(2)}</span>
                        </label>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.01"
                            value={renderOptions.contrast}
                            className={styles.slider}
                            onChange={(e) => handleParameterChange('contrast', parseFloat(e.target.value))}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <label className={styles.controlLabel}>
                            饱和度
                            <span className={styles.sliderValue}>{renderOptions.saturation.toFixed(2)}</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="2"
                            step="0.01"
                            value={renderOptions.saturation}
                            className={styles.slider}
                            onChange={(e) => handleParameterChange('saturation', parseFloat(e.target.value))}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <label className={styles.controlLabel}>
                            色相偏移
                            <span
                                className={styles.sliderValue}>{(renderOptions.hue * 360).toFixed(0)}°</span>
                        </label>
                        <input
                            type="range"
                            min="-0.5"
                            max="0.5"
                            step="0.01"
                            value={renderOptions.hue}
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
    </div>;
};
