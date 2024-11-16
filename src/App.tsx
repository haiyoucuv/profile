import { useEffect, useRef } from "react";
import "./App.less";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import cityGlb from "./assets/lowpoly_city.glb";

const loader = new GLTFLoader();


function App() {

  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      powerPreference: "high-performance",
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const controls = new OrbitControls(camera, canvasRef.current);

    // const ambLight = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(ambLight);

    const light = new THREE.DirectionalLight(0xffffff, 10);
    light.castShadow = true;
    light.shadow.intensity = 0.65;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.camera.left = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.right = 100;
    light.shadow.bias = -0.0001;
    light.shadow.mapSize.set(4096, 4096);
    light.position.set( 5, 5, 5 );
    light.shadow.normalBias = 0.05;
    light.shadow.radius = 100;
    light.position.set( 50, 50, 50 );
    scene.add(light);

    camera.position.set(-10, 10, 15);

    const helper = new THREE.CameraHelper( light.shadow.camera );
    scene.add( helper );

    loader.load(cityGlb, (gltf) => {

      gltf.scene.position.set(30, 0, -25);
      scene.add(gltf.scene);
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

    }, undefined, function (error) {

      console.error(error);

    });


    function animate() {
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div className="app">
    <canvas className="gameCanvas" ref={canvasRef} />
  </div>;

}

export default App;
