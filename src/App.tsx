import React, { useEffect } from "react";

import "./App.less";

import { Docker } from "./components/Docker/Docker.tsx";
import { Desktop } from "./components/Desktop/Desktop.tsx";
import { AppRegistry } from "./apps/AppRegistry.ts";
import useForceUpdate from "use-force-update";

function App() {

    const forceUpdate = useForceUpdate();

    // 初始化应用注册表
    useEffect(() => {
        // 自动发现所有应用
        const initializeApps = async () => {
            try {
                // 使用 Vite 的 import.meta.glob 自动发现应用
                const manifests = await AppRegistry.discoverAppsWithGlob();

                // 注册到清单管理器
                manifests.forEach(manifest => {
                    AppRegistry.ins.registerManifest(manifest);
                });

                // 注册到应用注册表
                manifests.forEach(manifest => {
                    AppRegistry.ins.registerFromManifest(manifest);
                });

                forceUpdate();
            } catch (error) {
                console.error('Failed to initialize apps:', error);
            }
        };

        initializeApps();
    }, [forceUpdate]);


    return <div className="app">
        <Desktop />
        <Docker />
    </div>;
}

export default App;
