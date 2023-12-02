let pindai = new THREE.Scene();
let kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
);
let penyaji = new THREE.WebGLRenderer();

let kotak = new THREE.BoxGeometry(1, 1, 1);
const greesTekstur = new THREE.TextureLoader().load("../texture/p.jpg");
const alphaTekstur = new THREE.TextureLoader().load("../texture/c.jpg");
const brickTekstur = new THREE.TextureLoader().load("../texture/a.jpg");

let kotakMateri = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  map: greesTekstur,
});
let kotakObjek = new THREE.Mesh(kotak, kotakMateri);
kotakObjek.position.set(-0.8, 1, 0);
pindai.add(kotakObjek);

let cahaya1 = new THREE.PointLight(0xffffff, 1);
cahaya1.position.set(0, 3, 2);
pindai.add(cahaya1);

let cahaya2 = new THREE.PointLight(0xffffff, 1);
cahaya2.position.set(0, -3, 2);
pindai.add(cahaya2);

let kotakMateri2 = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  map: greesTekstur,
  emissive: 0x00ff00,
  emissiveIntensity: 0.5,
  emissiveMap: alphaTekstur,
});
let kotakObjek2 = new THREE.Mesh(kotak, kotakMateri2);
kotakObjek2.position.set(1, 1, 0);
pindai.add(kotakObjek2);

let kotakMateri3 = new THREE.MeshPhongMaterial({
  map: greesTekstur,
  shininess: 100,
  bumpMap: brickTekstur,
});
let kotakObjek3 = new THREE.Mesh(kotak, kotakMateri3);
kotakObjek3.position.set(1, -1, 0);
pindai.add(kotakObjek3);

kamera.position.z = 5;
penyaji.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(penyaji.domElement);

window.addEventListener("resize", function () {
  penyaji.setSize(window.innerWidth, window.innerHeight);
  kamera.aspect = window.innerWidth / window.innerHeight;
  kamera.updateProjectionMatrix();
});

function gambar() {
  requestAnimationFrame(gambar);
  kotakObjek.rotation.x += 0.01;
  kotakObjek.rotation.y += 0.01;

  kotakObjek2.rotation.x += 0.01;
  kotakObjek2.rotation.y += 0.01;

  kotakObjek3.rotation.x += 0.01;
  kotakObjek3.rotation.y += 0.01;
  penyaji.render(pindai, kamera);
}

gambar();

penyaji.render(pindai, kamera);
