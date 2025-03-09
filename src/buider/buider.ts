import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';
import { resolvePlugin, initResolver } from './resolver';
import { FileSystem } from "../editor/utils/FileSystem.ts";
import { EventMessage, globalMsg } from "../global/event";

let running = false;

export async function startBuildServer() {
    if (running) {
        return;
    }

    await esbuild.initialize({
        wasmURL: esbuildWasm,
    });
    running = true;
}

export async function transformCode() {
    initResolver(FileSystem.ins.fs);

    const result = await esbuild.build({
        entryPoints: ['/index.tsx'],
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

    globalMsg.dispatchEvent(EventMessage.CODE_COMPILED, code);

    return code;
}