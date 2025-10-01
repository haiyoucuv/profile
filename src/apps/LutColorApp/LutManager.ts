import { LUTData } from './RenderEngine.ts';
import { LutParser } from './LutParser.ts';
import * as Module from "node:module";

export interface LutPreset {
    id: string;
    fileName?: string;
    name: string;
    type: 'basic' | 'advanced';
    data?: LUTData;
    loader?: () => Promise<{ default: string }>;
}

export class LutManager {
    private static _instance: LutManager;
    private lutCache = new Map<string, LUTData>();
    private advancedPresets: LutPreset[] = [];
    private isInitialized = false;

    static get instance(): LutManager {
        if (!LutManager._instance) {
            LutManager._instance = new LutManager();
        }
        return LutManager._instance;
    }

    // 基础预设（代码生成）
    getBasicPresets(): LutPreset[] {
        return [
            { id: 'identity', name: '原图', type: 'basic' },
            { id: 'warm', name: '暖色调', type: 'basic' },
            { id: 'cool', name: '冷色调', type: 'basic' },
            { id: 'vintage', name: '复古', type: 'basic' },
            { id: 'dramatic', name: '戏剧性', type: 'basic' },
            { id: 'monochrome', name: '黑白', type: 'basic' }
        ];
    }

    // 获取高级预设（从文件加载）
    getAdvancedPresets(): LutPreset[] {
        return this.advancedPresets;
    }

    // 初始化高级预设
    async initializeAdvancedPresets(): Promise<void> {
        if (this.isInitialized) return;

        try {
            // 使用 Vite 的 import.meta.glob 来自动发现 LUT 文件
            const lutFiles = import.meta.glob<{ default: string }>('../../assets/LutColorApp/lut/*.{cube,3dl}', {
                eager: false,
                query: '?raw'
            });

            this.advancedPresets = Object.keys(lutFiles).map((path) => {
                // 从路径中提取文件名作为预设名称
                const fileName = path.split('/').pop() || '';
                const id = fileName?.replace(/\.(cube|3dl)$/, '') || '';

                return {
                    id: `advanced_${id}`,
                    fileName: fileName,
                    name: id,
                    type: 'advanced' as const,
                    loader: lutFiles[path]
                };
            });


            this.isInitialized = true;
            console.log(`Loaded ${this.advancedPresets.length} advanced LUT presets`);
        } catch (error) {
            console.error('Failed to initialize advanced presets:', error);
        }
    }

    // 格式化预设名称
    private formatPresetName(fileName: string): string {
        return fileName
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/V\d+\.\d+/g, match => match.toUpperCase())
            .replace(/--N\d+/g, '')
            .trim();
    }

    // 获取LUT数据
    async getLutData(preset: LutPreset): Promise<LUTData> {
        // 检查缓存
        if (this.lutCache.has(preset.id)) {
            return this.lutCache.get(preset.id)!;
        }

        let lutData: LUTData;

        if (preset.type === 'basic') {
            // 基础预设使用代码生成
            if (preset.id === 'identity') {
                lutData = LutParser.createIdentityLUT(32);
            } else {
                lutData = LutParser.createPresetLUT(preset.id, 32);
            }
        } else {
            // 高级预设从文件加载
            if (!preset.loader) {
                throw new Error(`No URL provided for advanced preset: ${preset.name}`);
            }

            try {
                // 动态导入文件URL
                const module = await preset.loader();
                const content = module.default;

                // 创建虚拟File对象来使用现有的解析器
                const file = new File([content], preset.fileName, {
                    type: 'text/plain'
                });

                lutData = await LutParser.parseLUT(file);
                console.log(`Loaded advanced LUT: ${preset.name}`);
            } catch (error) {
                console.error(`Failed to load advanced LUT ${preset.name}:`, error);
                // 降级到身份LUT
                lutData = LutParser.createIdentityLUT(32);
            }
        }

        // 缓存结果
        this.lutCache.set(preset.id, lutData);
        return lutData;
    }

    // 清除缓存
    clearCache(): void {
        this.lutCache.clear();
    }

    // 预加载常用的LUT
    async preloadCommonLuts(): Promise<void> {
        const basicPresets = this.getBasicPresets();
        const preloadPromises = basicPresets.slice(0, 3).map(preset =>
            this.getLutData(preset).catch(error =>
                console.warn(`Failed to preload ${preset.name}:`, error)
            )
        );

        await Promise.all(preloadPromises);
        console.log('Common LUTs preloaded');
    }
}
