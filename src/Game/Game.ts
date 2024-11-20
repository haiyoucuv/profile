import {
    BoxGeometry,
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    PerspectiveCamera,
    TextureLoader,
} from "three";
import { FBXLoader, GLTFLoader } from "three-stdlib";

import mapGlb from "../assets/my_stardew_valley_farm.glb";

import { TimeSystem } from "./systems/TimeSystem";
import { World } from "./FrameWork/World.ts";
import { RenderComponent } from "./FrameWork/Components/RenderComponent.ts";
import { GameObject } from "./FrameWork/GameObject.ts";
import { ThirdPersonCamera } from "./FrameWork/Components/ThirdPersonCamera.ts";

const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();
const textureLoader = new TextureLoader();


export class Game {
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    async start() {

        TimeSystem.ins.setTimeScale(100);

        World.initialize(this.canvas);


        const player = new GameObject(new Object3D());
        World.ins.scene.add(player.node);
        player.addComponent(RenderComponent, new BoxGeometry(), new MeshStandardMaterial());
        World.ins.addGameObject(player);

        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        World.ins.scene.add(light);

        World.ins.camera.position.set(0, 0, 10);

        const camera = new GameObject<PerspectiveCamera>(World.ins.camera, "camera");
        camera.addComponent(ThirdPersonCamera, player.node, this.canvas, {
            maxDistance: 100,
        });
        World.ins.addGameObject(camera);


        await this.addMap();

    }

    
    async addMap() {
        const cityGltf = await gltfLoader.loadAsync(mapGlb);

        cityGltf.scene.traverse((child) => {
            if (child instanceof Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        const map = new GameObject(cityGltf.scene, "map");
        World.ins.scene.add(map.node);
        World.ins.addGameObject(map);

    }


    destroy() {
    }

}