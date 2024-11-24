import { GLTFLoader, OrbitControls, RoomEnvironment } from "three-stdlib";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
    ACESFilmicToneMapping, Mesh, MeshBasicMaterial, MeshStandardMaterial,
    PCFSoftShadowMap,
    PerspectiveCamera, PlaneGeometry,
    Scene, SpotLight, SpotLightHelper, SRGBColorSpace,
    WebGLRenderer
} from "three";

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
        renderer.toneMappingExposure = 2;

        const scene = new Scene();

        const camera = new PerspectiveCamera(85, width / height, 0.1, 1000);
        camera.position.set(0, 0, 10);

        gltfLoader.load("./model/balloon_boy_poptropica.glb", (gltf) => {
            scene.add(gltf.scene);
            scene.position.set(3, -1, 0)
            gltf.scene.traverse((child) => {
                if (child instanceof Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        });

        const wall = new Mesh(new PlaneGeometry(1, 1), new MeshStandardMaterial({ color: 0xffffff }));
        wall.position.set(0, 0, -10);
        wall.scale.set(100, 100, 100);
        scene.add(wall);
        wall.receiveShadow = true;

        const grand = new Mesh(new PlaneGeometry(1, 1), new MeshStandardMaterial({ color: 0xffffff }));
        grand.position.set(0, -6, 0);
        grand.rotation.x = -Math.PI / 2;
        grand.scale.set(100, 100, 100);
        scene.add(grand);
        grand.receiveShadow = true;

        const spotLight = new SpotLight(0xffffff, 1, 0, 0.314, 1, 0.2);
        spotLight.position.set(-6, 6, 14);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        spotLight.shadow.normalBias = 0.05;
        scene.add(spotLight);

        const helper = new SpotLightHelper(spotLight);
        scene.add(helper);

        renderer.setAnimationLoop(() => {
            spotLight.position.set(
                -6, 6,
                (2 - Math.sin(Date.now() * 0.0005)) * 14,
            );

            helper.update();

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
        className="w-full h-auto absolute inset-0 z-[-1]"
        ref={canvasRef}
    />;

};