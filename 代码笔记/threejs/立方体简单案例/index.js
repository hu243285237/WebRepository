
// 场景 相机 渲染器
// 有了这三样东西，我们才能够使用相机将场景渲染到网页上去
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建立方体并将其添加进场景中
var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 设置摄像机的位置
camera.position.z = 3.5;

function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}

// 实时渲染刷新
render();