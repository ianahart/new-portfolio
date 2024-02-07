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

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({
  color: 0x007fff,
  flatShading: false,
  metalness: 0.01,
  roughness: 0,
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var geometry = new THREE.BoxGeometry(3, 3, 3);
var material = new THREE.MeshStandardMaterial({
  color: '#dadada',
  wireframe: true,
  transparent: true,
});
var wireframeCube = new THREE.Mesh(geometry, material);
scene.add(wireframeCube);

const color = 0xffffff;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.14;
  cube.rotation.y += 0.04;
  wireframeCube.rotation.x -= 0.01;
  wireframeCube.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();
