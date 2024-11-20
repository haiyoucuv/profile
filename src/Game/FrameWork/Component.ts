import { GameObject } from "./GameObject.ts";

export interface IComponent {
    type: string;
    enabled: boolean;
    onLoad?(): void;
    onDestroy?(): void;
    update?(dt: number): void;
}

// Base for all components
export abstract class Component implements IComponent {
    abstract type: string;

    gameObject: GameObject;
    enabled: boolean;

    constructor(
        gameObject: GameObject
    ) {
        this.gameObject = gameObject;
        this.onLoad();
    }

    onLoad() {

    }

    update(dt: number) {

    }

    destroy() {
        this.gameObject.removeComponent(this);
        this.gameObject = null;
    }

    onDestroy() {

    }

}