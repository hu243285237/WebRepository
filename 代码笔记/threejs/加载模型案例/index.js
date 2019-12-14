/*
    需要在本地搭服务器才能运行

    否则会有跨域的问题
*/

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
    camera.position.y = 50;
    camera.position.z = 1000;
}

// 初始化场景
var scene;
function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
}

// 初始化灯光
var light;
function initLight() {
    light1 = new THREE.AmbientLight(0xFFFFFF, 10.0, 0);
    light2 = new THREE.DirectionalLight(0xFFFFFF, 12.0, 0);
    light2.position.set(100, 100, 200);
    scene.add(light1);
    scene.add(light2);
}

// 初始化物体
var earth;
function initObject() {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("./earth/earth.mtl", function(material) {
        material.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(material);
        objLoader.load("./earth/earth.obj", function(object) {
            object.position.set(0, 0, 0);
            earth = object;
            scene.add(object);
        });
    });
}

// 实时渲染
function render() {
    update();
    renderer.clear();
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

function update() {
    if (earth) {
        earth.rotation.y += 0.01;
    }
}