import {
    Scene,
    Vector3,
    DirectionalLight,
    AmbientLight,
    FogExp2,
    PlaneGeometry,
    TextureLoader,
    RepeatWrapping,
    MathUtils, PMREMGenerator,
    Renderer, WebGLRenderer
} from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { Player } from './Player';
import { Component } from "./Component.ts";

export class CustomEnv extends Component {
    public sky: any;
    public sun: Vector3 = new Vector3();
    public sunLight: DirectionalLight;
    public ambientLight: AmbientLight;
    public water: Water;
    private player: Player;

    scene: Scene;
    renderer: WebGLRenderer;

    constructor(scene: Scene, renderer: WebGLRenderer, player: Player) {
        super();

        this.scene = scene;
        this.renderer = renderer;
        this.player = player;

        this.pmremGenerator = new PMREMGenerator(renderer);

        // 雾
        // scene.fog = new FogExp2(0x111111, 0.02);

        // water
        const waterGeometry = new PlaneGeometry(10000, 10000);
        const textureLoader = new TextureLoader();
        const waterNormals = textureLoader.load('/assets/textures/waternormals.png');
        waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;
        this.water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
        });
        this.water.rotation.x = -Math.PI / 2;
        scene.add(this.water);

        // Sky
        this.sky = new Sky();
        this.sky.scale.setScalar(1000);
        scene.add(this.sky);

        this.sky.material.uniforms['turbidity'].value = 10;
        this.sky.material.uniforms['rayleigh'].value = 2;
        this.sky.material.uniforms['mieCoefficient'].value = 0.05;
        this.sky.material.uniforms['mieDirectionalG'].value = 0.90;

        // light
        this.sunLight = new DirectionalLight(0xff8c44, 1.0);
        // scene.add(this.sunLight);

        this.ambientLight = new AmbientLight(0x443333, 0.3);
        // scene.add(this.ambientLight);

        this.updateSun();

        this.sceneEnv.add(this.sky);
        const renderTarget = this.pmremGenerator.fromScene(this.sceneEnv);
        this.scene.environment = renderTarget.texture;
        this.scene.add(this.sky);
    }

    elevation = 2;
    azimuth = 0; // 太阳在正前方

    pmremGenerator: PMREMGenerator = null;
    sceneEnv = new Scene();

    updateSun() {
        const {
            elevation, azimuth, sun, sunLight,
            water, sky, player,
        } = this;

        const phi = MathUtils.degToRad(90 - elevation);
        const theta = MathUtils.degToRad(azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        sky.material.uniforms['sunPosition'].value.copy(sun);
        water.material.uniforms['sunDirection'].value.copy(sun).normalize();
        sunLight.position.copy(sun).multiplyScalar(1000);

        // 更新天空盒位置
        sky.position.set(player.position.x, 0, player.position.z);
    }

    onUpdate(dTime, eTime) {
        this.water.material.uniforms['time'].value += dTime;

        this.updateSun(); // 每帧更新天空盒位置
    }
}
