import { Object3D, PerspectiveCamera, Vector3, MathUtils, Spherical, Vector2, Raycaster } from "three";
import { ELayers } from "./config";

export interface ThirdPersonCameraConfig {
    // Distance settings
    initialDistance?: number;
    minDistance?: number;
    maxDistance?: number;

    // Rotation limits
    minRotationX?: number;
    maxRotationX?: number;
    minRotationY?: number;
    maxRotationY?: number;
    initialRotationX?: number;
    initialRotationY?: number;

    // Height settings
    minHeight?: number;

    // Movement settings
    smoothSpeed?: number;
    rotationSpeed?: number;
    zoomSpeed?: number;

    // Touch sensitivity
    touchRotationSensitivity?: number;
    touchZoomSensitivity?: number;

    // Collision settings
    enableCollision?: boolean;
    collisionLayers?: number[];
}

export class ThirdPersonCamera {
    private camera: PerspectiveCamera;
    private target: Object3D;
    private node: HTMLElement;
    private currentPosition = new Vector3();
    private currentLookAt = new Vector3();

    // Configurable parameters with defaults
    private distance: number;
    private minDistance: number;
    private maxDistance: number;

    private rotationX: number;
    private rotationY: number;
    private minRotationX: number;
    private maxRotationX: number;
    private minRotationY: number;
    private maxRotationY: number;

    private readonly smoothSpeed: number;
    private readonly minHeight: number;
    private readonly rotationSpeed: number;
    private readonly zoomSpeed: number;
    private readonly touchRotationSensitivity: number;
    private readonly touchZoomSensitivity: number;

    private readonly enableCollision: boolean;
    private readonly collisionLayers: number[];

    // Touch control
    private touchStart = new Vector2();
    private prevTouchDistance = 0;
    private isPointerDown = false;
    private isTwoFingerTouch = false;

    constructor(
        camera: PerspectiveCamera,
        target: Object3D,
        node: HTMLElement,
        config: ThirdPersonCameraConfig = {}
    ) {
        this.camera = camera;
        this.target = target;
        this.node = node;

        const {
            initialDistance = 20,
            minDistance = 5,
            maxDistance = 30,
            initialRotationX = 45,
            initialRotationY = 45,
            minRotationX = -60,
            maxRotationX = 60,
            minRotationY = -Infinity,
            maxRotationY = Infinity,
            smoothSpeed = 0.1,
            minHeight = 0.5,
            rotationSpeed = 0.5,
            zoomSpeed = 1,
            touchRotationSensitivity = 0.5,
            touchZoomSensitivity = 0.2,
            enableCollision = false,
            collisionLayers = []
        } = config;

        this.distance = initialDistance;
        this.minDistance = minDistance;
        this.maxDistance = maxDistance;
        this.rotationX = initialRotationX;
        this.rotationY = initialRotationY;
        this.minRotationX = minRotationX;
        this.maxRotationX = maxRotationX;
        this.minRotationY = minRotationY;
        this.maxRotationY = maxRotationY;
        this.smoothSpeed = smoothSpeed;
        this.minHeight = minHeight;
        this.rotationSpeed = rotationSpeed;
        this.zoomSpeed = zoomSpeed;
        this.touchRotationSensitivity = touchRotationSensitivity;
        this.touchZoomSensitivity = touchZoomSensitivity;
        this.enableCollision = enableCollision;
        this.collisionLayers = collisionLayers;

        this.updateCameraPosition();
        this.initControlEvent(node);
    }

    private onMouseWheel = (event: WheelEvent) => {
        event.preventDefault();
        const delta = event.deltaY * 0.01;
        this.zoom(delta);
    };

    private initControlEvent(node: HTMLElement) {
        node.addEventListener("pointerdown", this.onPointerDown);
        node.addEventListener("pointermove", this.onPointerMove);
        node.addEventListener("pointerup", this.onPointerUp);
        node.addEventListener("pointercancel", this.onPointerUp);
        node.addEventListener("touchstart", this.onTouchStart);
        node.addEventListener("touchmove", this.onTouchMove);
        node.addEventListener("touchend", this.onTouchEnd);
        node.addEventListener("touchcancel", this.onTouchEnd);
        // node.addEventListener("wheel", this.onMouseWheel);
    }

    private removeControlEvent(node: HTMLElement) {
        node.removeEventListener("pointerdown", this.onPointerDown);
        node.removeEventListener("pointermove", this.onPointerMove);
        node.removeEventListener("pointerup", this.onPointerUp);
        node.removeEventListener("pointercancel", this.onPointerUp);
        node.removeEventListener("touchstart", this.onTouchStart);
        node.removeEventListener("touchmove", this.onTouchMove);
        node.removeEventListener("touchend", this.onTouchEnd);
        // node.removeEventListener("wheel", this.onMouseWheel);
    }

