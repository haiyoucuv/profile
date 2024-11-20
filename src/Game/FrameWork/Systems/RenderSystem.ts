import { RenderComponent } from "../Components/RenderComponent";
import { WebGLRenderer, Scene, PerspectiveCamera, WebGLRenderTarget } from "three";
import { System } from "./System";

export class RenderSystem extends System {
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderTarget?: WebGLRenderTarget;

    constructor(
        renderer: WebGLRenderer,
        scene: Scene,
        camera: PerspectiveCamera,
        renderTarget?: WebGLRenderTarget
    ) {
        super(1000); // 渲染系统优先级最低，最后执行
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.renderTarget = renderTarget;

        // 设置渲染器
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // 监听窗口大小变化
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onUpdate(dt: number): void {
        if (!this.enabled) return;

        // 更新所有渲染组件
        const renderComponents = this.gameObjects
            .map(go => go.getComponent(RenderComponent))
            .filter(comp => comp && comp.enabled);

        // 执行渲染
        if (this.renderTarget) {
            this.renderer.setRenderTarget(this.renderTarget);
            this.renderer.render(this.scene, this.camera);
            this.renderer.setRenderTarget(null);
        } else {
            this.renderer.render(this.scene, this.camera);
        }
    }

    protected onDisable(): void {
        // 停止渲染时清理
        this.renderer.setAnimationLoop(null);
    }

    dispose() {
        window.removeEventListener('resize', this.onWindowResize);
        this.renderer.dispose();
        if (this.renderTarget) {
            this.renderTarget.dispose();
        }
    }
} 