import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    MeshStandardMaterial,
    Mesh,
    Vector3,
    Group,
    BoxGeometry,
    SphereGeometry,
    Clock, MathUtils,
} from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CustomEnv } from './CustomEnv.ts';
import { Player } from './Player.ts';

const canvas = document.createElement("canvas");
const root = document.getElementById("root");
root.appendChild(canvas);

// renderer
const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance",
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// scene camera
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 环境系统
const env = new CustomEnv(scene, renderer);

const player = new Player();
scene.add(player);

// Bullets array and enemy array
const bullets = [];
const enemies = [];

// 敌机子弹数组
const enemyBullets = [];

// Game state
const gameState = {
    lastEnemySpawn: 0,
    enemySpawnInterval: 2000,
};

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
window.addEventListener('keydown', (event) => {
    player.handleKeyDown(event.key);
    if (event.code === 'Space') {
        createBullet();
    }
});
window.addEventListener('keyup', (event) => {
    player.handleKeyUp(event.key);
});

// window resize
const onResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}

onResize();
window.addEventListener("resize", onResize);

const clock = new Clock();

// loop
function animate() {
    requestAnimationFrame(animate);
    const dTime = clock.getDelta();
    const eTime = clock.getElapsedTime() * 1000;

    env.updateWater(dTime);

    player.onUpdate(dTime, eTime);

    // 摄像机跟随飞机后方
    const camOffset = new Vector3(0, 5.5, -15);
    const camTarget = player.position.clone().add(camOffset.applyQuaternion(player.quaternion));
    camera.position.lerp(camTarget, 0.2); // 平滑跟随
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
    if (eTime - gameState.lastEnemySpawn > gameState.enemySpawnInterval) {
        createEnemy();
        gameState.lastEnemySpawn = eTime;
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        // 只沿z轴负方向直线飞行
        enemy.position.z -= 0.5;
        // y坐标限制
        enemy.position.y = MathUtils.clamp(enemy.position.y, 5, 50);
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
