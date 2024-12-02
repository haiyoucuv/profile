import { useEffect, useRef } from "react";

import { IntroWorld } from "./IntroWorld.ts";
import avatarGlb from "../../assets/model/avatar_1732550465388.glb";

import { FontLoader, TextGeometry, RoomEnvironment, createText, Font } from "three-stdlib";
import {
    ACESFilmicToneMapping,
    PCFSoftShadowMap,
    PerspectiveCamera,
    PMREMGenerator,
    Scene,
    MeshPhysicalMaterial,
    SRGBColorSpace,
    WebGLRenderer,
    Mesh,
    DirectionalLight,
} from "three";


import fontData from "./Atop_Regular.json";

export const IntroCanvas = () => {

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

        const pmremGenerator = new PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(RoomEnvironment(), 0.04).texture;


        const font = new FontLoader().parse(fontData as any);

        const material = new MeshPhysicalMaterial({
            color: "#00AEEC",
            transmission: 0.3,
            ior: 1.2,
            thickness: 20,
            roughness: 1,
            clearcoat: 1,
            clearcoatRoughness: 1,
        });

        // 玻璃质感
        const glassMaterial = new MeshPhysicalMaterial({
            thickness: 20,
            clearcoat: 1,
            clearcoatRoughness: 1,
            roughness: 0.1,
            transmission: 0.5,
            ior: 1.5,
            color: "#00AEEC",
        });

        // 金属质感
        const metalMaterial = new MeshPhysicalMaterial({
            thickness: 20,
            clearcoat: 1,
            clearcoatRoughness: 1,
            transmission: 0.3,
            color: "#00AEEC",
            roughness: 0.5,
            metalness: 1,
        });

        // 塑胶质感
        const plasticsMaterial = new MeshPhysicalMaterial({
            thickness: 20,
            clearcoat: 1,
            clearcoatRoughness: 1,
            color: "#00AEEC",
            roughness: 1,
            metalness: 0,
        });

        const textGeo = new TextGeometry("Haiyoucuv", {
            font: font,
            size: 5,
            height: 5,
            curveSegments: 6,
            bevelThickness: 0.5,
            bevelSize: 0.1,
            bevelEnabled: true
        });
        textGeo.computeBoundingBox();
        const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
        const textMesh1 = new Mesh(textGeo, metalMaterial);

        textMesh1.position.set(centerOffset, 0, -60);
        textMesh1.rotation.x = 0;
        textMesh1.rotation.y = Math.PI * 2;

        scene.add(textMesh1);

        const dLight = new DirectionalLight(0xffffff, 1);
        dLight.position.set(1, 1, 1);
        scene.add(dLight);


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


    return <canvas
        className="w-full h-full pointer-events-auto"
        ref={canvasRef}
    />;

};