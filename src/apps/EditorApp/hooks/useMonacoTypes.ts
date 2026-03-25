import { typescript } from 'monaco-editor';
import { useEffect, useRef, useCallback } from 'react';
import { setupTypeAcquisition } from '@typescript/ata';
import ts from 'typescript';
import { TypeScriptConfig } from '../monacoConfig';

let initialized = false;

function initMonaco() {
    if (initialized) return;
    initialized = true;
    typescript.typescriptDefaults.setCompilerOptions(TypeScriptConfig);
    typescript.typescriptDefaults.setEagerModelSync(true);
}

function createATA() {
    return setupTypeAcquisition({
        projectName: 'EditorApp',
        typescript: ts,
        logger: console,
        delegate: {
            receivedFile: (code: string, path: string) => {
                console.log('[ATA]', path);
                typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
                typescript.javascriptDefaults.addExtraLib(code, `file://${path}`);
            },
            errorMessage: (msg: string, err: Error) => console.warn('[ATA]', msg, err),
            started: () => console.log('[ATA] Fetching types...'),
            finished: (vfs: Map<string, string>) => console.log(`[ATA] Done. ${vfs.size} files.`),
        },
    });
}

/**
 * useMonacoTypes
 *
 * 返回 triggerATA(code)，内置 1.5s 防抖，
 * 防止每次按键都触发大量并发请求导致 ERR_INSUFFICIENT_RESOURCES。
 */
export const useMonacoTypes = () => {
    const ataRef = useRef<ReturnType<typeof createATA> | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        initMonaco();
        ataRef.current = createATA();
    }, []);

    /** 防抖版 triggerATA：1.5s 内多次调用只执行最后一次 */
    const triggerATA = useCallback((code: string) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            ataRef.current?.(code);
        }, 1500);
    }, []);

    return { triggerATA };
};
