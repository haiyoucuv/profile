import React, { useEffect, useRef } from "react";

import "./App.less";

import template from './templete/templete.html?raw';

import { Editor } from "./editor/Editor";
import { reaction } from "mobx";
import store from "./store/store.ts";
import { transformCode, startBuildServer } from "./buider/buider.ts";

import { WindowWrapper, Window } from './components/WindowWrapper';

function App() {

    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleMessage = (e) => {
        if (e.data?.type === 'PREVIEW_LOADED') {
            const script = iframeRef.current.contentWindow.document.createElement("script");
            script.type = "module";
            script.text = store.compileCode;
            iframeRef.current.contentWindow.document.body.appendChild(script);
        }
    }

    useEffect(() => {
        iframeRef.current.style.border = "none";
        iframeRef.current.srcdoc = template;
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        }
    }, []);

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

    useEffect(() => {
        const reactionDisposer = reaction(
            () => store.compileCode,
            (code) => {
                iframeRef.current?.contentWindow.location.reload();
            },
            { fireImmediately: true }
        );
        return () => {
            reactionDisposer();
        }
    }, []);


    return <div>
        <WindowWrapper>
            <Window
                title="Code"
                initX={50}
                initY={50}
                initWidth={900}
                initHeight={812}
            >
                <Editor/>
            </Window>
            <Window
                title="Render"
                initX={880}
                initY={130}
                initWidth={375}
                initHeight={812}
            >
                <iframe
                    ref={iframeRef}
                    srcDoc={template}
                />
            </Window>
        </WindowWrapper>
    </div>;
}

export default App;
