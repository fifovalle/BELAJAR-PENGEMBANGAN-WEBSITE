let pindai = new THREE.Scene();
let kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
);
let penyaji = new THREE.WebGLRenderer();

penyaji.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(penyaji.domElement);

kamera.position.z = 5;

const bentukSaya = new THREE.BufferGeometry();
let partikel = new Float32Array([
  -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
  -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
]);
let warna = new Float32Array([
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0,

  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
]);
bentukSaya.setAttribute("position", new THREE.BufferAttribute(partikel, 3));
bentukSaya.setAttribute("color", new THREE.BufferAttribute(warna, 3));
bentukSaya.setIndex([
  0, 3, 1, 1, 2, 0, 4, 6, 5, 5, 7, 4, 4, 0, 2, 2, 6, 4, 5, 1, 3, 3, 7, 5, 1, 5,
  6, 6, 2, 1, 0, 4, 7, 7, 3, 0,
]);

const materiSaya = new THREE.MeshBasicMaterial({
  vertexColors: true,
});
let objekSaya = new THREE.Mesh(bentukSaya, materiSaya);
pindai.add(objekSaya);

window.addEventListener("resize", function () {
  penyaji.setSize(window.innerWidth, window.innerHeight);
  kamera.aspect = window.innerWidth / window.innerHeight;
  kamera.updateProjectionMatrix();
});

function gambar() {
  objekSaya.rotation.y += 0.01;
  objekSaya.rotation.x += 0.01;
  requestAnimationFrame(gambar);
  penyaji.render(pindai, kamera);
}

gambar();

penyaji.render(pindai, kamera);
