/*
    Scane 
    - 3D World
    Camera 
    - Untuk Melihat 3D World
    Renderer
    - Untuk Menampilkan 3D World
 */

let pindai = new THREE.Scene();
let kamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
);
let penyaji = new THREE.WebGLRenderer();

let kotak = new THREE.BoxGeometry(1, 1, 1);
let kotakMateri = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let kotakObjek = new THREE.Mesh(kotak, kotakMateri);

pindai.add(kotakObjek);
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
  kotakObjek.rotation.y += 0.01;
  penyaji.render(pindai, kamera);
}

gambar();

penyaji.render(pindai, kamera);
