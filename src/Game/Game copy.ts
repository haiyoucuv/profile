import {
    ACESFilmicToneMapping,
    BoxGeometry,
    Clock,
    Group,
    Mesh,
    MeshStandardMaterial,
    PCFSoftShadowMap,
    PerspectiveCamera,
    PlaneGeometry,
    Raycaster,
    RepeatWrapping,
    Scene,
    SRGBColorSpace,
    TextureLoader,
    Vector2,
    Vector3,
    WebGLRenderer,
} from "three";
import { FBXLoader, GLTFLoader } from "three-stdlib";

import mapGlb from "../assets/my_stardew_valley_farm.glb";
import { NavigationSystem } from "./NavigationSystem";
import { ThirdPersonCamera } from "./ThirdCamera";
import {
    EffectPass,
    EffectComposer,
    RenderPass,
    BlendFunction,
    FXAAEffect,
    OverrideMaterialManager,
    OutlineEffect,
} from "postprocessing";
import { calculateVerticalFoV } from "../utils/CameraUtils";

import { Water } from "three-stdlib";

import waterNormal from "../assets/textures/waternormals.png";
import { TimeSystem } from "./systems/TimeSystem";
import { SkyLightingSystem } from "./systems/SkyLightingSystem";
import GUI from "lil-gui";
import { GameObjectManager } from "./FrameWork/GameObjectManager.ts";

const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();
const textureLoader = new TextureLoader();


const gameObjectManager = new GameObjectManager();

export class Game {

    private composer: EffectComposer;

    canvas: HTMLCanvasElement;

    renderer: WebGLRenderer;

    scene: Scene;
    camera: PerspectiveCamera;

    thirdCamera: ThirdPersonCamera;

    mapScene: Group;

    player: Mesh;
    navigationSystem: NavigationSystem;
    clock: Clock = new Clock(true);

    outlineEffect: OutlineEffect;

    water: Water;

