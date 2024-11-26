import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssPxToRem from "postcss-pxtorem";
import { viteMockServe } from "vite-plugin-mock";
import legacy from "@vitejs/plugin-legacy";
import svgr from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    assetsInclude: [/\.(svga|gltf|fbx|glsl|glb)$/],
    server: {
        open: false,
    },
    resolve: {},
    worker: {
        format: "es",
    },
    // optimizeDeps: { exclude: ["recast-navigation"] },
    build: {
        // cssTarget: "chrome61",
        rollupOptions: {
            output: {
                dir: "docs",
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
    },
    plugins: [
        react(),
        svgr(),
        // legacy({
        //   targets: ["defaults", "not IE 11"],
        // }),
        viteMockServe({
            // default
            mockPath: "mock",
            enable: true,
        }),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                tailwindcss({ config: "./tailwind.config.js" }),
                // postcssPxToRem({
                //     rootValue: 16,
                //     propList: ["*"],
                // }),
            ],
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
        modules: {
            localsConvention: "camelCase"
        }
    }
});
