import { GLTFLoader, RoomEnvironment } from "three-stdlib";
import {useEffect, useRef } from "react";
import {
    ACESFilmicToneMapping,
    PCFSoftShadowMap,
    PerspectiveCamera,
    PMREMGenerator,
    Scene, SRGBColorSpace,
    WebGLRenderer
} from "three";
import { ThirdPersonCamera } from "../Game/ThirdCamera.ts";
import { calculateHorizontalFoV } from "../utils/CameraUtils.ts";

const gltfLoader = new GLTFLoader();

export const IntroCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;

        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const renderer = new WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance",
            canvas,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = PCFSoftShadowMap;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.5;

        const scene = new Scene();

        const camera = new PerspectiveCamera(25, width / height, 0.1, 1000);
        // camera.position.set(0, 10, 40);

        gltfLoader.load("./desktop_pc/scene.gltf", (gltf) => {
            scene.add(gltf.scene);
            gltf.scene.position.set(0.5, -2.5, -1.5);
        });

        const pmremGenerator = new PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(RoomEnvironment(), 0.04).texture;

        const cameraCtrl = new ThirdPersonCamera(camera, scene, canvas, {
            maxDistance: 50,
            maxRotationY: 130,
            minRotationY: 50,
            zoomSpeed: 5,
        });

        renderer.setAnimationLoop(() => {
            cameraCtrl.update();
            renderer.render(scene, camera);
        });


        const onResize =() => {
            const canvas = canvasRef.current!;

            const { clientWidth: width, clientHeight: height } = canvas.parentElement;

            const aspect = width / height;
            const vFoV = calculateHorizontalFoV(20, Math.max(aspect, 16 / 9));

            renderer.setSize(width, height);
            camera.aspect = aspect;
            camera.fov = vFoV;
            camera.updateProjectionMatrix();

        }

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