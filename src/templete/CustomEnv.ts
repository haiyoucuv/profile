import {
    Scene,
    Vector3,
    DirectionalLight,
    AmbientLight,
    FogExp2,
    PlaneGeometry,
    TextureLoader,
    RepeatWrapping
} from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { GUI } from "dat.gui";

export class CustomEnv {
    public sky: any;
    public sun: Vector3;
    public sunLight: DirectionalLight;
    public ambientLight: AmbientLight;
    public gui: GUI;
    public sunParams: any;
    public skyParams: any;
    public water: Water;
    public updateSun: (time: number) => void;

    constructor(scene: Scene) {
        // 雾
        scene.fog = new FogExp2(0xcccccc, 0.025);

        // water
        const waterGeometry = new PlaneGeometry(10000, 10000);
        const textureLoader = new TextureLoader();
        const waterNormals = textureLoader.load('/assets/textures/waternormals.png');
        waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;
        this.water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunDirection: new Vector3(0, 1, 0),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
        });
        this.water.rotation.x = -Math.PI / 2;
        scene.add(this.water);

        // Sky
        this.sky = new Sky();
        this.sky.scale.setScalar(10000);
        scene.add(this.sky);

        // Sun
        this.sun = new Vector3();
        this.sky.material.uniforms["sunPosition"].value.copy(this.sun);
        this.sky.material.uniforms['turbidity'].value = 0.1;
        this.sky.material.uniforms['rayleigh'].value = 0.3;
        this.sky.material.uniforms['mieCoefficient'].value = 0.005;
        this.sky.material.uniforms['mieDirectionalG'].value = 0.8;
        this.sky.material.uniforms['sunPosition'].value.set(-1, 0.1, -1);

        // light
        this.sunLight = new DirectionalLight(0xffffff, 1.2);
        this.sunLight.position.set(0, 1000, 1000);
        scene.add(this.sunLight);
        this.ambientLight = new AmbientLight(0xffffff, 0.5);
        scene.add(this.ambientLight);

        // dat.gui
        this.gui = new GUI();
        this.sunParams = {
            x: 0,
            y: 0.1,
            z: 100,
            auto: true
        };
        const sunFolder = this.gui.addFolder('Sun Position');
        sunFolder.add(this.sunParams, "y", -180, 180).onChange(() => {
            this.sunParams.auto = false;
        });
        sunFolder.add(this.sunParams, 'y', -180, 180).onChange(() => {
            this.sunParams.auto = false;
        });
        sunFolder.add(this.sunParams, 'z', -180, 180).onChange(() => {
            this.sunParams.auto = false;
        });
        sunFolder.open();
        this.skyParams = {
            turbidity: 0.1,
            rayleigh: 0.3,
            mieCoefficient: 0.005,
            mieDirectionalG: 0.8
        };
        const skyFolder = this.gui.addFolder('Sky');
        skyFolder.add(this.skyParams, 'turbidity', 0, 20, 0.01);
        skyFolder.add(this.skyParams, 'rayleigh', 0, 10, 0.01);
        skyFolder.add(this.skyParams, 'mieCoefficient', 0, 0.1, 0.0001);
        skyFolder.add(this.skyParams, 'mieDirectionalG', 0, 1, 0.01);
        skyFolder.open();

        // 更新太阳位置
        this.updateSun = (time: number) => {
            if (this.sunParams.auto) {
                this.sun.set(Math.sin(time) * 10, Math.cos(time) * 5, -5);
                this.sunParams.x = this.sun.x;
                this.sunParams.y = this.sun.y;
                this.sunParams.z = this.sun.z;
            } else {
                this.sun.set(this.sunParams.x, this.sunParams.y, this.sunParams.z);
            }
            this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
            this.water.material.uniforms["sunDirection"].value.copy(this.sun).normalize();
            this.sunLight.position.set(this.sun.x * 1000, this.sun.y * 1000, this.sun.z * 1000);
            const isDay = this.sun.y > 0.1;
            this.sunLight.intensity = isDay ? 1.2 : 0.2;
            this.sunLight.color.set(isDay ? 0xffffff : 0x3366cc);
            this.ambientLight.intensity = isDay ? 0.5 : 0.15;
            this.ambientLight.color.set(isDay ? 0xffffff : 0x223344);
            // sky uniforms
            this.sky.material.uniforms['turbidity'].value = this.skyParams.turbidity;
            this.sky.material.uniforms['rayleigh'].value = this.skyParams.rayleigh;
            this.sky.material.uniforms['mieCoefficient'].value = this.skyParams.mieCoefficient;
            this.sky.material.uniforms['mieDirectionalG'].value = this.skyParams.mieDirectionalG;
        };
    }

    public updateWater(delta: number) {
        this.water.material.uniforms['time'].value += delta;
    }
}
