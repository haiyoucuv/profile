import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver } from './resolver.ts';
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

    async build(entryPoints: string[] = ['/main.ts'], fs: IFileSystem = FileSystem) {
        await this.start();

        initResolver(fs);

        const result = await esbuild.build({
            entryPoints,
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
                        // 处理文件读取
                        build.onLoad({ filter: /.*/, namespace: 'browser-module' }, async (args) => {
                            try {
                                const content = await fs.readFile(args.path);
                                const ext = args.path.split('.').pop();
                                const loader: any = (ext === 'tsx' || ext === 'ts') ? 'tsx' : 
                                              (ext === 'css' || ext === 'less') ? 'css' : 'text';
                                return {
                                    contents: content as string,
                                    loader
                                };
                            } catch (e) {
                                return {
                                    errors: [{ text: `File not found: ${args.path}` }]
                                };
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
