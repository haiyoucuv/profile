import { AppManifest } from "@system";
import { config } from "./config.ts";

const manifest: AppManifest = {
  config,
  lazyImport: () => import('./DockApp.tsx').then(module => module.DockApp)
};

export default manifest;
