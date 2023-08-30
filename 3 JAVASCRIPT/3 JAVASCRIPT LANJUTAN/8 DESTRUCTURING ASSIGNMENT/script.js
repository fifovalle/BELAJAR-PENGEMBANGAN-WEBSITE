// const profil = ["Halo", "saya", "naufal"];

// const [salam, satu, dua] = profil;
// console.log(dua);

// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// function mencoba() {
//   return [1, 2];
// }

// const [c, d] = mencoba();
// console.log(c);

// const [a, ...nilai] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(nilai);

// const Pemain = {
//   nama: "Naufal",
//   umur: 20,
// };

// const { nama: n, umur: u } = Pemain;
// console.log(u);

// function Aritmatika(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     bagi: a / b,
//     kali: a * b,
//   };
// }

// const { kurang, bagi, kali, tambah } = Aritmatika(3, 4);

// console.log(kurang);

const Pemain = {
  nama: "Naufal",
  umur: 20,
  skor: {
    skor1: 10,
    skor2: 20,
    skor3: 30,
  },
};

function cetakPemain({ nama, umur, skor: { skor1, skor2, skor3 } }) {
  return `Halo pemain ${nama} dengan umur ${umur} skor anda ${skor2}`;
}

console.log(cetakPemain(Pemain));
