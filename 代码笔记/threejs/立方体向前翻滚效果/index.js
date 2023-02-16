
// 渲染器
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);
// 场景
const scene = new THREE.Scene();
// 摄像机
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 灯光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
light.castShadow = true;
light.shadow.bias = 0.0001;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
scene.add(light);

// 立方体
const cubeGeometry = new THREE.CubeGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-0.5, 0.5, 0);
cube.rotation.set(0, 0, 0);
cube.castShadow = true;

// 立方体支撑点物体
const pivot = new THREE.Object3D();
pivot.add(cube);
scene.add(pivot);

// 创建平面
const planeGeometry = new THREE.PlaneGeometry(30, 15);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.set(-Math.PI / 2, 0, 0);
plane.receiveShadow = true;
scene.add(plane);

function update() {
    pivot.rotation.z -= 0.02;
    if (pivot.rotation.z < -Math.PI / 2) {
        pivot.rotation.z = 0;
        pivot.position.x += 1;
        if (pivot.position.x >= 8) {
            pivot.position.x = -2;
        }
    }
}

function render() {
    requestAnimationFrame(render);
    update();
    renderer.render(scene, camera);
}

// 实时渲染刷新
render();