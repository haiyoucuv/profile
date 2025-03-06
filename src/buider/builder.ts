// wasm-builder.js
import esbuild from 'esbuild-wasm'

// 初始化 WASM 环境
const initEngine = async () => {
    const wasmFiles = {
        'esbuild.wasm': 'https://cdn.jsdelivr.net/npm/esbuild-wasm@0.15.18/esbuild.wasm',
    }

    await esbuild.initialize({
        wasmURL: wasmFiles['esbuild.wasm'],
        worker: false // 禁用独立 worker
    })

    self.__VITE__ = {
        compilers: {

        }
    }
}
