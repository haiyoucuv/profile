import esbuild from 'esbuild-wasm';
import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';

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

export async function transformCode(code: string) {
    const result = await esbuild.transform(code, {loader: 'tsx'})
    return result;
}