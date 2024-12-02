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
    AmbientLight,
    MathUtils,
    MeshStandardMaterial,
    SphereGeometry,
    TorusGeometry,
    ConeGeometry,
    OctahedronGeometry,
    CapsuleGeometry,
    IcosahedronGeometry,
} from "three";

import { FontLoader, TextGeometry, RoomEnvironment, OrbitControls } from "three-stdlib";

import fontData from "./Atop_Regular.json";
import { calculateVerticalFoV } from "../../utils/CameraUtils.ts";

export class IntroWorld {

    canvas: HTMLCanvasElement;
    renderer: WebGLRenderer;
    camera: PerspectiveCamera;
    scene: Scene;

    async init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const renderer = this.renderer = new WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance",
            // logarithmicDepthBuffer: true,
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


        this.camera = new PerspectiveCamera(45, 16 / 9, 0.1, 1000);
        this.camera.position.set(0, 0, 50);

        this.scene = new Scene();

        const pmremGenerator = new PMREMGenerator(renderer);
        this.scene.environment = pmremGenerator.fromScene(RoomEnvironment(), 0.04).texture;

        const aLight = new AmbientLight(0xffffff, 1);
        this.scene.add(aLight);

        // const dLight = new DirectionalLight(0xffffff, 1);
        // dLight.position.set(1, 1, 1);
        // this.scene.add(dLight);

        const font = new FontLoader().parse(fontData as any);

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

        const size = 5;
        const textGeo = new TextGeometry("Haiyoucuv", {
            font: font,
            size,
            height: 0.5,
            bevelThickness: 0.5,
            bevelSize: 0.1,
            bevelEnabled: true,
            curveSegments: 112,
        });
        textGeo.computeBoundingBox();

        const edge = textGeo.boundingBox.max.clone()
            .sub(textGeo.boundingBox.min)
            .multiplyScalar(0.5);

        const textMesh = new Mesh(textGeo, glassMaterial);
        textMesh.position.copy(edge.clone().multiplyScalar(-1));
        textMesh.rotation.set(-0.25, -0.25, 0);

        this.scene.add(textMesh);

        const COLORS = [
            "#FFD700",
            "#CA90FF",
            "#1EA7FD",
            "#FF6347",
            "#37D5D3",
            "#90EE90",
        ];

        const BLOCK_TYPES = [
            new SphereGeometry(1, 32, 32),
            new TorusGeometry(1, 0.25, 16, 32),
            new ConeGeometry(1, 1.5, 32),
            new OctahedronGeometry(1, 0),
            new CapsuleGeometry(1, 1, 4, 8),
            new IcosahedronGeometry(1, 0),
        ];

        new Array(30).fill(1).map(() => {
            const mesh = new Mesh(
                BLOCK_TYPES[BLOCK_TYPES.length * Math.random() >> 0],
                new MeshStandardMaterial({
                    color: COLORS[COLORS.length * Math.random() >> 0],
                }),
            );
            this.scene.add(mesh);
            mesh.position.set(
                MathUtils.randFloat(-(edge.x + 1), (edge.x + 1)),
                MathUtils.randFloat(-(edge.y + 15), (edge.y + 15)),
                MathUtils.randFloat(-(edge.z + 10), (edge.z + 10)),
            );
            mesh.rotation.set(
                MathUtils.randFloat(0, Math.PI * 2),
                MathUtils.randFloat(0, Math.PI * 2),
                MathUtils.randFloat(0, Math.PI * 2),
            );
        });

        const ctrl = new OrbitControls(this.camera, this.canvas);
        // ctrl.minAzimuthAngle = -Math.PI / 3;
        // ctrl.maxAzimuthAngle = Math.PI / 3;
        // ctrl.minPolarAngle = -Math.PI / 4 * 3;
        // ctrl.maxPolarAngle = Math.PI / 4 * 3;

        this.onResize();
        window.addEventListener("resize", this.onResize);

        renderer.setAnimationLoop(this.onUpdate);

    }


    onUpdate = () => {
        const { scene, camera } = this;
        this.renderer.render(scene, camera);
    };


    onResize = () => {
        const { clientWidth: width, clientHeight: height } = this.canvas.parentElement;

        this.renderer.setSize(width, height);

        const aspect = width / height;
        this.camera.aspect = aspect;
        this.camera.fov = calculateVerticalFoV(50, aspect);
        this.camera.updateProjectionMatrix();

    };


    destroy() {
        this.renderer.dispose();
    }

}