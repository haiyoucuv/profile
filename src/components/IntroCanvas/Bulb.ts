import { Sprite, Container, Assets, Ticker, RAD_TO_DEG } from "pixi.js";
import bulbSvg from "../../assets/bulb.svg";
import { Bodies, Body } from "matter-js";

export class Bulb extends Container {

    body: Body;

    constructor() {
        super();
        this.init();
    }

    async init() {
        const bulbTexture = Assets.get(bulbSvg);
        const bulbSp = new Sprite(bulbTexture);
        this.addChild(bulbSp);
        bulbSp.anchor.set(0.5);

        const circle = Bodies.circle(400, 373, 40);
        const trapezoid = Bodies.trapezoid(400, 428, 22, 68, -1.7);

        this.body = Body.create({
            parts: [circle, trapezoid],
        });
    }

    setPosition(x: number, y: number) {
        Body.setPosition(this.body, { x, y });
    }

    setAngle(angle: number) {
        Body.setAngle(this.body, angle);
    }

    applyPhysics() {
        this.position.set(this.body.position.x, this.body.position.y);
        this.angle = this.body.angle * RAD_TO_DEG;
    }

    onUpdate = (ticker: Ticker) => {
        this.applyPhysics();
    };

}