import { Object3D } from "three";
import { Component } from "./Component.ts";
import { SafeArray } from "./SafeArray.ts";


export class GameObject<T extends Object3D = Object3D> {
    readonly node: T;
    name: string;
    private readonly components: SafeArray<Component> = new SafeArray<Component>();

    constructor(transform: T, name: string = "GameObject") {
        this.name = name;
        this.node = transform;
    }

    addComponent<T extends Component>(ComponentCls: Constructor<T>, ...args): T {
        const component = new ComponentCls(this, ...args);
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

    onUpdate(dt: number) {
        this.components.forEach((component: Component) => {
            component.onUpdate(dt);
        });
    }
}