    private onTouchStart = (event: TouchEvent) => {
        if (event.touches.length === 2) {
            this.isTwoFingerTouch = true;
            this.prevTouchDistance = this.getTouchDistance(event);
        }
    };

    private onTouchMove = (event: TouchEvent) => {
        if (this.isTwoFingerTouch && event.touches.length === 2) {
            const currentDistance = this.getTouchDistance(event);
            const delta = (this.prevTouchDistance - currentDistance) * this.touchZoomSensitivity;
            this.zoom(delta);
            this.prevTouchDistance = currentDistance;
        }
    };

    private onTouchEnd = () => {
        this.isTwoFingerTouch = false;
    };

    private getTouchDistance(event: TouchEvent): number {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        return Math.hypot(
            touch1.clientX - touch2.clientX,
            touch1.clientY - touch2.clientY
        );
    }

    private onPointerDown = (event: PointerEvent) => {
        if (!this.isTwoFingerTouch) {
            this.isPointerDown = true;
            this.touchStart.set(event.clientX, event.clientY);
        }
    };

    private onPointerMove = (event: PointerEvent) => {
        if (!this.isPointerDown || this.isTwoFingerTouch) return;

        const deltaX = event.clientX - this.touchStart.x;
        const deltaY = event.clientY - this.touchStart.y;

        this.rotate(
            deltaX * this.touchRotationSensitivity, // Negative deltaX to reverse left/right direction
            deltaY * this.touchRotationSensitivity
        );

        this.touchStart.set(event.clientX, event.clientY);
    };

    private onPointerUp = () => {
        this.isPointerDown = false;
    };

    rotate(deltaX: number, deltaY: number) {
        this.setRotation(
            this.rotationX + deltaY * this.rotationSpeed,
            this.rotationY - deltaX * this.rotationSpeed
        );
    }

    zoom(delta: number) {
        this.distance = MathUtils.clamp(
            this.distance + delta * this.zoomSpeed,
            this.minDistance,
            this.maxDistance
        );
    }

    private updateCameraPosition() {
        const spherical = new Spherical(
            this.distance,
            MathUtils.degToRad(90 - this.rotationX),
            MathUtils.degToRad(this.rotationY)
        );

        const desiredPosition = new Vector3();
        desiredPosition.setFromSpherical(spherical);

        // 计算从目标到相机的方向
        const direction = desiredPosition.clone().normalize();

        if (this.enableCollision) {
            // 创建射线，从目标位置射向预期的相机位置
            const rayCaster = new Raycaster(
                this.target.position.clone(),
                direction,
                this.camera.near,
                this.maxDistance
            );

            rayCaster.layers.set(ELayers.Default);
            // 设置射线检测的层
            if (this.collisionLayers.length > 0) {
                this.collisionLayers.forEach(layer => {
                    rayCaster.layers.enable(layer);
                });
            }

            rayCaster.layers.disable(ELayers.DebugView);

            // 获取场景中的碰撞物体
            const intersects = rayCaster.intersectObjects(
                this.target.parent?.children || [],
                true
            ).filter(hit => hit.distance > 0);

            // 如果发生碰撞，调整相机位置到碰撞点
            if (intersects.length > 0) {
                const collision = intersects[0];
                const collisionDistance = Math.max(
                    this.minDistance,
                    collision.distance - 0.5 // 留出缓冲距离
                );

                // 调整相机位置到碰撞点
                desiredPosition.copy(direction).multiplyScalar(collisionDistance);
            }
        }

        desiredPosition.add(this.target.position);

        if (desiredPosition.y < this.minHeight) {
            desiredPosition.y = this.minHeight;
        }

        this.currentPosition.lerp(desiredPosition, this.smoothSpeed);
        this.currentLookAt.lerp(this.target.position, this.smoothSpeed);

        this.camera.position.copy(this.currentPosition);
        this.camera.lookAt(this.currentLookAt);
    }

    // Public methods for external control
    setTarget(newTarget: Object3D) {
        this.target = newTarget;
    }

    setDistance(distance: number) {
        this.distance = MathUtils.clamp(distance, this.minDistance, this.maxDistance);
    }

    setRotation(x: number, y: number) {
        this.rotationX = MathUtils.clamp(x, this.minRotationX, this.maxRotationX);
        this.rotationY = MathUtils.clamp(y, this.minRotationY, this.maxRotationY);
    }

    update() {
        this.updateCameraPosition();
    }

    dispose() {
        this.removeControlEvent(this.node);
    }
}




