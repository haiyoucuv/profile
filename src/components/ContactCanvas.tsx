import { GLTFLoader, OrbitControls, RoomEnvironment } from "three-stdlib";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
    ACESFilmicToneMapping, Mesh, MeshBasicMaterial, MeshStandardMaterial,
    PCFSoftShadowMap,
    PerspectiveCamera, PlaneGeometry, PMREMGenerator,
    Scene, SpotLight, SpotLightHelper, SRGBColorSpace,
    WebGLRenderer
} from "three";

import avatarGlb from "../assets/model/avatar_1732550465388.glb";

const gltfLoader = new GLTFLoader();

export const ContactCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;

        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const renderer = new WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance",
            logarithmicDepthBuffer: true,
            canvas,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = PCFSoftShadowMap;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;

        const scene = new Scene();

        const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 4);

        gltfLoader.load(avatarGlb, (gltf) => {
            scene.add(gltf.scene);
            gltf.scene.position.set(0, -1, 0);
            gltf.scene.traverse((child) => {
                if (child instanceof Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        });

        const pmremGenerator = new PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(RoomEnvironment(), 0.04).texture;

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

        const onResize = () => {
            const canvas = canvasRef.current!;
            const { clientWidth: width, clientHeight: height } = canvas.parentElement;

            const aspect = width / height;
            renderer.setSize(width, height);
            camera.aspect = aspect;
            camera.updateProjectionMatrix();
        };

        onResize();
        window.addEventListener("resize", onResize);

        return () => {
            renderer.dispose();
            scene.clear();
            renderer.setAnimationLoop(null);
        };

    }, [canvasRef]);

    return <canvas className="w-full h-full" ref={canvasRef} />;

};