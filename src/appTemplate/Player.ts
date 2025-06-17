import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from "three";
import { Component } from "./Component.ts";

export class Player extends Component {
    private keysPressed: Record<string, boolean> = {};
    private rolling: boolean = false;

    constructor() {
        super();

        const mat = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.7,
            roughness: 0.2,
        });

        const bodyGeometry = new BoxGeometry(2, 0.5, 4);
        const body = new Mesh(bodyGeometry, mat);

        const wingGeometry = new BoxGeometry(8, 0.2, 2);
        const wing = new Mesh(wingGeometry, mat);
        wing.position.y = 0.2;

        const tailGeometry = new BoxGeometry(2, 0.8, 0.8);
        const tail = new Mesh(tailGeometry, mat);
        tail.position.set(0, 0.4, -1.8);

        this.add(body, wing, tail);
    }

    public handleKeyDown(key: string) {
        this.keysPressed[key] = true;
    }

    public handleKeyUp(key: string) {
        this.keysPressed[key] = false;
    }

    onUpdate(dTime: number, eTime: number) {
        this.position.z += 50 * dTime;

        // a/d 或左右键控制左右移动和翻滚
        this.rolling = false;
        if (this.keysPressed['a'] || this.keysPressed['ArrowLeft']) {
            this.position.x += 50 * dTime;
            this.rotation.z -= 2 * dTime;
            this.rolling = true;
        }
        if (this.keysPressed['d'] || this.keysPressed['ArrowRight']) {
            this.position.x -= 50 * dTime;
            this.rotation.z += 2 * dTime;
            this.rolling = true;
        }
        // w/s 或上下键控制上下移动
        if (this.keysPressed['w'] || this.keysPressed['ArrowUp']) {
            this.position.y += 50 * dTime;
            this.rotation.x -= 2 * dTime;
            this.rolling = true;
        }
        if (this.keysPressed['s'] || this.keysPressed['ArrowDown']) {
            this.position.y -= 50 * dTime;
            this.rotation.x += 2 * dTime;
            this.rolling = true;
        }
        // 松开时自动回正
        if (!this.rolling) {
            this.rotation.z *= 0.98;
            this.rotation.x *= 0.98;
        }
        // 玩家y坐标限制在[1,10]
        this.rotation.x = MathUtils.clamp(this.rotation.x, -Math.PI / 6, Math.PI / 6);
        this.rotation.z = MathUtils.clamp(this.rotation.z, -Math.PI / 6, Math.PI / 6);
        this.position.y = MathUtils.clamp(this.position.y, 5, 100);
    }
}
