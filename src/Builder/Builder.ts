import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver } from './resolver';
import { FileSystem } from "../editor/utils/FileSystem.ts";

import Emittery from 'emittery';

export class Builder extends Emittery {

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

    async build() {
        await this.start();

        initResolver(FileSystem.ins.fs);

        const result = await esbuild.build({
            entryPoints: ['/index.ts'],
            bundle: true,
            sourcemap: false,
            write: false,
            format: 'esm',
            plugins: [
                resolvePlugin(),
                {
                    name: 'virtual-fs',
                    setup(build) {
                        // 处理文件读取
                        build.onLoad({ filter: /.*/, namespace: 'browser-module' }, async (args) => {
                            const file = await FileSystem.ins.readFile(args.path);
                            if (!file) {
                                return {
                                    errors: [{ text: `File not found: ${args.path}` }]
                                };
                            }

                            return {
                                contents: file.content,
                                // loader: file.language as any
                            };
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
