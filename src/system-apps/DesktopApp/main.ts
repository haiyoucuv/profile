import { AppManifest } from "@system";
import { config } from "./config.ts";

const manifest: AppManifest = {
  config,
  lazyImport: () => import('./DesktopApp.tsx').then(module => module.DesktopApp)
};

export default manifest;
