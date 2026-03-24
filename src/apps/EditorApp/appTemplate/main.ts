import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    MeshStandardMaterial,
    Mesh,
    PlaneGeometry,
    SphereGeometry,
    SpotLight,
    AmbientLight,
    Clock,
    PCFSoftShadowMap
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.createElement("canvas");
const root = document.getElementById("root");
if (root) {
    root.appendChild(canvas);
}

// renderer
const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

// scene camera
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const spotLight = new SpotLight(0xffffff, 100);
spotLight.position.set(0, 10, 0);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
scene.add(spotLight);

// Ground
const planeGeometry = new PlaneGeometry(20, 20);
const planeMaterial = new MeshStandardMaterial({ color: 0x808080 });
const plane = new Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// Floating Sphere
const sphereGeometry = new SphereGeometry(1, 32, 32);
const sphereMaterial = new MeshStandardMaterial({ color: 0x007acc, roughness: 0.1, metalness: 0.5 });
const sphere = new Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 1.5;
sphere.castShadow = true;
scene.add(sphere);

// window resize
const onResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}

window.addEventListener("resize", onResize);

const clock = new Clock();

// loop
function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Float the sphere
    sphere.position.y = 1.5 + Math.sin(elapsedTime * 2) * 0.5;

    controls.update();
    renderer.render(scene, camera);
}

animate();
