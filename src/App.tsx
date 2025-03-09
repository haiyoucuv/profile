import React, { useEffect, useRef } from "react";

import "./App.less";

import { reaction } from "mobx";
import store from "./store/store.ts";
import { transformCode, startBuildServer } from "./buider/buider.ts";

import { Docker, Window, WindowManager } from './components/WindowWrapper';

import { EditorApp } from "./apps/EditorApp/EditorApp.ts";
import { EventMessage, globalMsg } from "./global/event";

function App() {

    useEffect(() => {
        const editorApp = new EditorApp();
        editorApp.launch();

        return () => {
            editorApp.exit();
        }
    });

    useEffect(() => {
        const reactionDisposer = reaction(
            () => store.code,
            async (code) => {
                await startBuildServer();
                const result = await transformCode(code);
                store.compileCode = result.code
                globalMsg.dispatchEvent(EventMessage.CODE_COMPILED, result.code);
            },
            { fireImmediately: true }
        );
        return () => {
            reactionDisposer();
        }
    }, []);

    return <div className="app">
        <Docker/>
    </div>;
}

export default App;
