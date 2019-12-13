
// 初始化渲染器
var renderer;
function initThree() {
    width = document.getElementById("canvas-frame").clientWidth;
    height = document.getElementById("canvas-frame").clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById("canvas-frame").appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

// 初始化摄像机
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    /*camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });*/
}

// 初始化场景
var scene;
function initScene() {
    scene = new THREE.Scene();
}

// 初始化灯光
var light;
function initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
}

// 初始化物体
var line;
function initObject() {
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    var color1 = new THREE.Color(0x444444);
    var color2 = new THREE.Color(0xFF0000);
    var point1 = new THREE.Vector3(-100, 0, 100);
    var point2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(point1);
    geometry.vertices.push(point2);
    geometry.colors.push(color1, color2);
    line = new THREE.Line(geometry, material, THREE.LineSegments);
    scene.add(line);
}



// 实时渲染
function render() {
    renderer.clear();
    camera.rotation.x += 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

// 开始
function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    render();
}