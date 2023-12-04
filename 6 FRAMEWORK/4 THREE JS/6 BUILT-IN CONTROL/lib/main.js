const pindai = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const penyaji = new THREE.WebGLRenderer();

kamera.position.z += 5;
pindai.background = new THREE.Color(0x0a0a0a);
penyaji.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(penyaji.domElement);

const kotakGeo = new THREE.BoxGeometry(1, 1, 1);
const kotakMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const kotakMesh = new THREE.Mesh(kotakGeo, kotakMat);
pindai.add(kotakMesh);

const planeGeo = new THREE.PlaneGeometry(100, 100);
const planeMesh = new THREE.Mesh(
  planeGeo,
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
planeMesh.rotation.x -= Math.PI / 2;
planeMesh.position.y -= 0.5;
pindai.add(planeMesh);

let clock = new THREE.Clock();
let controls = new THREE.FirstPersonControls(kamera, penyaji.domElement);
controls.lookSpeed = 0.1;

function perbaharui() {
  controls.update(clock.getDelta());
  penyaji.render(pindai, kamera);
  requestAnimationFrame(perbaharui);
}
perbaharui();
