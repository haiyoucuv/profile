import { Crowd, CrowdAgent, importNavMesh, init, NavMesh, NavMeshQuery } from "@recast-navigation/core";
import { DebugDrawer, getPositionsAndIndices } from "@recast-navigation/three";
import { BufferGeometry, Group, Line, LineBasicMaterial, Mesh, Scene, Vector3, Vector3Like } from "three";
import NavMeshWorker from "./navmesh-worker?worker";
import { ELayers } from "./config";

export class NavigationSystem {
  private navMesh: NavMesh;
  private crowd: Crowd;
  private playerAgent: CrowdAgent;
  private pathLine: Line;
  private debugDrawer: DebugDrawer;

  scene: Scene;

  constructor(scene: Scene) {
    this.pathLine = new Line(new BufferGeometry(), new LineBasicMaterial({
      color: 0x0000ff,
      linewidth: 10,
    }));
    scene.add(this.pathLine);

    this.scene = scene;
  }

  async init(mapScene: Group) {
    await this.initNavMesh(mapScene);
    this.initCrowd();
  }

  async initNavMesh(mapScene: Group) {
    console.time("init Recast");
    await init();
    console.timeEnd("init Recast");
    return new Promise<void>((resolve) => {

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

        this.debugDrawer = new DebugDrawer();
        this.debugDrawer.layers.set(ELayers.DebugView);
        this.scene.add(this.debugDrawer);
        this.debugDrawer.clear();
        this.debugDrawer.drawNavMesh(this.navMesh);
        this.debugDrawer.children.forEach(child => {
          child.layers.set(ELayers.DebugView);
        });

        resolve();
      };

      const meshes: Mesh[] = [];
      mapScene.traverse((child) => {
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
  }

  initCrowd() {
    this.crowd = new Crowd(this.navMesh, {
      maxAgents: 10,
      maxAgentRadius: 1,
    });
  }

  getRandomPosition(position: Vector3Like = { x: 0, y: 0, z: 0 }) {
    const radius = 2;
    const navMeshQuery = new NavMeshQuery(this.navMesh);
    const {
      success,
      status,
      randomPolyRef,
      randomPoint,
    } = navMeshQuery.findRandomPointAroundCircle(position, radius);
    return randomPoint;
  }

  addPlayer(position: Vector3Like) {
    this.playerAgent = this.crowd.addAgent(position, {
      radius: 0.5,
      height: 1,
      maxSpeed: 6.0,
      maxAcceleration: 20.0,
      collisionQueryRange: 0.5,
      pathOptimizationRange: 0.0,
      separationWeight: 1.0,
    });
  }

  movePlayerTo(target: Vector3Like) {
    this.playerAgent?.requestMoveTarget(target);
  }

  getPlayerPosition(): Vector3Like {
    return this.playerAgent?.position();
  }

  update(dt: number) {
    this.crowd?.update(dt);
    this.updatePath();
  }

  private updatePath() {
    if (!this.playerAgent) return;

    this.pathLine.geometry.dispose();
    this.pathLine.geometry = new BufferGeometry();
    const path = [this.playerAgent.position(), ...this.playerAgent.corners()];
    this.pathLine.geometry.setFromPoints(path as Vector3[]);
  }

  dispose() {
    this.pathLine.geometry.dispose();
    (this.pathLine.material as LineBasicMaterial).dispose();
    this.navMesh?.destroy();
    this.debugDrawer?.dispose();
  }
}
  