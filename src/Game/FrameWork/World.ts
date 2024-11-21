import { ACESFilmicToneMapping, PCFSoftShadowMap, Scene, SRGBColorSpace, WebGLRenderer } from "three";
import { SafeArray } from "./SafeArray";
import { GameObject } from "./GameObject";
import { System } from "./Systems/System";
import { CameraSystem } from "../systems/CameraSystem.ts";

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

        this.renderer.setAnimationLoop(this.onUpdate);
    }

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

        const camera = CameraSystem.ins.camera;
        if (!camera) return;
        this.renderer.render(this.scene, camera);
    }

    getScene(): Scene {
        return this.scene;
    }
} 