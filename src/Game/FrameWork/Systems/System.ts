import { SafeArray } from "../SafeArray";
import { GameObject } from "../GameObject";

export abstract class System {
    protected enabled: boolean = true;
    priority: number = 0;
    protected gameObjects: SafeArray<GameObject>;

    constructor(priority: number = 0) {
        this.priority = priority;
        this.gameObjects = new SafeArray<GameObject>();
    }

    setEnabled(value: boolean) {
        if (this.enabled !== value) {
            this.enabled = value;
            if (value) {
                this.onEnable?.();
            } else {
                this.onDisable?.();
            }
        }
    }

    abstract onUpdate(dt: number): void;

    protected onEnable?(): void;
    protected onDisable?(): void;
} 