import React, { useEffect } from "react";

import "./App.less";

import { EditorApp } from "./apps/EditorApp/EditorApp.ts";
import { AppManager } from "./apps/AppManager.ts";
import { Docker } from "./components/Docker/Docker.tsx";

function App() {

    useEffect(() => {
        AppManager.ins.launchApp(EditorApp);
        return () => {
            AppManager.ins.exitApp(EditorApp);
        }
    });

    return <div className="app">
        <Docker/>
    </div>;
}

export default App;
