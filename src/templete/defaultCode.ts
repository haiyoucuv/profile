import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    Vector3,
    Group,
    BoxGeometry,
    SphereGeometry,
    Clock,
    TextureLoader,
    RepeatWrapping,
    FogExp2
} from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';

const canvas = document.createElement("canvas");
const root = document.getElementById("root");
root.appendChild(canvas);

// Initialize renderer
const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance",
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Create scene and camera
const scene = new Scene();
scene.fog = new FogExp2(0xcccccc, 0.025);
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Add beautiful sky
const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);


// Sun position
const sun = new Vector3();
sky.material.uniforms["sunPosition"].value.copy(sun);
sky.material.uniforms['turbidity'].value = 1;  // 影响空气浑浊度
sky.material.uniforms['rayleigh'].value = 1.5;  // 影响瑞利散射，决定天空颜色
sky.material.uniforms['mieCoefficient'].value = 0.005;  // 控制雾霾效果
sky.material.uniforms['mieDirectionalG'].value = 0.8;  // 控制光晕强度
sky.material.uniforms['sunPosition'].value.set(-1, 0.1, -1);  // 夕阳


// Add lighting
const sunLight = new DirectionalLight(0xffffff, 1.2);
sunLight.position.set(sun.x * 1000, sun.y * 1000, sun.z * 1000);
scene.add(sunLight);

const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Create water surface
const waterGeometry = new PlaneGeometry(10000, 10000);
const textureLoader = new TextureLoader();
const waterNormals = textureLoader.load('/src/assets/textures/waternormals.png');
waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;

const water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: waterNormals,
    sunDirection: sunLight.position.clone().normalize(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
});
water.rotation.x = -Math.PI / 2;
scene.add(water);



const player = createPlayer();

// Bullets array and enemy array
const bullets = [];
const enemies = [];

// 敌机子弹数组
const enemyBullets = [];

// Game state
const gameState = {
    lastEnemySpawn: 0,
    enemySpawnInterval: 2000, // ms
};

function createPlayer(){
    const playerGroup = new Group();
    const playerGeometry = new Group();

    const bodyGeometry = new BoxGeometry(2, 0.5, 4);
    const bodyMaterial = new MeshStandardMaterial({ color: 0x404040, metalness: 0.7, roughness: 0.2 });
    const body = new Mesh(bodyGeometry, bodyMaterial);

    const wingGeometry = new BoxGeometry(8, 0.2, 2);
    const wing = new Mesh(wingGeometry, new MeshStandardMaterial({ color: 0x8888ff, metalness: 0.8, roughness: 0.15 }));
    wing.position.y = 0.2;

    const tailGeometry = new BoxGeometry(2, 0.8, 0.8);
    const tail = new Mesh(tailGeometry, new MeshStandardMaterial({ color: 0x404040, metalness: 0.7, roughness: 0.2 }));
    tail.position.set(0, 0.4, -1.8);

    playerGeometry.add(body, wing, tail);
    playerGroup.add(playerGeometry);
    playerGroup.position.set(0, 5, 0);
    scene.add(playerGroup);
    return playerGroup;
}

// Create enemy airplane
function createEnemy() {
    const enemyGroup = new Group();
    const enemyGeometry = new BoxGeometry(1.5, 0.4, 3);
    const enemyMaterial = new MeshStandardMaterial({ color: 0xff3333, metalness: 0.6, roughness: 0.25 });
    const enemy = new Mesh(enemyGeometry, enemyMaterial);
    enemyGroup.add(enemy);
    // 只在玩家前方生成，x和y都有随机
    const x = player.position.x + (Math.random() - 0.5) * 40; // ±20
    const y = Math.max(1, Math.min(10, player.position.y + (Math.random() - 0.5) * 16)); // ±8
    const z = player.position.z + 80 + Math.random() * 40;
    enemyGroup.position.set(x, y, z);
    scene.add(enemyGroup);
    enemies.push(enemyGroup);
}

// 敌机发射子弹
function enemyShoot(enemy) {
    const bulletGeometry = new SphereGeometry(0.3);
    const bulletMaterial = new MeshStandardMaterial({ color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 1, metalness: 0.5, roughness: 0.1 });
    const bullet = new Mesh(bulletGeometry, bulletMaterial);
    // 计算朝向玩家的方向
    const direction = new Vector3().subVectors(player.position, enemy.position).normalize();
    bullet.position.copy(enemy.position);
    bullet.userData.direction = direction;
    scene.add(bullet);
    enemyBullets.push(bullet);
}

