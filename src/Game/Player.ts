import { Component } from "./FrameWork/Component.ts";
import { GameObject } from "./FrameWork/GameObject.ts";

export class Player extends Component {
    constructor(gameObject: GameObject) {
        super(gameObject);

    }
}