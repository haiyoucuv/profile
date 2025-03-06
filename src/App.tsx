import React, { useEffect, useRef, useState } from "react";

import "./App.less";

import 'luna-window/luna-window.css'
import LunaWindow from 'luna-window/luna-window.js'
import {createRoot} from "react-dom/client";

import * as THREE from 'three';

import esbuild from 'esbuild-wasm';

import esbuildWasm from 'esbuild-wasm/esbuild.wasm?url';


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

async function TestEsBuild() {
    await esbuild.initialize({
        wasmURL: esbuildWasm,
    })
    const ts = `
         function App() {
            return <div>Hello World</div>
        }
        
        ReactDomClient.createRoot(document.getElementById('root')!).render(
            <App />
        )
    `
    const result = await esbuild.transform(ts, {loader: 'tsx'})
    esbuild.stop();
    return result;
}



function App() {

    useEffect(() => {
        const iframe = document.createElement("iframe");
        const win = new LunaWindow({
            title: 'Window Title',
            x: 50,
            y: 50,
            width: 800,
            height: 600,
            content: iframe,
        })
        win.show();

        TestEsBuild().then((result) => {
            iframe.srcdoc = `
                <!DOCTYPE html>
                <html lang="zh">
                <head>
                    <meta charset="UTF-8">
                    <title>Document</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script>
                        window.React = top.React;
                        window.ReactDomClient = top.ReactDomClient;
                        ${result.code}
                    </script>
                </body>
                </html>
            `;
        });

        // const div = document.createElement("div");
        // createRoot(div).render(<TestThreeJs/>)

        return () => {
            win.destroy();
        }

    }, []);

    return <div className="relative z-0">

    </div>;
}

export default App;
