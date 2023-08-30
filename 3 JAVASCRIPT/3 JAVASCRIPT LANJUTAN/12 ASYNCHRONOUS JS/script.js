// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanPesan(panggil) {
//   const nama = prompt("Masukan Nama Anda : ");
//   panggil(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`Halo ${nama}`);
// });

// const Pemain = [
//   {
//     nama: "Naufal",
//     email: "fifovalle@gmail.com",
//     idPemain: 1,
//   },
//   {
//     nama: "Fadhil",
//     email: "fadhil@gmail.com",
//     idPemain: 2,
//   },
//   {
//     nama: "Ihsan",
//     email: "ihsan@gmail.com",
//     idPemain: 3,
//   },
// ];

// console.log("Mulai");
// Pemain.forEach((P) => {
//   for (let i = 0; i < 100; i++) {
//     let tanggal = new Date();
//   }
//   console.log(P.nama);
// });
// console.log("Selesai");

// function ambilDataPemain(url, berhasil, gagal) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         berhasil(xhr.response);
//       } else if (xhr.status === 404) {
//         gagal();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// ambilDataPemain(
//   "data/pemain.json",
//   (hasil) => {
//     const pemain = JSON.parse(hasil);
//     pemain.forEach((p) => {
//       console.log(p.nama);
//     });
//   },
//   () => {}
// );
// console.log("selesai");

// JQUERY
console.log("mulai");
$.ajax({
  url: "data/pemain.json",
  success: (pemain) => {
    pemain.forEach((p) => {
      console.log(p.nama);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
