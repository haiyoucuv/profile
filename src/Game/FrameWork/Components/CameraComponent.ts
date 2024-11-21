import { PerspectiveCamera } from "three";
import { Component } from "../Component";
import { GameObject } from "../GameObject";
import { CameraSystem } from "../../systems/CameraSystem.ts";

export interface ICameraConfig {
    near?: number;
    far?: number;
    fov?: number;
    aspect?: number;
}

export class CameraComponent extends Component {
    type: string = "ThirdPersonCamera";

    readonly camera: PerspectiveCamera;

    constructor(gameObject: GameObject, config: ICameraConfig = {}) {
        super(gameObject);

        const {
            near = 0.1,
            far = 1000,
            fov = 90,
            aspect = window.innerWidth / window.innerHeight,
        } = config;

        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.gameObject.add(this.camera);

        CameraSystem.ins.setCamera(this.camera);

    }

    set fov(fov: number) {
        this.camera.fov = fov;
        this.camera.updateProjectionMatrix();
    }

    get fov() {
        return this.camera.fov;
    }

    set aspect(aspect: number) {
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
    }

    get aspect() {
        return this.camera.aspect;
    }

    set near(near: number) {
        this.camera.near = near;
        this.camera.updateProjectionMatrix();
    }

    get near() {
        return this.camera.near;
    }

    set far(far: number) {
        this.camera.far = far;
        this.camera.updateProjectionMatrix();
    }

    get far() {
        return this.camera.far;
    }


}




