import { AppManifest } from "../AppRegistry.ts";
import { config } from "./config.ts";

// 应用配置

// 应用类


// 应用清单（默认导出）
const manifest: AppManifest = {
  config,
  lazyImport: () => import('./GitHubApp.tsx').then(module => module.GitHubApp)
};

export default manifest; 