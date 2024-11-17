import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";
import postcssPxToRem from "postcss-pxtorem";
import { viteMockServe } from "vite-plugin-mock";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: [/\.(svga|gltf|fbx|glsl|glb)$/],
  server: {
    open: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  // optimizeDeps: { exclude: ["recast-navigation"] },
  build: {
    cssTarget: "chrome61",
    rollupOptions: {
      output: {
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
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    viteMockServe({
      // default
      mockPath: "mock",
      enable: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "last 10 versions",
          ],
          grid: true
        }),
        postcssPxToRem({
          rootValue: 100,
          propList: ["*", "!border"],
          selectorBlackList: [".noRem-"],
        }),
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
