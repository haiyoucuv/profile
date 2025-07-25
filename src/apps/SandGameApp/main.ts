import { AppManifest } from "../AppRegistry.ts";
import { config } from "./config.ts";


// 应用清单（默认导出）
const manifest: AppManifest = {
  config,
  lazyImport: () => import('./SandGameApp.tsx').then(module => module.SandGameApp)
};

export default manifest;
