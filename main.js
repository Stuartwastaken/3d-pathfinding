import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';
import { OrbitControls } from './OrbitControls.js';

// Create a Scene
const scene = new THREE.Scene();

// Create a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a Sphere Geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Create a Material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Create a Sphere Mesh
const sphere = new THREE.Mesh(geometry, material);

// Add Sphere to Scene
scene.add(sphere);

// Create controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Start the Animation
animate();
