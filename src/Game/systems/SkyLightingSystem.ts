import {
    DirectionalLight,
    AmbientLight,
    HemisphereLight,
    Scene,
    Vector3,
    Color,
    CameraHelper,
    DirectionalLightHelper,
    Object3D,
    MathUtils,
    PMREMGenerator,
    WebGLRenderer,
    Material,
    ShaderMaterial
} from 'three';
import { Sky, Water } from 'three-stdlib';
import { TimeEvents, TimeSystem, DayPhase } from "./TimeSystem";

interface SkyLightingConfig {
    shadows?: boolean;
    shadowMapSize?: number;
    debug?: boolean;
}

export class SkyLightingSystem {
    private lights: {
        main: DirectionalLight;
        ambient: AmbientLight;
        hemisphere: HemisphereLight;
    };

    private scene: Scene;
    private sceneEnv: Scene;
    private sky: Sky;
    private sun: Vector3;
    private debugHelpers: Object3D[] = [];
    private timeSystem: TimeSystem;
    private pmremGenerator: PMREMGenerator;
    private water?: Water;

    constructor(scene: Scene, renderer: WebGLRenderer, timeSystem: TimeSystem, config: SkyLightingConfig = {}) {
        this.scene = scene;
        this.timeSystem = timeSystem;
        this.sun = new Vector3();
        this.pmremGenerator = new PMREMGenerator(renderer);

        // 初始化光照
        this.lights = {
            main: this.createMainLight(config),
            ambient: this.createAmbientLight(),
            hemisphere: this.createHemisphereLight()
        };

        // 添加到场景
        Object.values(this.lights).forEach(light => scene.add(light));

        // 初始化天空
        this.initSky();

        // 设置调试助手
        if (config.debug) {
            this.createDebugHelpers();
        }

        // 设置事件监听
        this.setupTimeListeners();
    }

    private createMainLight(config: SkyLightingConfig) {
        const light = new DirectionalLight(0xffffff, 1.2); // 增加主光源强度
        light.position.set(5, 5, 5);

        if (config.shadows !== false) {
            light.castShadow = true;
            light.shadow.intensity = 2.5; // 减弱阴影强度,让阴影更柔和
            light.shadow.mapSize.width = config.shadowMapSize || 2048;
            light.shadow.mapSize.height = config.shadowMapSize || 2048;

            // 优化阴影
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 500;
            light.shadow.camera.left = -50;
            light.shadow.camera.right = 50;
            light.shadow.camera.top = 50;
            light.shadow.camera.bottom = -50;
            light.shadow.bias = -0.0001;
            light.shadow.normalBias = 0.02;
        }

        return light;
    }

    private createAmbientLight() {
        return new AmbientLight(0x6495ED, 0.3); // 使用淡蓝色的环境光,增加强度
    }

    private createHemisphereLight() {
        return new HemisphereLight(
            0x87CEEB, // 天空色改为天蓝色
            0x90EE90, // 地面色改为淡绿色
            0.3      // 增加强度
        );
    }

    public setWater(water: Water) {
        this.water = water;
    }

    private initSky() {
        this.sky = new Sky();
        this.sky.scale.setScalar(10000);
        this.scene.add(this.sky);

        this.sceneEnv = new Scene();
        this.sceneEnv.add(this.sky);

        const skyMaterial = this.sky.material as ShaderMaterial;
        const skyUniforms = skyMaterial.uniforms;
        skyUniforms['turbidity'].value = 8; // 减少浑浊度
        skyUniforms['rayleigh'].value = 1; // 减少瑞利散射,让天空更蓝
        skyUniforms['mieCoefficient'].value = 0.003; // 减少米氏散射
        skyUniforms['mieDirectionalG'].value = 0.9; // 增加太阳光晕
    }

    private setupTimeListeners() {
        this.timeSystem.on(TimeEvents.TIME_UPDATED, (timeData) => {
            this.updateSunPosition(timeData.hour, timeData.minute);
            this.updateLightIntensities(timeData.hour + timeData.minute / 60);
        });

        this.timeSystem.on(TimeEvents.DAY_NIGHT_CHANGED, (phase) => {
            this.updateSkyParameters(phase);
        });
    }

