// function inialisasi() {
//   return function menampilkanNama(nama) {
//     console.log(nama);
//   };
// }
// let memanggilNama = inialisasi();
// memanggilNama("Maug");
// memanggilNama("Naufal");

// function haloDunia(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama} Selamat ${waktu}`);
//   };
// }

// let pagi = haloDunia("Pagi");
// let siang = haloDunia("Siang");
// let malam = haloDunia("Malam");

// pagi("Naufal");
// malam("Edan");

let Tambah = (function () {
  let Penghitung = 0;
  return function () {
    return ++Penghitung;
  };
})();

Penghitung = 100;

console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
console.log(Tambah());
