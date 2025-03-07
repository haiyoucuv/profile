import React, { useEffect, useRef } from "react";

import "./App.less";

import 'luna-window/luna-window.css'
import LunaWindow from 'luna-window/luna-window.js'

import template from './templete/templete.html?raw';

import { createRoot } from "react-dom/client";

import {Editor} from "./editor/Editor";
import {reaction} from "mobx";
import store from "./store/store.ts";
import {transformCode, startBuildServer} from "./buider/buider.ts";

import Window from './components/Window/Window';

function App() {

    const iframeRef = useRef<HTMLIFrameElement>(null);

    // useEffect(() => {
    //     const iframe = document.createElement("iframe");
    //     iframe.style.border = "none";
    //     iframe.srcdoc = template;
    //     iframeRef.current = iframe;
    //     const iframeWin = new LunaWindow({
    //         title: 'Preview',
    //         x: 670, y: 130,
    //         width: 375, height: 812,
    //         content: iframe,
    //     })
    //     iframeWin.show();
    //
    //     window.addEventListener('message', handleMessage);
    //
    //     return () => {
    //         iframeWin.destroy();
    //         window.removeEventListener('message', handleMessage);
    //     }
    //
    // }, []);
    //
    // useEffect(() => {
    //     const editorWin = new LunaWindow({
    //         title: 'Code',
    //         x: 10, y: 10,
    //         width: 800, height: 600,
    //         content: "",
    //     })
    //     editorWin.show();
    //     createRoot(editorWin.$body[0]).render(<Editor/>)
    //     return () => {
    //         editorWin.destroy();
    //     }
    // }, []);
    //
    // const handleMessage = (e) => {
    //     if (e.data?.type === 'PREVIEW_LOADED') {
    //         const script = iframeRef.current.contentWindow.document.createElement("script");
    //         script.type = "module";
    //         script.text = store.compileCode;
    //         iframeRef.current.contentWindow.document.body.appendChild(script);
    //     }
    // }
    //
    // useEffect(() => {
    //     const reactionDisposer = reaction(
    //         () => store.code,
    //         async (code) => {
    //             await startBuildServer();
    //             const result = await transformCode(code);
    //             store.compileCode = result.code;
    //         },
    //         {fireImmediately: true}
    //     );
    //     return () => {
    //         reactionDisposer();
    //     }
    // }, []);

    useEffect(() => {
        const reactionDisposer = reaction(
            () => store.compileCode,
            (code) => {
                iframeRef.current?.contentWindow.location.reload();
            },
            {fireImmediately: true}
        );
        return () => {
            reactionDisposer();
        }
    }, []);


    return <div>
        <Window
            title="我的窗口"
            initX={670}
            initY={130}
            initWidth={375}
            initHeight={812}
        >
            <p>这里是窗口内容</p>
        </Window>
    </div>;
}

export default App;
