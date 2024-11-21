import { System } from "../FrameWork/Systems/System.ts";
import { Camera } from "three";


export class CameraSystem extends System {

    static _ins: CameraSystem;
    static get ins(): CameraSystem {
        if (!CameraSystem._ins) {
            CameraSystem._ins = new CameraSystem();
        }
        return CameraSystem._ins;
    }

    private constructor() {
        super();
    }

    camera: Camera;

    setCamera(camera: Camera) {
        this.camera = camera;
    }

    onUpdate(dt: number): void {
    }
}