// for.of
// const Pemain = ["Naufal", "Edi", "Raihan"];

// for (const p of Pemain) {
//   console.log(p);
// }

// STRING
// const nama = "Naufal";
// for (const n of nama) {
//   console.log(n);
// }

// const Pemain = ["Naufal", "Edi", "Raihan"];

// for (const [i, p] of Pemain.entries()) {
//   console.log(`${p} adalah pemain yang ke - ${i + 1}`);
// }

// const liNama = document.querySelectorAll(".nama");

// for (l of liNama) {
//   console.log(l.innerHTML);
// }

// ARUGUMENT
function jumlahkanAngka() {
  let hasil = 0;
  for (a of arguments) {
    hasil += a;
  }
  return hasil;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// FOR IN
const Pemain = {
  nama: "Naufal",
  umur: 20,
};

for (p in Pemain) {
  console.log(Pemain[p]);
}
