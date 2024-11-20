import { GameObject } from "./GameObject.ts";

// Base for all components
export class Component {
    private gameObject: GameObject;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }

    update(dt: number) {
    }

}