import { typescript } from 'monaco-editor';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useCallback } from 'react';
import { setupTypeAcquisition } from '@typescript/ata';
import ts from 'typescript';
import { TypeScriptConfig } from '../monacoConfig';

let initialized = false;

// ---- VFS 文件层面的 exports 映射 (核心解法) ----
// 因为 Monaco 阉割版的 TS 使用 NodeJs 模型，不认识 package.json 的 exports。
// 于是我们在收到 package.json 时解析 exports，然后：
// 如果收到 {pkg}/examples/jsm/xxx.d.ts，发现有 "./addons/*": "./examples/jsm/*" 映射
// 则在 VFS 中创建一个额外的副本（影子文件）放在 {pkg}/addons/xxx.d.ts 路径上。
// 这样 TypeScript 传统的 NodeJs 模块解析规则就能天然地找到它，不需要任何 tsconfig 黑科技！

const packageExports = new Map<string, Array<{ from: string; to: string }>>();
const fetchedFiles = new Map<string, Array<{ path: string; code: string }>>();

function mirrorFileIfNeeded(pkgName: string, path: string, code: string) {
    // return;

    const exports = packageExports.get(pkgName);
    if (!exports) return;

    // 提取子路径，例如：
    // /node_modules/@types/three/examples/jsm/controls/OrbitControls.d.ts
    // /node_modules/three/examples/jsm/controls/OrbitControls.d.ts
    const pkgNameEscaped = pkgName.replace(/\//g, '\\/'); // 兼容 @scope/pkg
    const regex = new RegExp(`^\\/node_modules\\/(?:@types\\/)?${pkgNameEscaped}\\/(.+)$`);
    const match = regex.exec(path);
    if (!match) return;

    // e.g. "./examples/jsm/controls/OrbitControls.d.ts"
    const subpath = './' + match[1];

    for (const mapping of exports) {
        // 如果文件路径属于 exports 映射的 "to" (如 ./examples/jsm/*)
        if (subpath.startsWith(mapping.to)) {
            const mirroredSubpath = mapping.from + subpath.slice(mapping.to.length);

            // replace subpath inside the path
            // e.g. /node_modules/@types/three/examples/jsm/controls/OrbitControls.d.ts
            // replacing 'examples/jsm/controls/OrbitControls.d.ts' with 'addons/controls/OrbitControls.d.ts'
            const originalSuffix = match[1];
            const mirroredSuffix = mirroredSubpath.slice(2); // 去掉 './'
            const mirroredPath = path.replace(originalSuffix, mirroredSuffix);

            if (path !== mirroredPath) {
                console.log(`[ATA VFS Mirror] !! SUCCESS !! 影子映射: ${path} -> ${mirroredPath}`);
                typescript.typescriptDefaults.addExtraLib(code, `file://${mirroredPath}`);
                typescript.javascriptDefaults.addExtraLib(code, `file://${mirroredPath}`);
            }
        }
    }
}

function processPackageExports(pkgName: string, code: string) {
    try {
        const pkg = JSON.parse(code);
        if (!pkg.exports || typeof pkg.exports !== 'object') return;

        const mappings: Array<{ from: string; to: string }> = [];
        for (const [key, value] of Object.entries(pkg.exports)) {
            // 只处理带有 /* 的路径别名，比如 "./addons/*" -> "./examples/jsm/*"
            if (!key.startsWith('./') || !key.endsWith('/*')) continue;

            let target: string | undefined;
            if (typeof value === 'string') {
                target = value;
            } else if (typeof value === 'object' && value !== null) {
                target = (value as any).types || (value as any).import || (value as any).default;
            }

            if (typeof target === 'string' && target.endsWith('/*')) {
                const fromStr = key.slice(0, -1);
                const toStr = target.slice(0, -1);
                // 忽略完全一样的映射 (如 "./examples/jsm/" -> "./examples/jsm/")
                if (fromStr !== toStr) {
                    mappings.push({ from: fromStr, to: toStr });
                }
            }
        }

        if (mappings.length > 0) {
            packageExports.set(pkgName, mappings);
            console.log(`[ATA] 检测到 "${pkgName}" 存在 exports，准备 VFS 镜像规则:`, mappings);

            // 追溯之前已经下载的文件，生成镜像
            const files = fetchedFiles.get(pkgName);
            if (files) {
                for (const file of files) {
                    mirrorFileIfNeeded(pkgName, file.path, file.code);
                }
            }
        }
    } catch { /* 忽略 JSON 解析错误 */ }
}

function handleAtaFileReceived(code: string, path: string) {
    // 1. 常规加载
    typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
    typescript.javascriptDefaults.addExtraLib(code, `file://${path}`);

    // 解析当前文件属于哪个包
    // 匹配 /node_modules/{pkgName} 或 /node_modules/@types/{pkgName}
    const pkgMatch = /^\/node_modules\/(?:@types\/)?((?:@[^/]+\/)?[^/]+)/.exec(path);
    if (!pkgMatch) return;
    const pkgName = pkgMatch[1]; // 如 "three" 或 "@typescript/ata"

    // 2. 如果是 package.json，解析其 exports 字段
    if (path.endsWith('/package.json')) {
        processPackageExports(pkgName, code);
    }
    // 3. 将文件加入缓存并尝试触发镜像逻辑
    else {
        let files = fetchedFiles.get(pkgName);
        if (!files) {
            files = [];
            fetchedFiles.set(pkgName, files);
        }
        files.push({ path, code });

        // 尝试生成 VFS 影子映射
        mirrorFileIfNeeded(pkgName, path, code);
    }
}

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
            receivedFile: handleAtaFileReceived,
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

    /** 手动触发打印诊断信息（从控制台调用 window.dumpAtaVfs()） */
    useEffect(() => {
        (window as any).dumpAtaVfs = () => {
            console.log('--- ATA VFS Dump ---');
            console.log('packageExports:', packageExports);

            const models = monaco.editor.getModels();
            const tsModels = models.filter(m => m.uri.toString().includes('OrbitControls'));
            console.log('OrbitControls models in VFS:', tsModels.map(m => m.uri.toString()));

            const extraLibs = typescript.typescriptDefaults.getExtraLibs();
            const orbitLibs = Object.keys(extraLibs).filter(k => k.includes('OrbitControls'));
            console.log('OrbitControls in extraLibs:', orbitLibs);
        };
    }, []);

    return { triggerATA };
};
