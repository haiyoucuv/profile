import { AppManifest } from "../AppRegistry.ts";
import { config } from "./config.ts";


// 应用清单（默认导出）
const manifest: AppManifest = {
  config,
  lazyImport: () => import('./EditorApp.ts').then(module => module.EditorApp)
};

export default manifest;
