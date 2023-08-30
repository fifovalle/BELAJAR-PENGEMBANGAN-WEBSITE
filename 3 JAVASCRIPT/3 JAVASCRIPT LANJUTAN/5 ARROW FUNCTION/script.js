// FUNCTION EXPREESION
// const menampilkanNama = function (nama) {
//   return `Halo ${nama}`;
// };

// console.log(menampilkanNama("Naufal"));

// ARRO FUNCTION
// const menampilkanNama = (nama) => `Halo ${nama}`;
// console.log(menampilkanNama("Naufal"));

// const menampilkanNamadanWaktu = (nama, waktu) => {
//   return `Selamat ${waktu} ${nama}`;
// };

// console.log(menampilkanNamadanWaktu("Naufal", "Malam"));

// const menampilkanNama = () => `Halo Dunia`;
// console.log(menampilkanNama());

// let pemain = ["Naufal", "Doni", "Salaman"];

// let jumlahHuruf = pemain.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = pemain.map((nama) => ({
//   nama,
//   jumlahHuruf: nama.length,
// }));

// console.table(jumlahHuruf);

// const Pemain = function () {
//   this.nama = "Naufal";
//   this.umur = 13;
//   this.katakanHalo = function () {
//     console.log(`Halo Nama Saya ${this.nama}, dan saya ${this.umur} Tahun`);
//   };
// };

// const Naufal = new Pemain();

// ARROW FUNCTION
// const Pemain = function () {
//   this.nama = "Naufal";
//   this.umur = 13;
//   this.katakanHalo = function () {
//     console.log(`Halo Nama Saya ${this.nama}, dan saya ${this.umur} Tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const Naufal = new Pemain();

const kotak = document.querySelector(".kotak");

kotak.addEventListener("click", function () {
  let satu = "ukuran";
  let dua = "ubahwarna";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
