import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
    DirectionalLight,
} from "three";

const canvas = document.createElement("canvas");

const root = document.getElementById("root");
root.appendChild(canvas);

const { innerWidth, innerHeight } = window;

const renderer = new WebGLRenderer({ canvas });

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 10);

const light = new DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshStandardMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const onResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}

onResize();
window.addEventListener("resize", onResize);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
