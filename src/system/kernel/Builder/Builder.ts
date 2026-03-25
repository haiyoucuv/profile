import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver, fs as resolverFs } from './resolver.ts';
import { FileSystem, IFileSystem } from "@system";

export class Builder {

    private static _ins: Builder = new Builder();
    static get ins() {
        return this._ins;
    }

    private buildQueue: Promise<any> = Promise.resolve();

    constructor() {
    }

    running = false;

    private start = async () => {
        if (this.running) return;
        await esbuild.initialize({
            wasmURL: esbuildWasm,
        });
        this.running = true;
    }

    private extractEntryPoints(html: string): string[] {
        // 使用更灵活的正则，匹配 <script ... src="..." ... type="module"> 或反之
        const regex = /<script\b([^>]*?)>/gi;
        const entryPoints: string[] = [];
        let match;
        while ((match = regex.exec(html)) !== null) {
            const attrString = match[1];
            if (attrString.includes('type="module"')) {
                const srcMatch = /src="([^"]+)"/.exec(attrString);
                if (srcMatch) {
                    entryPoints.push(srcMatch[1]);
                }
            }
        }
        return entryPoints;
    }

    async build(entryPoints: string[] = ['/main.ts'], fs: IFileSystem = FileSystem, projectRoot: string = '') {
        const root = projectRoot.replace(/\\/g, '/');
        const currentBuild = this.buildQueue.then(async () => {
            await this.start();
            initResolver(fs, root);

            let finalEntryPoints = entryPoints;
            let isHtmlEntry = false;

            // 如果入口是 HTML，则解析其中的脚本作为真正的入口
            if (entryPoints.length === 1 && entryPoints[0].endsWith('.html')) {
                isHtmlEntry = true;
                const htmlPath = entryPoints[0];
                const htmlDir = htmlPath.split('/').slice(0, -1).join('/');

                try {
                    const htmlContent = await resolverFs.readFile(htmlPath);
                    const extracted = this.extractEntryPoints(htmlContent as string);

                    if (extracted.length > 0) {
                        // 提取到了脚本，将其转换为 VFS 绝对路径
                        finalEntryPoints = extracted.map(src => {
                            const p = src.replace(/\\/g, '/');
                            if (p.startsWith('/')) {
                                // 如果是绝对路径 /main.ts，我们认为它是相对于项目根目录的
                                return `${root}${p}`.replace(/\/+/g, '/');
                            }
                            return `${htmlDir}/${p}`.replace(/\/+/g, '/');
                        });
                    } else {
                        // 如果 HTML 里没写脚本，尝试默认找同目录下的 main.ts
                        const defaultMain = `${htmlDir}/main.ts`.replace(/\/+/g, '/');
                        if (await resolverFs.exists(defaultMain)) {
                            finalEntryPoints = [defaultMain];
                        } else {
                            // 实在找不到入口，返回空，不再继续 esbuild
                            console.warn('Builder: No module script found and no fallback main.ts exists.');
                            return [];
                        }
                    }
                    console.log('Builder: EntryPoints sanitized for esbuild:', finalEntryPoints);
                } catch (e) {
                    console.error('Failed to parse HTML entry, falling back to original entry points', e);
                }
            }

            const result = await esbuild.build({
                entryPoints: finalEntryPoints,
                loader: { '.ts': 'ts', '.tsx': 'tsx', '.css': 'css', '.less': 'css' },
                bundle: true,
                sourcemap: false,
                write: false,
                format: 'esm',
                target: "esnext",
                outfile: 'main.js', // 强制输出文件名，避免出现 <stdout>
                plugins: [
                    resolvePlugin(),
                    {
                        name: 'virtual-fs',
                        setup(build) {
                            build.onLoad({ filter: /.*/, namespace: 'vfs' }, async (args) => {
                                try {
                                    const normalizedPath = String(args.path).replace(/\/+/g, '/');
                                    const content = await resolverFs.readFile(normalizedPath);
                                    const ext = normalizedPath.split('.').pop()?.toLowerCase();
                                    const loader = (ext === 'tsx' || ext === 'ts') ? 'tsx' :
                                                  (ext === 'css' || ext === 'less') ? 'css' : 'text';

                                    let finalContent = '';
                                    if (typeof content === 'string') {
                                        finalContent = content;
                                    } else if (content instanceof Blob) {
                                        finalContent = await content.text();
                                    }

                                    return {
                                        contents: String(finalContent),
                                        loader: loader as esbuild.Loader
                                    };
                                } catch (e) {
                                    console.error('Builder: Load Error for', args.path, e);
                                    return {
                                        errors: [{ text: `File not found in VFS: ${args.path}` }]
                                    };
                                }
                            });
                        }
                    }
                ]
            });

            console.log('Builder: Build result:', result.outputFiles);
            return result.outputFiles;
        });

        // 更新队列，确保异常也不会阻塞后续任务
        this.buildQueue = currentBuild.catch(e => {
            console.error('Builder: Build failed:', e);
            return [];
        });

        return currentBuild;
    }
}
