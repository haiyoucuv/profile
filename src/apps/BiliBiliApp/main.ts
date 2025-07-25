import { AppManifest } from "../AppRegistry.ts";
import { config } from "./config.ts";

// 应用清单（默认导出）
const manifest: AppManifest = {
    config,
    lazyImport: () => import('./BiliBiliApp.tsx').then(module => module.BiliBiliApp)
};

export default manifest;
