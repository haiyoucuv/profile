import { Object3D } from "three";
import { Component } from "./Component.ts";
import { SafeArray } from "./SafeArray.ts";


export class GameObject extends Object3D {

    private readonly components: SafeArray<Component> = new SafeArray<Component>();

    addComponent<T extends Component>(ComponentCls: Constructor<T>, ...args): T {
        const component = new ComponentCls(this, ...args);
        this.components.add(component);
        return component;
    }

    removeComponent(component: Component) {
        component.gameObject = null;
        this.components.remove(component);
    }

    getComponent<T extends Component>(ComponentType: Constructor<T>): T {
        return this.components.find(c => c instanceof ComponentType) as T;
    }

    onUpdate(dt: number) {
        this.components.forEach((component: Component) => {
            component.onUpdate(dt);
        });
    }
}