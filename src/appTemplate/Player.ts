import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from "three";

export class Player extends Group {

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
        // wing.position.y = 0.2;

        const tailGeometry = new BoxGeometry(2, 0.8, 0.8);
        const tail = new Mesh(tailGeometry, mat);
        // tail.position.set(0, 0.4, -1.8);

        this.add(body, wing, tail);
    }

    onUpdate(dTime: number, eTime: number) {
        this.position.z += 10 * dTime;

    }
}
