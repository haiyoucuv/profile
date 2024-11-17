import {
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  Clock,
  DirectionalLight,
  Group,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { FBXLoader, GLTFLoader, OrbitControls } from "three-stdlib";

import cityGlb from "../assets/lowpoly_city.glb";

import NavMeshWorker from "./navmesh-worker?worker";
import { Crowd, CrowdAgent, importNavMesh, init, NavMesh, NavMeshQuery } from "@recast-navigation/core";
import { getPositionsAndIndices } from "@recast-navigation/three";

const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();

export class Game {

  canvas: HTMLCanvasElement;

  renderer: WebGLRenderer;

  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  mapScene: Group;

  controls: OrbitControls;

  player: Mesh;
  playerAgent: CrowdAgent;

  navMesh: NavMesh;
  crowd: Crowd;

  pathLine: Line;

  clock: Clock = new Clock(true);

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.start();
  }

  async start() {
    this.initScene();
    await this.addMap();
    await this.initNavMesh();
    await this.initCrowd();

    this.renderer.setAnimationLoop(this.onUpdate);

    const rayCaster = new Raycaster();
    const mouse = new Vector2();

    this.canvas.addEventListener("mousedown", (event) => {
      if (event.button !== 2) return;

      const { clientX, clientY } = event;
      const canvasRect = this.canvas.getBoundingClientRect();

      mouse.x = ((clientX - canvasRect.left) / this.canvas.offsetWidth) * 2 - 1;
      mouse.y = -((clientY - canvasRect.top) / this.canvas.offsetHeight) * 2 + 1;

      rayCaster.setFromCamera(mouse, this.camera);
      const intersects = rayCaster.intersectObject(this.mapScene);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        this.playerAgent.requestMoveTarget(point);
      }

    });
  }

  initScene() {

    const renderer = this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: "high-performance",
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    };
    onResize();
    window.addEventListener("resize", onResize);

    this.camera.position.set(-10, 20, 15);

    const ambLight = new AmbientLight(0xffffff, 2);
    this.scene.add(ambLight);

    const light = new DirectionalLight(0xffffff, 6);
    light.castShadow = true;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -100;
    light.shadow.camera.right = 100;
    light.shadow.bias = -0.0001;
    light.shadow.mapSize.set(4096, 4096);
    light.position.set(5, 5, 5);
    light.shadow.normalBias = 0.05;
    light.shadow.radius = 100;
    light.position.set(50, 200, 50);
    this.scene.add(light);

    this.player = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({
      color: 0xff0000,
    }));
    this.player.castShadow = true;
    this.player.receiveShadow = true;
    this.scene.add(this.player);

    this.pathLine = new Line(new BufferGeometry(), new LineBasicMaterial({
      color: 0x0000ff,
      linewidth: 10,
    }));
    this.scene.add(this.pathLine);


    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target = this.player.position;
    this.controls.enableDamping = true;
    this.controls.maxDistance = 100;
    this.controls.enableZoom = false;
    this.controls.enablePan = true;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = 0;
  }

  async addMap() {
    const cityGltf = await gltfLoader.loadAsync(cityGlb);

    this.mapScene = cityGltf.scene;
    cityGltf.scene.position.set(30, 0, -25);
    this.scene.add(cityGltf.scene);

    cityGltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

  }

  initNavMesh = async () => {
    return new Promise<void>(async (resolve) => {
      console.time("init recast");
      await init();
      console.timeEnd("init recast");

      const navMeshConfig = {
        cs: 0.2,
        ch: 0.2,
        tileSize: 64,
        walkableSlopeAngle: 35,
        walkableHeight: 1,
        walkableClimb: 1,
        walkableRadius: 1,
        maxEdgeLen: 12,
        maxSimplificationError: 1.3,
        minRegionArea: 8,
        mergeRegionArea: 20,
        maxVertsPerPoly: 6,
        detailSampleDist: 6,
        detailSampleMaxError: 1,
      };

      const worker = new NavMeshWorker();

      worker.onmessage = (event) => {
        console.timeEnd("Generate NavMesh");

        const navMeshExport = event.data;

        this.navMesh = importNavMesh(navMeshExport).navMesh;

        // const debugDrawer = new DebugDrawer();
        // this.scene.add(debugDrawer);
        // debugDrawer.clear();
        // debugDrawer.drawNavMesh(this.navMesh);

        resolve();
      };

      const meshes: Mesh[] = [];
      this.mapScene.traverse((child) => {
        if (child instanceof Mesh) {
          meshes.push(child);
        }
      });

      const [positions, indices] = getPositionsAndIndices(meshes);

      console.time("Generate NavMesh");
      worker.postMessage({ positions, indices, config: navMeshConfig }, [
        positions.buffer,
        indices.buffer,
      ]);
    });
  };

  initCrowd = async () => {
    this.crowd = new Crowd(this.navMesh, {
      maxAgents: 10,
      maxAgentRadius: 1,
    });

    const position = { x: 0, y: 0, z: 0 };
    const radius = 2;

    const navMeshQuery = new NavMeshQuery(this.navMesh);

    const {
      success,
      status,
      randomPolyRef,
      randomPoint: initialAgentPosition,
    } = navMeshQuery.findRandomPointAroundCircle(position, radius);

    this.playerAgent = this.crowd.addAgent(initialAgentPosition, {
      radius: 0.5,
      height: 1,
      maxSpeed: 6.0,
      maxAcceleration: 20.0,
      collisionQueryRange: 0.5,
      pathOptimizationRange: 0.0,
      separationWeight: 1.0,
    });
  };

  onUpdate = () => {
    const dt = this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);

    this.crowd?.update(dt);

    if (this.playerAgent) {
      this.player.position.copy(this.playerAgent.position());
      this.updatePath();
    }

    this.controls.update();
  };

  updatePath() {
    const path = [this.playerAgent.position(), ...this.playerAgent.corners()];
    this.pathLine.geometry.dispose();
    this.pathLine.geometry = new BufferGeometry();
    this.pathLine.geometry.setFromPoints(path as Vector3[]);
  }


  destroy() {
    this.renderer.dispose();
  }

}