import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver, fs as resolverFs } from './resolver.ts';
import { FileSystem, IFileSystem } from "@system";

export interface OutputFile {
    /** 输出文件的虚拟路径，如 dist/main.js、dist/chunk-abc123.js */
    path: string;
    /** 编译后的文件文本内容 */
    text: string;
}

/**
 * 底层编译器（纯粹的 JS/TS 编译，不处理 HTML）
 *
 * 职责边界：
 * - 接受一组 .ts/.tsx/.js 入口路径
 * - 通过 esbuild-wasm 打包，启用 code splitting
 * - 返回所有输出文件（包括 shared chunks）
 *
 * HTML 解析、入口提取等应用层逻辑由调用方负责。
 */
export class Builder {

    private static _ins: Builder = new Builder();
    static get ins() { return this._ins; }

    private buildQueue: Promise<OutputFile[]> = Promise.resolve([]);
    private running = false;

    private async start() {
        if (this.running) return;
        await esbuild.initialize({ wasmURL: esbuildWasm });
        this.running = true;
    }

    /**
     * 编译一组 JS/TS 入口文件
     * @param entryPoints 入口路径列表（VFS 绝对路径，如 /EditorApp/main.ts）
     * @param fs          虚拟文件系统
     * @param projectRoot 项目根路径（用于 outbase 计算和 resolver 初始化）
     */
    async build(
        entryPoints: string[],
        fs: IFileSystem = FileSystem,
        projectRoot: string = ''
    ): Promise<OutputFile[]> {
        if (entryPoints.length === 0) return [];

        const root = projectRoot.replace(/\\/g, '/');

        const currentBuild = this.buildQueue.then(async () => {
            await this.start();
            initResolver(fs, root);

            const result = await esbuild.build({
                entryPoints,
                bundle: true,
                write: false,
                format: 'esm',       // splitting 要求 ESM 格式
                target: 'esnext',
                sourcemap: false,
                splitting: true,      // 开启代码分割，共享模块自动提取为 chunk
                outdir: 'dist',       // splitting 要求 outdir，不能用 outfile
                outbase: root,        // 以项目根为基准计算输出路径，避免深层目录结构
                loader: { '.ts': 'ts', '.tsx': 'tsx', '.css': 'css', '.less': 'css' },
                plugins: [
                    resolvePlugin(),
                    {
                        name: 'vfs-loader',
                        setup(build) {
                            build.onLoad({ filter: /.*/, namespace: 'vfs' }, async (args) => {
                                try {
                                    const path = String(args.path).replace(/\/+/g, '/');
                                    const content = await resolverFs.readFile(path);
                                    const ext = path.split('.').pop()?.toLowerCase();
                                    const loader = (ext === 'tsx' || ext === 'ts') ? 'tsx'
                                        : (ext === 'css' || ext === 'less') ? 'css'
                                        : 'text';
                                    const text = typeof content === 'string'
                                        ? content
                                        : await (content as Blob).text();
                                    return { contents: text, loader: loader as esbuild.Loader };
                                } catch {
                                    return { errors: [{ text: `File not found in VFS: ${args.path}` }] };
                                }
                            });
                        }
                    }
                ]
            });

            return result.outputFiles as OutputFile[];
        });

        this.buildQueue = currentBuild.catch(e => {
            console.error('[Builder] Build failed:', e);
            return [];
        });

        return currentBuild;
    }
}
