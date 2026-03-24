import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver, fs as resolverFs } from './resolver.ts';
import { FileSystem, IFileSystem } from "@system";

import Emittery from 'emittery';

export class Builder extends Emittery<{ [key: symbol]: string }> {

    static _ins: Builder = new Builder();
    static get ins() {
        return this._ins;
    }

    static EventType = {
        CODE_COMPILED: Symbol('Compiled'),
    }

    constructor() {
        super();
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
        const regex = /<script\b[^>]*type="module"[^>]*src="([^"]+)"[^>]*>/gi;
        const entryPoints: string[] = [];
        let match;
        while ((match = regex.exec(html)) !== null) {
            entryPoints.push(match[1]);
        }
        return entryPoints;
    }

    async build(entryPoints: string[] = ['/main.ts'], fs: IFileSystem = FileSystem, projectRoot: string = '') {
        await this.start();
        initResolver(fs, projectRoot);

        let finalEntryPoints = entryPoints;

        // 如果入口是 HTML，则解析其中的脚本作为真正的入口
        if (entryPoints.length === 1 && entryPoints[0].endsWith('.html')) {
            try {
                const htmlPath = entryPoints[0];
                const htmlDir = htmlPath.split('/').slice(0, -1).join('/');
                const htmlContent = await resolverFs.readFile(htmlPath);
                const extracted = this.extractEntryPoints(htmlContent as string);
                if (extracted.length > 0) {
                    finalEntryPoints = extracted.map(src => {
                        if (src.startsWith('/')) return src; 
                        return `${htmlDir}/${src}`.replace(/\/+/g, '/');
                    });
                }
                console.log('Builder: HTML Entry extracted:', finalEntryPoints);
            } catch (e) {
                console.warn('Failed to parse HTML entry', e);
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
            plugins: [
                resolvePlugin(),
                {
                    name: 'virtual-fs',
                    setup(build) {
                        build.onLoad({ filter: /.*/, namespace: 'vfs' }, async (args) => {
                            try {
                                const normalizedPath = args.path.replace(/\/+/g, '/');
                                console.log('Builder: onLoad:', normalizedPath);
                                const content = await resolverFs.readFile(normalizedPath);
                                const ext = normalizedPath.split('.').pop();
                                const loader: any = (ext === 'tsx' || ext === 'ts') ? 'tsx' : 
                                              (ext === 'css' || ext === 'less') ? 'css' : 'text';
                                
                                const finalContent = typeof content === 'string' ? content : (content instanceof Blob ? await content.text() : '');
                                
                                // 构建极其纯净的返回对象
                                const result = Object.assign(Object.create(null), {
                                    contents: String(finalContent),
                                    loader: String(loader)
                                });
                                
                                return result;
                            } catch (e) {
                                console.error('Builder: Load Error for', args.path, e);
                                return Object.assign(Object.create(null), {
                                    errors: [{ text: `File not found in VFS: ${args.path}` }]
                                });
                            }
                        });
                    }
                }
            ]
        });

        const code = result.outputFiles[0].text;
        this.emit(Builder.EventType.CODE_COMPILED, code);
        return code;
    }
}
