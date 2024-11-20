import { Component } from "../Component";
import { Material, Mesh, BufferGeometry } from "three";
import { GameObject } from "../GameObject";

export class RenderComponent extends Component {
    type = "render";
    mesh: Mesh;

    constructor(gameObject: GameObject, geometry: BufferGeometry, material: Material) {
        super(gameObject);
        this.mesh = new Mesh(geometry, material);
        this.gameObject.node.add(this.mesh);
    }

    onLoad(): void {
        
    }

    onDestroy() {
        this.mesh.geometry.dispose();
        if (Array.isArray(this.mesh.material)) {
            this.mesh.material.forEach(mat => mat.dispose());
        } else {
            this.mesh.material.dispose();
        }
        this.mesh.removeFromParent();
    }
} 