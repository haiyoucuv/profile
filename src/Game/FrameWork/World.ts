import { ACESFilmicToneMapping, Object3D, PCFSoftShadowMap, PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer } from "three";
import { SafeArray } from "./SafeArray";
import { GameObject } from "./GameObject";
import { System } from "./Systems/System";
import { calculateVerticalFoV } from "../../utils/CameraUtils";

export class World {


    static initialize(canvas: HTMLCanvasElement): World {
        if (!World._ins) {
            World._ins = new World(canvas);
        }
        return World._ins;
    }

    private static _ins: World;


    static get ins(): World {
        if (!World._ins) {
            throw new Error('World must be initialized with a scene first');
        }
        return World._ins;
    }


    private gameObjects: SafeArray<GameObject> = new SafeArray<GameObject>();
    private systems: SafeArray<System> = new SafeArray<System>();

    canvas: HTMLCanvasElement;
    renderer: WebGLRenderer = null;
    scene: Scene;
    camera: PerspectiveCamera;


    private constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.init(canvas);
    }

    init(canvas: HTMLCanvasElement) {
        const renderer = this.renderer = new WebGLRenderer({
            canvas,
            antialias: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: false,
            logarithmicDepthBuffer: false,
        });

        // renderer.setClearColor(0xffffff);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = PCFSoftShadowMap;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.5;

        this.scene = new Scene();

        const aspect = window.innerWidth / window.innerHeight;
        const vFoV = calculateVerticalFoV(90, Math.max(aspect, 16 / 9));
        this.camera = new PerspectiveCamera(vFoV, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer.setAnimationLoop(this.onUpdate);

        this.onResize();
        window.addEventListener("resize", this.onResize);

    }


    onResize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.camera.aspect = window.innerWidth / window.innerHeight;
        const vFoV = calculateVerticalFoV(90, Math.max(this.camera.aspect, 16 / 9));
        this.camera.fov = vFoV;
        this.camera.updateProjectionMatrix();
    };

    addGameObject(gameObject: GameObject) {
        this.gameObjects.add(gameObject);
    }

    addSystem<T extends System>(system: T): T {
        this.systems.add(system);
        // Sort systems by priority
        this.systems.sort((a, b) => b.priority - a.priority);
        return system;
    }

    removeSystem(system: System) {
        this.systems.remove(system);
    }

    onUpdate = (dt: number) => {
        // 更新系统
        this.systems.forEach((system: System) => {
            system.onUpdate(dt);
        });

        // 更新游戏对象
        this.gameObjects.forEach((gameObject: GameObject) => {
            gameObject.onUpdate(dt);
        });

        this.renderer.render(this.scene, this.camera);
    }

    getScene(): Scene {
        return this.scene;
    }
} 