    skyLightingSystem: SkyLightingSystem;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        // this.start();
    }

    async start() {

        TimeSystem.ins.setTimeScale(100);

        this.initScene();

        this.initPostProcessing();

        await this.addMap();

        this.outlineEffect.selection.add(this.player);

        this.navigationSystem = new NavigationSystem(this.scene);
        await this.navigationSystem.init(this.mapScene);

        const initialPosition = this.navigationSystem.getRandomPosition();
        this.navigationSystem.addPlayer(initialPosition);

        this.renderer.setAnimationLoop(this.onUpdate);

        this.onResize();
        window.addEventListener("resize", this.onResize);
        this.canvas.addEventListener("mousedown", this.onMouseDown);

        this.debugUI();
    }

    debugUI() {

        const timeData = TimeSystem.ins.getTimeData();
        console.log(timeData);

        const gui = new GUI();
        const timeFolder = gui.addFolder("Time");
        timeFolder.add(TimeSystem.ins, "hour", 0, 23).onChange((value: number) => {
            TimeSystem.ins.setTime(value, timeData.minute, timeData.seconds);
        });
        timeFolder.add(TimeSystem.ins, "minute", 0, 59).onChange((value: number) => {
            TimeSystem.ins.setTime(timeData.hour, value, timeData.seconds);
        });

        timeFolder.add(TimeSystem.ins, "seconds", 0, 59).onChange((value) => {
            TimeSystem.ins.setTime(timeData.hour, timeData.minute, value);
        });

        timeFolder.add(TimeSystem.ins, "timeScale", 0, 5000).onChange((value: number) => {
            TimeSystem.ins.setTimeScale(value);
        });

        timeFolder.open();


    }

    onMouseDown = (() => {
        const rayCaster = new Raycaster();
        rayCaster.firstHitOnly = true;
        const mouse = new Vector2();
        return (event: MouseEvent) => {
            if (event.button !== 2) return;

            const { clientX, clientY } = event;
            const canvasRect = this.canvas.getBoundingClientRect();

            mouse.x = ((clientX - canvasRect.left) / this.canvas.offsetWidth) * 2 - 1;
            mouse.y = -((clientY - canvasRect.top) / this.canvas.offsetHeight) * 2 + 1;

            rayCaster.setFromCamera(mouse, this.camera);
            console.time("raycast");
            const intersects = rayCaster.intersectObject(this.mapScene);
            console.timeEnd("raycast");

            if (intersects.length > 0) {
                const point = intersects[0].point;
                this.navigationSystem.movePlayerTo(point);
            }
        };
    })();

    onResize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.camera.aspect = window.innerWidth / window.innerHeight;
        const vFoV = calculateVerticalFoV(90, Math.max(this.camera.aspect, 16 / 9));
        this.camera.fov = vFoV;
        this.camera.updateProjectionMatrix();

        // 更新后处理尺寸
        this.composer.setSize(window.innerWidth, window.innerHeight);
    };

    initPostProcessing() {

        const { scene, camera, renderer } = this;

        // 创建后处理合成器
        const composer = this.composer = new EffectComposer(renderer);

        composer.addPass(new RenderPass(scene, camera));
        // composer.addPass(new EffectPass(camera, new BloomEffect({
        //   intensity: 3,
        //   radius: 0.85,
        //   luminanceThreshold: 0.8,
        //   luminanceSmoothing: 0.4,
        // })));

        OverrideMaterialManager.workaroundEnabled = true;
        const outlineEffect = this.outlineEffect = new OutlineEffect(scene, camera, {
            blendFunction: BlendFunction.SCREEN,
            edgeStrength: 8,
            visibleEdgeColor: 0x000000,
            hiddenEdgeColor: 0xff00ff,
            xRay: true,
        });
        composer.addPass(new EffectPass(camera, outlineEffect));

        // composer.addPass(new EffectPass(camera, new FXAAEffect({ blendFunction: BlendFunction.NORMAL })));
        composer.addPass(new EffectPass(camera, new FXAAEffect({ blendFunction: BlendFunction.NORMAL })));

    }

    initScene() {

        this.scene = new Scene();

        const aspect = window.innerWidth / window.innerHeight;
        const vFoV = calculateVerticalFoV(90, Math.max(aspect, 16 / 9));

        this.camera = new PerspectiveCamera(vFoV, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: false,
            logarithmicDepthBuffer: false,
        });

        renderer.setClearColor(0xffffff);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = PCFSoftShadowMap;

        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.5;

        this.player = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial());
        this.player.castShadow = true;
        this.player.receiveShadow = true;
        this.scene.add(this.player);

        this.thirdCamera = new ThirdPersonCamera(
            this.camera, this.player, this.canvas,
            {
                maxDistance: 100,
            }
        );

        const waterGeometry = new PlaneGeometry(10000, 10000);

        const water = this.water = new Water(
            waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: textureLoader.load(waterNormal, function (texture) {
                    texture.wrapS = texture.wrapT = RepeatWrapping;
                }),
                sunDirection: new Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
                fog: this.scene.fog !== undefined
            }
        );

        water.rotation.x = -Math.PI / 2;

        this.scene.add(water);

        this.skyLightingSystem = new SkyLightingSystem(
            this.scene,
            this.renderer,
            {
                shadows: true,
                shadowMapSize: 4096,
                debug: process.env.NODE_ENV === "development"
            }
        );

        this.skyLightingSystem.setWater(this.water);
    }


    async addMap() {
        const cityGltf = await gltfLoader.loadAsync(mapGlb);

        this.mapScene = cityGltf.scene;
        this.mapScene.scale.set(5, 5, 5);
        this.scene.add(cityGltf.scene);

        cityGltf.scene.traverse((child) => {
            if (child instanceof Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

    }

    onUpdate = () => {
        const dt = this.clock.getDelta();
        this.composer.render();


        this.navigationSystem?.update(dt);

        if (this.navigationSystem?.getPlayerPosition()) {
            this.player.position.copy(this.navigationSystem.getPlayerPosition());
        }

        this.thirdCamera.update();

        this.water.material.uniforms["time"].value += dt;

        TimeSystem.ins.update(dt);

        gameObjectManager.update(dt);

    };

    destroy() {
        window.removeEventListener("resize", this.onResize);
        this.canvas.removeEventListener("mousedown", this.onMouseDown);
        this.renderer.dispose();
        this.navigationSystem?.dispose();
        this.skyLightingSystem?.dispose();
    }

}