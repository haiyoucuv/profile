import { AppManifest } from "../AppRegistry.ts";
import { config } from "./config.ts";


// 应用清单（默认导出）
const manifest: AppManifest = {
  config,
  lazyImport: () => import('./JueJinApp.tsx').then(module => module.JueJinApp)
};

export default manifest; 