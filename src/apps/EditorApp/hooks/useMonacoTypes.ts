import { typescript } from 'monaco-editor';
import { useEffect } from 'react';
import { TypeScriptConfig } from "../monacoConfig";

/**
 * 是否已经完成初始化，Monaco 的类型注入是全局的，只需运行一次
 */
let initialized = false;

export const useMonacoTypes = () => {
    useEffect(() => {
        if (initialized) return;
        initialized = true;

        console.log('Monaco: Initializing type system...');

        // 配置 TypeScript 编译选项
        typescript.typescriptDefaults.setCompilerOptions({
            ...TypeScriptConfig,
        });

        // 加载项目相关的定义文件 (React, Three.js 等)
        const types: Record<string, any> = import.meta.glob(
            [
                '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
                '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}',
                '/node_modules/@types/three/**/*.{d.ts,json}',
            ],
            { eager: true, query: '?raw' }
        )

        Object.keys(types).forEach((path) => {
            const content = (types[path] as any).default || types[path];
            typescript.typescriptDefaults.addExtraLib(content, `file://${path}`)
            typescript.javascriptDefaults.addExtraLib(content, `file://${path}`)
        })
    }, []);
};
