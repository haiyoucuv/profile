import React, { useEffect, useRef } from "react";

import "./App.less";

import template from './templete/templete.html?raw';

import { Editor } from "./editor/Editor";
import { reaction } from "mobx";
import store from "./store/store.ts";
import { transformCode, startBuildServer } from "./buider/buider.ts";

import { Docker, WindowManager } from './components/WindowWrapper';
import { createRoot } from "react-dom/client";

function App() {


    useEffect(() => {
        const codeWindow = WindowManager.ins.showWindow("", {
            title: "Code",
            x: 50, y: 50,
            width: 900, height: 750,
        });

        const editorRoot = createRoot(codeWindow.content);
        editorRoot.render(<Editor/>);

        return () => {
            WindowManager.ins.closeWindow(codeWindow);
            editorRoot.unmount();
        }
    });

    useEffect(() => {
        const iframe = document.createElement("iframe");
        const iframeWindow = WindowManager.ins.showWindow(iframe, {
            title: "Render",
            x: 880, y: 130,
            width: 375, height: 812,
        });

        const handleMessage = (e) => {
            if (e.data?.type === 'PREVIEW_LOADED') {
                const script = iframe.contentWindow.document.createElement("script");
                script.type = "module";
                script.text = store.compileCode;
                iframe.contentWindow.document.body.appendChild(script);
            }
        }

        iframe.srcdoc = template;
        window.addEventListener('message', handleMessage);

        const reactionDisposer = reaction(
            () => store.compileCode,
            (code) => {
                iframe.contentWindow.location.reload();
            },
            // { fireImmediately: true }
        );

        return () => {
            WindowManager.ins.closeWindow(iframeWindow);
            window.removeEventListener('message', handleMessage);
            reactionDisposer();
        }
    });

    useEffect(() => {
        const reactionDisposer = reaction(
            () => store.code,
            async (code) => {
                await startBuildServer();
                const result = await transformCode(code);
                store.compileCode = result.code;
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
