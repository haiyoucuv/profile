import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver, fs as resolverFs } from './resolver.ts';
import { FileSystem, IFileSystem } from "@system";

export interface OutputFile {
    path: string;
    text: string;
}

export class Builder {

    private static _ins: Builder = new Builder();
    static get ins() {
        return this._ins;
    }

    private buildQueue: Promise<OutputFile[]> = Promise.resolve([]);
    private running = false;

    private async start() {
        if (this.running) return;
        await esbuild.initialize({ wasmURL: esbuildWasm });
        this.running = true;
    }

    /**
     * 从 HTML 里提取 type="module" 脚本的 src 属性
     */
    private extractScriptEntries(html: string): string[] {
        const regex = /<script\b([^>]*?)>/gi;
        const entries: string[] = [];
        let match;
        while ((match = regex.exec(html)) !== null) {
            const attrs = match[1];
            if (attrs.includes('type="module"')) {
                const src = /src="([^"]+)"/.exec(attrs);
                if (src) entries.push(src[1]);
            }
        }
        return entries;
    }

    /**
     * 构建虚拟文件系统中的项目
     * @param entryPoints - 入口文件路径列表（支持 .html 自动解析入口）
     * @param fs - 虚拟文件系统实例
     * @param projectRoot - 项目根路径（VFS 绝对路径，如 /EditorApp）
     */
    async build(
        entryPoints: string[] = ['/main.ts'],
        fs: IFileSystem = FileSystem,
        projectRoot: string = ''
    ): Promise<OutputFile[]> {
        const root = projectRoot.replace(/\\/g, '/');

        const currentBuild = this.buildQueue.then(async () => {
            await this.start();
            initResolver(fs, root);

            let finalEntryPoints = entryPoints;

            // 如果入口是 HTML，解析其中的 module script 作为真正的编译入口
            if (entryPoints.length === 1 && entryPoints[0].endsWith('.html')) {
                const htmlPath = entryPoints[0];
                const htmlDir = htmlPath.split('/').slice(0, -1).join('/');

                try {
                    const htmlContent = await resolverFs.readFile(htmlPath) as string;
                    const scripts = this.extractScriptEntries(htmlContent);

                    if (scripts.length > 0) {
                        finalEntryPoints = scripts.map(src => {
                            const p = src.replace(/\\/g, '/');
                            // 绝对路径：/main.ts → {root}/main.ts
                            if (p.startsWith('/')) return `${root}${p}`.replace(/\/+/g, '/');
                            // 相对路径：./main.ts → {htmlDir}/main.ts
                            return `${htmlDir}/${p}`.replace(/\/+/g, '/');
                        });
                    } else {
                        // 没有显式入口则尝试找同目录的 main.ts
                        const defaultEntry = `${htmlDir}/main.ts`.replace(/\/+/g, '/');
                        if (await resolverFs.exists(defaultEntry)) {
                            finalEntryPoints = [defaultEntry];
                        } else {
                            console.warn('[Builder] No entry found in HTML and no fallback main.ts.');
                            return [];
                        }
                    }
                } catch (e) {
                    console.error('[Builder] Failed to parse HTML entry:', e);
                }
            }

            const result = await esbuild.build({
                entryPoints: finalEntryPoints,
                bundle: true,
                write: false,
                format: 'esm',
                target: 'esnext',
                sourcemap: false,
                outfile: 'main.js',
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

        // 确保异常不会阻塞后续构建
        this.buildQueue = currentBuild.catch(e => {
            console.error('[Builder] Build failed:', e);
            return [];
        });

        return currentBuild;
    }
}
