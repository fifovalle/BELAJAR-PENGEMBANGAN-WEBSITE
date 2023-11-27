// import * as THREE from "./node_modules/three/build/three.module.js";
import * as THREE from "three";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

const bagian = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const merender = new THREE.WebGLRenderer();

merender.setSize(window.innerWidth, window.innerHeight);
kamera.position.z = 5;

document.body.appendChild(merender.domElement);

const kontrol = new OrbitControls(kamera, merender.domElement);

const kotak = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
bagian.add(kotak);

const gambar = () => {
  kontrol.update();
  kotak.rotation.x += 0.01;
  kotak.rotation.z += 0.01;
  merender.render(bagian, kamera);
  requestAnimationFrame(gambar);
};

gambar();
