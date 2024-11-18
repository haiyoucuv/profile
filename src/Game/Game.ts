import {
  AmbientLight,
  BoxGeometry,
  Clock,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";
import { FBXLoader, GLTFLoader } from "three-stdlib";

import mapGlb from "../assets/my_stardew_valley_farm.glb";
import { NavigationSystem } from "./NavigationSystem";
import { ThirdPersonCamera } from "./ThirdCamera";
import { ELayers } from "./config";

const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();


export class Game {

  canvas: HTMLCanvasElement;

  renderer: WebGLRenderer;

  scene = new Scene();
  camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

  thirdCamera: ThirdPersonCamera;

  mapScene: Group;

  player: Mesh;
  navigationSystem: NavigationSystem;
  clock: Clock = new Clock(true);

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    // this.start();
  }

  async start() {
    this.initScene();
    await this.addMap();

    this.navigationSystem = new NavigationSystem(this.scene);
    await this.navigationSystem.init(this.mapScene);

    const initialPosition = this.navigationSystem.getRandomPosition();
    this.navigationSystem.addPlayer(initialPosition);

    this.renderer.setAnimationLoop(this.onUpdate);

    this.canvas.addEventListener("mousedown", this.onMouseDown);
  }

  onMouseDown = (() => {
    const rayCaster = new Raycaster();
    const mouse = new Vector2();
    return (event: MouseEvent) => {
      if (event.button !== 2) return;

      const { clientX, clientY } = event;
      const canvasRect = this.canvas.getBoundingClientRect();

      mouse.x = ((clientX - canvasRect.left) / this.canvas.offsetWidth) * 2 - 1;
      mouse.y = -((clientY - canvasRect.top) / this.canvas.offsetHeight) * 2 + 1;

      rayCaster.setFromCamera(mouse, this.camera);
      const intersects = rayCaster.intersectObject(this.mapScene);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        this.navigationSystem.movePlayerTo(point);
      }
    };
  })();

  onResize = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  };

  initScene() {

    const renderer = this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: "high-performance",
      antialias: true,
    });

    renderer.setClearColor(0xffffff);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    this.onResize();
    window.addEventListener("resize", this.onResize);

    const ambLight = new AmbientLight(0xffffff, 2);
    this.scene.add(ambLight);

    const light = new DirectionalLight(0xffffff, 6);
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -100;
    light.shadow.camera.right = 100;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.set(4096, 4096);
    light.shadow.radius = 100;
    light.position.set(50, 50, 50);
    light.castShadow = true;
    this.scene.add(light);

    this.player = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({
      color: 0xff0000,
    }));
    this.player.castShadow = true;
    this.player.receiveShadow = true;
    this.scene.add(this.player);

    this.thirdCamera = new ThirdPersonCamera(this.camera, this.player, this.canvas, {
      enableCollision: true,
      collisionLayers: [ELayers.Default],
    });
  }

  async addMap() {
    const cityGltf = await gltfLoader.loadAsync(mapGlb);

    this.mapScene = cityGltf.scene;
    this.mapScene.scale.set(5, 5, 5);
    this.scene.add(cityGltf.scene);

    cityGltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

  }

  onUpdate = () => {
    const dt = this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);

    this.navigationSystem?.update(dt);

    if (this.navigationSystem?.getPlayerPosition()) {
      this.player.position.copy(this.navigationSystem.getPlayerPosition());
    }

    this.thirdCamera.update();
  };

  destroy() {
    this.renderer.dispose();
    this.navigationSystem?.dispose();
  }

}