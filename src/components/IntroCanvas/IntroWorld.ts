import { Application, Assets, Container, ResizePlugin } from "pixi.js";
import { Bodies, Composite, Engine, Render, Runner } from "matter-js";
import { Bulb } from "./Bulb.ts";
import bulbSvg from "../../assets/bulb.svg";


export class IntroWorld {

    canvas: HTMLCanvasElement;
    debugCanvas: HTMLCanvasElement;
    app: Application;
    root: Container;

    engine: Engine;
    engineRender: Render;

    FIXED_WIDTH = 1000;

    async init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        await this.initApp();
        this.initPhysics();


        const bulb = new Bulb();
        bulb.position.set(500, 500);
        this.root.addChild(bulb);

        Composite.add(this.engine.world, [bulb.body]);



        this.onResize();
        window.addEventListener("resize", this.onResize);
    }


    initApp = async () => {
        const { canvas } = this;
        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const aspectRatio = height / width;
        const renderHeight = this.FIXED_WIDTH * aspectRatio;

        const app = this.app = new Application();
        await app.init({
            canvas: canvas,
            // resizeTo: canvas,
            backgroundAlpha: 0,
            width: this.FIXED_WIDTH,
            height: renderHeight,
            resolution: window.devicePixelRatio || 1,
            preference: "webgl",
            webgl: {
                // preserveDrawingBuffer: true,
                antialias: true,
            },
            eventMode: "static",
            // resizeTo: canvas.parentElement,
        });

        await Assets.load(bulbSvg);

        this.root = new Container();
        app.stage.addChild(this.root);
        app.ticker.add(this.onUpdate);
    };

    onUpdate = () => {
        // this.app.renderer.render(this.app.stage);
    };


    onResize = () => {
        const { canvas } = this;
        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const aspectRatio = height / width;
        const renderHeight = this.FIXED_WIDTH * aspectRatio;
        this.app.renderer.resize(this.FIXED_WIDTH, renderHeight);
        this.root.y = -(1000-renderHeight);

        this.debugCanvas.width = this.canvas.width;
        this.debugCanvas.height = this.canvas.height;

        Render.lookAt(this.engineRender, {
            min: { x: 0, y: (1000-renderHeight) },
            max: { x: 1000, y: 1000 },
        })

        // 更新舞台缩放
        // this.updateStageScale();
    };

    initPhysics = () => {
        const debugCanvas = this.debugCanvas = document.createElement("canvas");
        debugCanvas.className = "w-full h-full pointer-events-none absolute top-0 left-0 z-10";
        this.canvas.parentElement.appendChild(debugCanvas);

        this.engine = Engine.create();
        this.engineRender = Render.create({
            canvas: debugCanvas,
            engine: this.engine,
            options: {
                width: this.canvas.width,
                height: this.canvas.height,
                wireframeBackground: "transparent",
            },
        });

        const ground = Bodies.rectangle(500, 1000, 1000, 10, { isStatic: true });

        Composite.add(this.engine.world, [ground]);

        Render.run(this.engineRender);

        const runner = Runner.create();
        Runner.run(runner, this.engine);

    };

    destroy() {
        // this.app.destroy();
        this.debugCanvas.remove();
    }

}