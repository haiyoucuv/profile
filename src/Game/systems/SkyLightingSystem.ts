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
} from "three";
import { Sky, Water } from "three-stdlib";
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
    private readonly sun: Vector3;
    private debugHelpers: Object3D[] = [];
    private pmremGenerator: PMREMGenerator;
    private water?: Water;

    constructor(scene: Scene, renderer: WebGLRenderer, config: SkyLightingConfig = {}) {
        this.scene = scene;
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
        const light = new DirectionalLight(0xffffff, 1.3);
        light.position.set(50, 50, 50);

        if (config.shadows !== false) {
            light.castShadow = true;
            light.shadow.intensity = 1;
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

        const skyMaterial = this.sky.material as ShaderMaterial;
        const skyUniforms = skyMaterial.uniforms;

        skyUniforms.turbidity.value = 10; // 浑浊度
        skyUniforms.rayleigh.value = 2; // 减少瑞利散射,让天空更蓝
        skyUniforms.mieCoefficient.value = 0.005; // 米氏散射
        skyUniforms.mieDirectionalG.value = 0.8;  // 太阳光晕
    }

    private setupTimeListeners() {
        TimeSystem.ins.on(TimeEvents.TIME_UPDATED, (timeData) => {
            const timeInHours = timeData.hour + timeData.minute / 60 + timeData.seconds / 3600;
            this.updateSunPosition(timeInHours);
            this.updateLightIntensities(timeInHours);
            // 确保初始化时也调用一次更新
        });

        // 立即进行一次初始更新
        const currentTime = TimeSystem.ins.getTimeData();
        const timeInHours = currentTime.hour + currentTime.minute / 60 + currentTime.seconds / 3600;
        this.updateSunPosition(timeInHours);
        this.updateLightIntensities(timeInHours);
    }

    private updateLightIntensities(timeInHours: number) {
        // 计算日光强度
        const dayProgress = ((timeInHours - 6) % 24) / 24; // 从早上6点开始计算
        const dayIntensity = Math.cos((dayProgress - 0.5) * Math.PI * 2);

        // 基础光照参数
        let mainIntensity = Math.max(0.2, dayIntensity) * 1.4; // 确保始终有最小强度
        let ambientIntensity = 0.3 + Math.max(0, dayIntensity) * 0.4;

        // 颜色计算
        const skyColor = new Color();
        const groundColor = new Color();

        if (timeInHours < 6 || timeInHours > 18) { // 夜晚
            skyColor.setHSL(0.6, 0.3, 0.08);
            groundColor.setHSL(0.6, 0.25, 0.04);
            mainIntensity = 0; // 确保夜间有最小光照
            ambientIntensity = Math.max(0.1, ambientIntensity); // 确保夜间有最小环境光
        } else if (timeInHours < 8) { // 日出
            const t = (timeInHours - 6) / 2;
            skyColor.setHSL(0.1, 0.7, 0.6 + t * 0.3);
            groundColor.setHSL(0.1, 0.5, 0.3 + t * 0.2);
            mainIntensity = Math.max(0.4, mainIntensity); // 确保日出时有足够光照
        } else if (timeInHours > 16) { // 日落
            const t = (18 - timeInHours) / 2;
            skyColor.setHSL(0.07, 0.7, 0.6 + t * 0.3);
            groundColor.setHSL(0.07, 0.5, 0.3 + t * 0.2);
            mainIntensity = Math.max(0.4, mainIntensity); // 确保日落时有足够光照
        } else { // 白天
            skyColor.setHSL(0.55, 0.3, 0.9);
            groundColor.setHSL(0.3, 0.4, 0.6);
            mainIntensity = Math.max(0.6, mainIntensity); // 确保白天有足够光照
        }

        // 更新光照参数
        this.lights.main.intensity = mainIntensity;
        this.lights.ambient.intensity = ambientIntensity;
        this.lights.hemisphere.color.copy(skyColor);
        this.lights.hemisphere.groundColor.copy(groundColor);
    }


    private updateSunPosition(timeInHours: number) {
        // 计算太阳方位角和高度角
        const { azimuth, elevation } = this.calculateSunAngles(timeInHours);

        // 将角度转换为弧度并设置太阳位置
        const phi = MathUtils.degToRad(90 - elevation);
        const theta = MathUtils.degToRad(azimuth);

        // 重要：先创建太阳位置向量
        this.sun.setFromSphericalCoords(1, phi, theta);

        // 更新天空
        const skyMaterial = this.sky.material as ShaderMaterial;
        skyMaterial.uniforms.sunPosition.value.copy(this.sun);

        // 重要：使用克隆的向量设置光源位置，避免修改原始sun向量
        const lightPosition = this.sun.clone().multiplyScalar(100);
        this.lights.main.position.copy(lightPosition);

        // 更新水面
        if (this.water) {
            this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize();
        }

        // 更新环境贴图
        this.updateEnvironmentMap();
    }

    private calculateSunAngles(timeInHours: number) {
        // 调整时间范围使正午为最高点
        const hourAngle = ((timeInHours - 12) * 15); // 每小时15度

        // 计算高度角，使用余弦函数实现更平滑的过渡
        const maxElevation = 75; // 最大高度角
        const elevation = maxElevation * Math.cos(hourAngle * Math.PI / 180);

        // 计算方位角，确保太阳从东向西移动
        const azimuth = hourAngle;

        // 确保方位角在合理范围内
        if (timeInHours < 6 || timeInHours > 18) {
            // 夜间保持太阳在地平线以下
            return {
                azimuth: azimuth,
                elevation: Math.min(-10, elevation)
            };
        }

        return {
            azimuth: azimuth,
            elevation: Math.max(-10, elevation)
        };
    }


    private updateEnvironmentMap() {
        this.sceneEnv = new Scene();
        this.sceneEnv.add(this.sky);

        const skyMaterial = this.sky.material as ShaderMaterial;
        skyMaterial.uniforms.sunPosition.value.copy(this.sun);

        const renderTarget = this.pmremGenerator.fromScene(this.sceneEnv);
        this.scene.environment = renderTarget.texture;
        this.scene.background = renderTarget.texture; // 添加这行，将环境贴图同时设置为背景
        renderTarget.dispose();

        this.scene.add(this.sky);
    }

    private createDebugHelpers() {
        // 添加光源辅助显示
        const mainLightHelper = new DirectionalLightHelper(this.lights.main);
        const shadowCameraHelper = new CameraHelper(this.lights.main.shadow.camera);

        this.debugHelpers.push(mainLightHelper, shadowCameraHelper);
        this.debugHelpers.forEach(helper => this.scene.add(helper));
    }

    public dispose() {
        // 移除事件监听
        TimeSystem.ins.off(TimeEvents.TIME_UPDATED, () => { });
        TimeSystem.ins.off(TimeEvents.DAY_NIGHT_CHANGED, () => { });

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