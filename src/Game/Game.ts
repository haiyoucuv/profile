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
import { CameraComponent } from "./FrameWork/Components/CameraComponent.ts";

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

        const player = new GameObject();
        World.ins.scene.add(player);
        player.addComponent(RenderComponent, new BoxGeometry(), new MeshStandardMaterial());
        World.ins.addGameObject(player);

        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        World.ins.scene.add(light);

        const camera = new GameObject();
        camera.addComponent(CameraComponent);
        camera.addComponent(ThirdPersonCamera, player, this.canvas, {
            maxDistance: 100,
            initialDistance: 10,
        });
        // World.ins.scene.add(camera);
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

        const map = new GameObject();
        map.add(cityGltf.scene);
        World.ins.scene.add(map);
        World.ins.addGameObject(map);

        console.log(World.ins.scene);

    }


    destroy() {
    }

}