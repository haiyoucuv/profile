import { SafeArray } from "./SafeArray.ts";
import { GameObject } from "./GameObject.ts";
import { Object3D } from "three";

export class GameObjectManager {
    private gameObjects: SafeArray<GameObject>;

    constructor() {
        this.gameObjects = new SafeArray<GameObject>();
    }

    createGameObject(parent: Object3D, name: string) {
        const gameObject = new GameObject(parent, name);
        this.gameObjects.add(gameObject);
        return gameObject;
    }

    removeGameObject(gameObject: GameObject) {
        this.gameObjects.remove(gameObject);
    }

    update(dt: number) {
        this.gameObjects.forEach((gameObject: GameObject) => gameObject.update(dt));
    }
}