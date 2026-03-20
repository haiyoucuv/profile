import { AppManifest } from "@system";
import { config } from "./config";

export default {
    config,
    lazyImport: () => import("./FinderApp.tsx").then(module => module.FinderApp)
} as AppManifest;
