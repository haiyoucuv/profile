import React, { useEffect } from "react";

import "./App.less";

import { Docker } from './components/WindowWrapper';

import { EditorApp } from "./apps/EditorApp/EditorApp.ts";
import { AppManager } from "./apps/AppManager.ts";

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
