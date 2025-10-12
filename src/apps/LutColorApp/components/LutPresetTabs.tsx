import React, { useState, useEffect, useRef } from 'react';
import { LutManager, LutPreset } from '../LutManager.ts';
import styles from './LutPresetTabs.module.less';
import classNames from "classnames";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.ts";
import { RenderQueue } from '../utils/RenderQueue';
import { defaultRenderOptions } from '../renderer';

const PREVIEW_WIDTH = 128;

interface LutPresetTabsProps {
    currentPreset: string;
    onPresetChange: (preset: LutPreset) => void;
    isLoading?: boolean;
    renderQueue: React.RefObject<RenderQueue | null>;
    imageWidth: number;
    imageHeight: number;
}

const PresetButton: React.FC<{ 
    preset: LutPreset, 
    onClick: (preset: LutPreset) => void,
    isActive: boolean,
    isLoading: boolean,
    renderQueue: React.RefObject<RenderQueue | null>;
    imageWidth: number;
    imageHeight: number;
}> = ({ preset, onClick, isActive, isLoading, renderQueue, imageWidth, imageHeight }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const isIntersecting = useIntersectionObserver(ref, { rootMargin: '200px' });
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const generatePreview = async () => {
            if (isIntersecting && !previewUrl && !isGenerating && renderQueue.current && imageWidth > 0) {
                setIsGenerating(true);
                try {
                    const aspect = imageWidth / imageHeight;
                    const previewHeight = Math.round(PREVIEW_WIDTH / aspect);

                    const previewRenderOptions = { ...defaultRenderOptions, intensity: 1.0 };

                    const blob = await renderQueue.current.requestPreviewRender(preset, PREVIEW_WIDTH, previewHeight, previewRenderOptions);
                    const url = URL.createObjectURL(blob);
                    setPreviewUrl(url);
                } catch (error) {
                    console.error(`Failed to generate preview for ${preset.name}:`, error);
                } finally {
                    setIsGenerating(false);
                }
            }
        };
        generatePreview();

        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [isIntersecting, previewUrl, isGenerating, renderQueue, preset, imageWidth, imageHeight]);

    return (
        <button
            ref={ref}
            key={preset.id}
            className={classNames(styles.presetButton, { [styles.active]: isActive, [styles.disabled]: isLoading })}
            onClick={() => onClick(preset)}
            disabled={isLoading}
            title={preset.name}
        >
            <div className={styles.previewContainer}>
                {previewUrl ? (
                    <img src={previewUrl} alt={preset.name} className={styles.presetPreview} />
                ) : (
                    <div className={styles.previewPlaceholder} />
                )}
                 {isGenerating && <div className={styles.previewSpinner} />}
            </div>
            <span className={styles.presetName}>{preset.name}</span>
        </button>
    );
};

export const LutPresetTabs: React.FC<LutPresetTabsProps> = ({ 
    currentPreset, 
    onPresetChange, 
    isLoading = false, 
    renderQueue,
    imageWidth,
    imageHeight
}) => {
    const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');
    const [basicPresets, setBasicPresets] = useState<LutPreset[]>([]);
    const [advancedPresets, setAdvancedPresets] = useState<LutPreset[]>([]);
    const [isInitializing, setIsInitializing] = useState(false);

    useEffect(() => {
        const initializePresets = async () => {
            setIsInitializing(true);
            try {
                const basic = LutManager.instance.getBasicPresets();
                setBasicPresets(basic);
                await LutManager.instance.initializeAdvancedPresets();
                const advanced = LutManager.instance.getAdvancedPresets();
                setAdvancedPresets(advanced);
            } catch (error) {
                console.error('Failed to initialize presets:', error);
            } finally {
                setIsInitializing(false);
            }
        };
        initializePresets();
    }, []);

    const isPresetActive = (preset: LutPreset) => currentPreset === preset.id;

    const currentPresets = activeTab === 'basic' ? basicPresets : advancedPresets;

    return (
        <div className={styles.container}>
            <div className={styles.tabHeader}>
                <button
                    className={classNames(styles.tabButton, { [styles.active]: activeTab === 'basic' })}
                    onClick={() => setActiveTab('basic')}
                >
                    基础预设<span className={styles.count}>({basicPresets.length})</span>
                </button>
                <button
                    className={classNames(styles.tabButton, { [styles.active]: activeTab === 'advanced' })}
                    onClick={() => setActiveTab('advanced')}
                >
                    高级预设
                    <span className={styles.count}>({advancedPresets.length})</span>
                </button>
            </div>

            <div className={styles.tabContent}>
                {isInitializing ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner} />
                        <span>加载预设中...</span>
                    </div>
                ) : (
                    <div className={styles.presetGrid}>
                        {currentPresets.map(preset => (
                            <PresetButton 
                                key={preset.id}
                                preset={preset}
                                onClick={onPresetChange}
                                isActive={isPresetActive(preset)}
                                isLoading={isLoading}
                                renderQueue={renderQueue}
                                imageWidth={imageWidth}
                                imageHeight={imageHeight}
                            />
                        ))}
                        {currentPresets.length === 0 && !isInitializing && (
                            <div className={styles.emptyState}>
                                {activeTab === 'basic' ? '暂无基础预设' : '暂无高级预设'}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};