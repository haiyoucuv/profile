import React, { useEffect, useRef } from "react";

import "./App.less";

import 'luna-window/luna-window.css'
import LunaWindow from 'luna-window/luna-window.js'

import * as THREE from 'three';

import template from './buider/templete.html?raw';

function TestThreeJs() {


    const divRef = useRef(null);


    useEffect(() => {

        const canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 600;

        divRef.current!.appendChild(canvas);

        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(800, 600);
        renderer.setClearColor(0x000000, 1);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 10);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
        return () => {
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        }

    }, []);

    return <div ref={divRef}>
    </div>
}
import { createRoot } from "react-dom/client";

import {Editor} from "./editor/Editor";
import {reaction} from "mobx";
import store from "./store/store.ts";
import {transformCode, startBuildServer} from "./buider/buider.ts";

function App() {

    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = document.createElement("iframe");
        iframe.style.border = "none";
        iframe.srcdoc = template;
        iframeRef.current = iframe;
        const iframeWin = new LunaWindow({
            title: 'Preview',
            x: 850, y: 30,
            width: 375, height: 812,
            content: iframe,
        })
        iframeWin.show();

        window.addEventListener('message', handleMessage);

        return () => {
            iframeWin.destroy();
            window.removeEventListener('message', handleMessage);
        }

    }, []);

    useEffect(() => {
        const editorWin = new LunaWindow({
            title: 'Code',
            x: 30, y: 30,
            width: 800, height: 600,
            content: "",
        })
        editorWin.show();
        createRoot(editorWin.$body[0]).render(<Editor/>)
        return () => {
            editorWin.destroy();
        }
    }, []);

    const handleMessage = (e) => {
        if (e.data?.type === 'PREVIEW_LOADED') {
            const script = iframeRef.current.contentWindow.document.createElement("script");
            script.type = "module";
            script.text = store.compileCode;
            iframeRef.current.contentWindow.document.body.appendChild(script);
        }
    }

    useEffect(() => {
        const reactionDisposer = reaction(
            () => store.code,
            async (code) => {
                await startBuildServer();
                const result = await transformCode(code);
                store.compileCode = result.code;
            },
            {fireImmediately: true}
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
            {fireImmediately: true}
        );
        return () => {
            reactionDisposer();
        }
    }, []);


    return <div>

    </div>;
}

export default App;