// Create bullet
function createBullet() {
    const bulletGeometry = new SphereGeometry(0.35);
    const bulletMaterial = new MeshStandardMaterial({ color: 0xffffee, emissive: 0xffff99, emissiveIntensity: 1, metalness: 0.5, roughness: 0.1 });
    const bullet = new Mesh(bulletGeometry, bulletMaterial);

    // Get player's forward direction
    const direction = new Vector3(0, 0, 1);
    direction.applyQuaternion(player.quaternion);

    // Set bullet position and direction
    bullet.position.copy(player.position);
    bullet.userData.direction = direction;

    scene.add(bullet);
    bullets.push(bullet);
}

// 恢复键盘控制
const keysPressed = {};
window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (event.code === 'Space') {
        createBullet();
    }
});
window.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
});

// Handle window resize
const onResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}

onResize();
window.addEventListener("resize", onResize);


function updateSun(time) {
    sun.set(Math.sin(time) * 10, Math.cos(time) * 5, -5);
    sky.material.uniforms['sunPosition'].value.copy(sun);


    water.material.uniforms["sunDirection"].value.copy(sun).normalize();

    sunLight.position.set(sun.x * 1000, sun.y * 1000, sun.z * 1000);
    // 白天夜晚光照变化
    const isDay = sun.y > 0.1;
    sunLight.intensity = isDay ? 1.2 : 0.2;
    sunLight.color.set(isDay ? 0xffffff : 0x3366cc);
    ambientLight.intensity = isDay ? 0.5 : 0.15;
    ambientLight.color.set(isDay ? 0xffffff : 0x223344);
}

// Game clock
const clock = new Clock();

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = clock.getElapsedTime() * 1000;

    updateSun(time / 1000);

    // Update water
    water.material.uniforms['time'].value += delta;

    // 飞机自动前进
    player.position.z += 0.5;

    // a/d 或左右键控制左右移动和翻滚
    let rolling = false;
    if (keysPressed['a'] || keysPressed['ArrowLeft']) {
        player.position.x += 0.5;
        player.rotation.z = Math.max(player.rotation.z - 0.08, -Math.PI / 4);
        rolling = true;
    }
    if (keysPressed['d'] || keysPressed['ArrowRight']) {
        player.position.x -= 0.5;
        player.rotation.z = Math.min(player.rotation.z + 0.08, Math.PI / 4);
        rolling = true;
    }
    // w/s 或上下键控制上下移动
    if (keysPressed['w'] || keysPressed['ArrowUp']) {
        player.position.y += 0.5;
    }
    if (keysPressed['s'] || keysPressed['ArrowDown']) {
        player.position.y -= 0.5;
    }
    // 松开时自动回正
    if (!rolling) {
        player.rotation.z *= 0.92;
    }

    // 玩家y坐标限制在[1,10]
    player.position.y = Math.max(5, Math.min(50, player.position.y));

    // 摄像机跟随飞机后方
    const camOffset = new Vector3(0, 6, -15);
    const camTarget = player.position.clone().add(camOffset.applyQuaternion(player.quaternion));
    camera.position.lerp(camTarget, 0.15); // 平滑跟随
    camera.lookAt(player.position);

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.position.add(bullet.userData.direction.clone());

        // Remove bullets that are too far
        if (bullet.position.distanceTo(player.position) > 200) {
            scene.remove(bullet);
            bullets.splice(i, 1);
        }
    }

    // Spawn enemies
    if (time - gameState.lastEnemySpawn > gameState.enemySpawnInterval) {
        createEnemy();
        gameState.lastEnemySpawn = time;
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        // 只沿z轴负方向直线飞行
        enemy.position.z -= 0.5;
        // y坐标限制
        enemy.position.y = Math.max(5, Math.min(50, enemy.position.y));
        // 敌机有概率发射子弹
        if (Math.random() < 0.01) {
            enemyShoot(enemy);
        }
        // 移除超出范围的敌机
        if (enemy.position.z < player.position.z - 20) {
            scene.remove(enemy);
            enemies.splice(i, 1);
            continue;
        }
        // 检查被玩家子弹击中
        for (let j = bullets.length - 1; j >= 0; j--) {
            const distance = enemy.position.distanceTo(bullets[j].position);
            if (distance < 2) {
                scene.remove(enemy);
                scene.remove(bullets[j]);
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                break;
            }
        }
    }

    // 更新敌机子弹
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const bullet = enemyBullets[i];
        bullet.position.add(bullet.userData.direction.clone().multiplyScalar(0.5));
        // 检查是否击中玩家
        if (bullet.position.distanceTo(player.position) < 2) {
            // TODO: 玩家被击中后的处理（如爆炸、扣血等）
            scene.remove(bullet);
            enemyBullets.splice(i, 1);
            continue;
        }
        // 超出范围移除
        if (bullet.position.distanceTo(player.position) > 300) {
            scene.remove(bullet);
            enemyBullets.splice(i, 1);
        }
    }

    renderer.render(scene, camera);
}

animate();
