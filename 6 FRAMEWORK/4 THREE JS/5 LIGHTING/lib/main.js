const pindai = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
);
const penyaji = new THREE.WebGLRenderer({ antialias: true });
penyaji.shadowMap.enabled = true;
penyaji.shadowMap.type = THREE.BasicShadowMap;

pindai.background = new THREE.Color(0xffffff);
penyaji.setSize(window.innerWidth, window.innerHeight);
kamera.position.z += 15;
document.body.appendChild(penyaji.domElement);

const kotak = new THREE.BoxGeometry(1, 1, 1);
const kotakMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const dadu = new THREE.Mesh(kotak, kotakMaterial);
dadu.castShadow = true;
dadu.receiveShadow = true;
pindai.add(dadu);

const plane = new THREE.PlaneGeometry(1000, 1000, 500, 500);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xaaffaa });
const planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.receiveShadow = true;
planeMesh.position.set(0, -1, 0);
planeMesh.rotation.x = -Math.PI / 2;
pindai.add(planeMesh);

const cahayaAmbien = new THREE.AmbientLight(0x404040);
pindai.add(cahayaAmbien);

const cahayaPoin = new THREE.PointLight(0xff0000, 10, 50);
cahayaPoin.position.set(2, 2, 2);
pindai.add(cahayaPoin);
pindai.add(new THREE.PointLightHelper(cahayaPoin, 1, 0x00ff00));

// const cahayaHemi = new THREE.HemisphereLight(0x0000ff, 0x000000, 0.6);
// pindai.add(cahayaHemi);

// const cahayaDireksi = new THREE.DirectionalLight(0x00ff00, 0.5);
// pindai.add(cahayaDireksi);
// cahayaDireksi.position.set(2, 2, 0);
// cahayaDireksi.target.position.set(3, 2, 0);
// cahayaDireksi.target.updateMatrixWorld();
// pindai.add(new THREE.DirectionalLightHelper(cahayaDireksi, 1, 0x00ff00));

const cahayaTitik = new THREE.SpotLight(0x0000ff, 0.5, 5, Math.PI / 10);
cahayaTitik.position.set(2, 2, 0);
cahayaTitik.castShadow = true;
pindai.add(cahayaTitik);
pindai.add(new THREE.SpotLightHelper(cahayaTitik, 1, 0x00ff00));

function gambar() {
  dadu.rotation.x += 0.01;
  dadu.rotation.z += 0.01;

  penyaji.render(pindai, kamera);
  requestAnimationFrame(gambar);
}
gambar();
