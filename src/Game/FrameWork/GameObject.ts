import { Object3D } from "three";
import { Component } from "./Component.ts";

function removeArrayElement(array, element) {
    const ndx = array.indexOf(element);
    if (ndx >= 0) {
        array.splice(ndx, 1);
    }
}

export class GameObject {
    readonly transform: Object3D;
    name: string;
    private readonly components: Component[];

    constructor(parent: Object3D, name: string) {
        this.name = name;
        this.components = [];
        this.transform = new Object3D();
        parent.add(this.transform);
    }

    addComponent(ComponentType, ...args) {
        const component = new ComponentType(this, ...args);
        this.components.push(component);
        return component;
    }

    removeComponent(component) {
        removeArrayElement(this.components, component);
    }

    getComponent(ComponentType) {
        return this.components.find(c => c instanceof ComponentType);
    }

    update(dt: number) {
        for (const component of this.components) {
            component.update(dt);
        }
    }
}