    private updateLightIntensities(timeInHours: number) {
        // 使用余弦函数实现更平滑的过渡
        const dayProgress = (timeInHours + 6) % 24 / 24;
        const dayIntensity = Math.cos((dayProgress - 0.5) * Math.PI * 2);

        // 基础光照参数 - 增加白天的光照强度
        let mainIntensity = Math.max(0, dayIntensity) * 1.4;
        let ambientIntensity = 0.3 + Math.max(0, dayIntensity) * 0.4;

        // 颜色计算
        let skyColor = new Color();
        let groundColor = new Color();

        if (timeInHours < 6 || timeInHours > 18) { // 夜晚
            skyColor.setHSL(0.6, 0.3, 0.08); // 增加夜空亮度
            groundColor.setHSL(0.6, 0.25, 0.04);
            mainIntensity *= 0.08;
            ambientIntensity = 0.08;
        } else if (timeInHours < 8) { // 日出
            const t = (timeInHours - 6) / 2;
            skyColor.setHSL(0.1, 0.7, 0.6 + t * 0.3); // 更温暖的日出色调
            groundColor.setHSL(0.1, 0.5, 0.3 + t * 0.2);
        } else if (timeInHours > 16) { // 日落
            const t = (18 - timeInHours) / 2;
            skyColor.setHSL(0.07, 0.7, 0.6 + t * 0.3); // 更温暖的日落色调
            groundColor.setHSL(0.07, 0.5, 0.3 + t * 0.2);
        } else { // 白天
            skyColor.setHSL(0.55, 0.3, 0.9); // 更亮更蓝的天空
            groundColor.setHSL(0.3, 0.4, 0.6); // 更鲜艳的地面色
        }

        // 更新光照参数
        this.lights.main.intensity = mainIntensity;
        this.lights.ambient.intensity = ambientIntensity;
        this.lights.hemisphere.color.copy(skyColor);
        this.lights.hemisphere.groundColor.copy(groundColor);
    }

    private updateSkyParameters(phase: DayPhase) {
        const skyMaterial = this.sky.material as ShaderMaterial;
        const skyUniforms = skyMaterial.uniforms;

        switch (phase) {
            case DayPhase.DAWN:
                skyUniforms['turbidity'].value = 6;
                skyUniforms['rayleigh'].value = 3;
                skyUniforms['mieCoefficient'].value = 0.004;
                break;
            case DayPhase.DAY:
                skyUniforms['turbidity'].value = 8;
                skyUniforms['rayleigh'].value = 1;
                skyUniforms['mieCoefficient'].value = 0.003;
                break;
            case DayPhase.DUSK:
                skyUniforms['turbidity'].value = 6;
                skyUniforms['rayleigh'].value = 3;
                skyUniforms['mieCoefficient'].value = 0.004;
                break;
            case DayPhase.NIGHT:
                skyUniforms['turbidity'].value = 4;
                skyUniforms['rayleigh'].value = 1;
                skyUniforms['mieCoefficient'].value = 0.002;
                break;
        }
    }

    private updateSunPosition(hour: number, minute: number) {
        const timeInHours = hour + minute / 60;
        const angleOffset = -90;
        const elevation = this.calculateSunElevation(timeInHours);
        const azimuth = ((timeInHours - 6) * 15) + angleOffset;

        const phi = MathUtils.degToRad(90 - elevation);
        const theta = MathUtils.degToRad(azimuth);

        this.sun.setFromSphericalCoords(1, phi, theta);

        // 更新天空和光照
        const skyMaterial = this.sky.material as ShaderMaterial;
        skyMaterial.uniforms['sunPosition'].value.copy(this.sun);
        this.lights.main.position.copy(this.sun.multiplyScalar(100));

        // 更新水面
        if (this.water) {
            this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();
        }

        // 更新环境贴图
        this.updateEnvironmentMap();
    }

    private calculateSunElevation(timeInHours: number) {
        // 创建一个正弦曲线来模拟太阳高度
        // 在正午（12点）达到最高点,增加最大高度角使太阳更高
        const amplitude = 95; // 最大高度角增加到95度
        const period = 24;

        return amplitude * Math.sin(((timeInHours - 6) / period) * Math.PI * 2);
    }

    private updateEnvironmentMap() {
        
        const renderTarget = this.pmremGenerator.fromScene(this.sceneEnv);
        this.scene.environment = renderTarget.texture;
        renderTarget.dispose();
    }

    private createDebugHelpers() {
        // 添加光源辅助显示
        const mainLightHelper = new DirectionalLightHelper(this.lights.main, 5);
        const shadowCameraHelper = new CameraHelper(this.lights.main.shadow.camera);

        this.debugHelpers.push(mainLightHelper, shadowCameraHelper);
        this.debugHelpers.forEach(helper => this.scene.add(helper));
    }

    public dispose() {
        // 移除事件监听
        this.timeSystem.off(TimeEvents.TIME_UPDATED, () => {});
        this.timeSystem.off(TimeEvents.DAY_NIGHT_CHANGED, () => {});

        // 清理资源
        this.debugHelpers.forEach(helper => {
            this.scene.remove(helper);
            if (helper instanceof DirectionalLightHelper || helper instanceof CameraHelper) {
                helper.dispose();
            }
        });

        // 清理天空
        if (this.sky.geometry) {
            this.sky.geometry.dispose();
        }
        if (this.sky.material) {
            if (Array.isArray(this.sky.material)) {
                this.sky.material.forEach(material => material.dispose());
            } else {
                this.sky.material.dispose();
            }
        }
        this.scene.remove(this.sky);

        // 清理光源
        Object.values(this.lights).forEach(light => {
            this.scene.remove(light);
            if (light.shadow?.map) {
                light.shadow.map.dispose();
            }
        });
    }
}