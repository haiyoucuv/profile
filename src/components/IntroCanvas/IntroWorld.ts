import { Application, Assets, Sprite, ResizePlugin } from "pixi.js";
import bulbSvg from "../../assets/bulb.svg";
import { Bodies, Composite, Engine, Render, Runner } from "matter-js";

export class IntroWorld {

    canvas: HTMLCanvasElement;
    debugCanvas: HTMLCanvasElement;
    app: Application;

    FIXED_WIDTH = 1000;

    async init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        await this.initApp();
        this.initPhysics();
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


        const bulbTexture = await Assets.load(bulbSvg);
        const bulb = new Sprite(bulbTexture);
        app.stage.addChild(bulb);
        bulb.y = 900;

        app.stage.y = 1000 - renderHeight;

        app.ticker.add(() => {

        });

        this.onResize();
        window.addEventListener("resize", this.onResize);

    };

    onResize = () => {
        const { canvas } = this;
        const { clientWidth: width, clientHeight: height } = canvas.parentElement;

        const aspectRatio = height / width;
        const renderHeight = this.FIXED_WIDTH * aspectRatio;
        this.app.renderer.resize(this.FIXED_WIDTH, renderHeight);
        this.app.stage.y = renderHeight - 1000;

        // 更新舞台缩放
        // this.updateStageScale();
    };

    private updateStageScale() {
        const { clientWidth: parentWidth } = this.canvas.parentElement;
        // 计算缩放比例
        const scale = parentWidth / this.FIXED_WIDTH;

        // 应用缩放
        this.app.stage.scale.set(scale);
    }


    initPhysics = () => {
        const debugCanvas = this.debugCanvas = document.createElement("canvas");
        debugCanvas.className = "w-full h-full pointer-events-none absolute top-0 left-0 z-10";
        this.canvas.parentElement.appendChild(debugCanvas);
        window.addEventListener("resize", () => {
            debugCanvas.width = this.canvas.width;
            debugCanvas.height = this.canvas.height;
        });

        const engine = Engine.create();
        const render = Render.create({
            canvas: debugCanvas,
            engine: engine,
            options: {
                width: this.canvas.width,
                height: this.canvas.height,
                wireframeBackground: "transparent",
            },
        });

        const boxA = Bodies.rectangle(400, 200, 80, 80);
        const boxB = Bodies.rectangle(450, 50, 80, 80);
        const ground = Bodies.rectangle(100, 100, 100, 60, { isStatic: true });

        Composite.add(engine.world, [boxA, boxB, ground]);

        Render.run(render);

        const runner = Runner.create();
        Runner.run(runner, engine);

    };

    destroy() {
        // this.app.destroy();
        this.debugCanvas.remove();
    }

}