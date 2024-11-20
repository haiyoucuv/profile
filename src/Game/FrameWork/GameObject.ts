import { Object3D } from "three";
import { Component } from "./Component.ts";
import { SafeArray } from "./SafeArray.ts";


export class GameObject {
    readonly transform: Object3D;
    name: string;
    private readonly components: SafeArray<Component> = new SafeArray<Component>();

    constructor(parent: Object3D, name: string) {
        this.name = name;
        this.transform = new Object3D();
        parent.add(this.transform);
    }

    addComponent<T extends Component>(ComponentCls: Constructor<T>): T {
        const component = new ComponentCls(this);
        this.components.add(component);
        return component;
    }

    removeComponent(component) {
        component.gameObject = null;
        this.components.remove(component);
    }

    getComponent(ComponentType) {
        return this.components.find(c => c instanceof ComponentType);
    }

    update(dt: number) {
        this.components.forEach((component) => {
            component.update(dt);
        });
    }
}