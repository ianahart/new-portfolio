import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
const threeContainer = document.querySelector<HTMLDivElement>('.three-container');

threeContainer!.appendChild(renderer.domElement);
camera.position.z = 5;

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const loader = new THREE.TextureLoader();

// Load textures for each side of the cube
const textures = [
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361791/snowboard_pic_06_ecwiyq.jpg'),
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361791/snowboard_pic_05_w1omce.jpg'),
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361790/snowboard_pic_04_pndey7.jpg'),
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361789/snowboard_pic_03_zezc3p.jpg'),
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361788/snowboard_pic_02_r9nebh.jpg'),
  loader.load('https://res.cloudinary.com/dap5r6vfu/image/upload/v1712361788/snowboard_pic_01_llpkyd.jpg'),
];

// Create materials with textures
const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));

// Create cube geometry with materials
const geometry = new THREE.BoxGeometry(3, 3, 3);
const cube = new THREE.Mesh(geometry, materials);

scene.add(cube);

const color = 0xffffff;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
