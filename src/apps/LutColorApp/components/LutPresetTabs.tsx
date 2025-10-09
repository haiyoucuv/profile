import React, { useState, useEffect } from 'react';
import { LutManager, LutPreset } from '../LutManager.ts';
import styles from './LutPresetTabs.module.less';
import classNames from "classnames";

interface LutPresetTabsProps {
    currentPreset: string;
    onPresetChange: (preset: LutPreset) => void;
    isLoading?: boolean;
}

export const LutPresetTabs: React.FC<LutPresetTabsProps> = ({
                                                                currentPreset,
                                                                onPresetChange,
                                                                isLoading = false
                                                            }) => {

    const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');
    const [basicPresets, setBasicPresets] = useState<LutPreset[]>([]);
    const [advancedPresets, setAdvancedPresets] = useState<LutPreset[]>([]);
    const [isInitializing, setIsInitializing] = useState(false);

    // 初始化预设
    useEffect(() => {
        const initializePresets = async () => {
            setIsInitializing(true);

            try {
                // 获取基础预设
                const basic = LutManager.instance.getBasicPresets();
                setBasicPresets(basic);

                // 初始化并获取高级预设
                await LutManager.instance.initializeAdvancedPresets();
                const advanced = LutManager.instance.getAdvancedPresets();
                setAdvancedPresets(advanced);

                console.log(`Initialized ${basic.length} basic and ${advanced.length} advanced presets`);
            } catch (error) {
                console.error('Failed to initialize presets:', error);
            } finally {
                setIsInitializing(false);
            }
        };

        initializePresets();
    }, []);

    const handleTabChange = (tab: 'basic' | 'advanced') => {
        setActiveTab(tab);
    };

    const handlePresetClick = (preset: LutPreset) => {
        if (isLoading) return;
        onPresetChange(preset);
    };

    const isPresetActive = (preset: LutPreset) => {
        return currentPreset === preset.id ||
            (currentPreset === 'identity' && preset.id === 'identity') ||
            (currentPreset === 'custom' && preset.id.startsWith('advanced_'));
    };

    const currentPresets = activeTab === 'basic' ? basicPresets : advancedPresets;

    return (
        <div className={styles.container}>
            {/* Tab 头部 */}
            <div className={styles.tabHeader}>
                <button
                    className={classNames(styles.tabButton, {
                        [styles.active]: activeTab === 'basic'
                    })}
                    onClick={() => handleTabChange('basic')}
                >
                    基础预设<span className={styles.count}>({basicPresets.length})</span>
                </button>
                <button
                    className={classNames(styles.tabButton, {
                        [styles.active]: activeTab === 'advanced'
                    })}
                    onClick={() => handleTabChange('advanced')}
                >
                    高级预设
                    <span className={styles.count}>({advancedPresets.length})</span>
                </button>
            </div>

            {/* Tab 内容 */}
            <div className={styles.tabContent}>
                {
                    isInitializing
                        ? <div className={styles.loading}>
                            <div className={styles.spinner}/>
                            <span>加载预设中...</span>
                        </div>
                        : <div className={styles.presetGrid}>
                            {currentPresets.map(preset => (
                                <button
                                    key={preset.id}
                                    className={
                                        classNames(styles.presetButton, {
                                            [styles.active]: isPresetActive(preset),
                                            [styles.disabled]: isLoading,
                                        })
                                    }
                                    onClick={() => handlePresetClick(preset)}
                                    disabled={isLoading}
                                    title={preset.name}
                                >
                                    <span className={styles.presetName}>{preset.name}</span>
                                    {preset.type === 'advanced' && <span className={styles.presetType}>LUT</span>}
                                </button>
                            ))}

                            {currentPresets.length === 0 && !isInitializing && <div className={styles.emptyState}>
                                {activeTab === 'basic' ? '暂无基础预设' : '暂无高级预设'}
                            </div>}
                        </div>
                }
            </div>
        </div>
    );
};
