// const nama = "Naufal";
// const umur = 20;
// console.log(`Halo Nama Saya ${nama} Dan Saya ${umur} Tahun`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

// const pemain = {
//   nama: "Naufal",
//   umur: 20,
//   email: "fifanaufal10@gmail.com",
// };

// const el = `<div class="pemian">
//   <h2>${pemain.nama}</h2>
//   <span class="umur">${pemain.umur}</span>
// </div>`;

// const pemain = [
//   {
//     nama: "Naufal",
//     email: "20@gamil.com",
//   },
//   {
//     nama: "Edan",
//     email: "ewan.com",
//   },
// ];

// const el = `<div class="pemain">
// ${pemain
//   .map(
//     (p) => `<ul class="">
// <li>${p.nama}</li>
// <li>${p.email}</li>
// </ul>`
//   )
//   .join(" ")}
// </div>`;

// const hp = {
//   nama: "Android",
//   punya: "Naufal",
// };

// const el = `<div class="hp">
//   <ul>
//     <li>${hp.nama}</li>
//     <li>${hp.punya ? `(punya . ${hp.punya})` : ""}</li>
//   </ul>
// </div>`;

// document.body.innerHTML = el;

const nama = "Naufal";
const umur = 20;

function mencoba(kata, ...nilai) {
  return kata.reduce(
    (hasil, kata1, i) => `${hasil}${kata1}${nilai[i] || ""}`,
    ""
  );
}

const kata_kata = mencoba`Halo Guys Saya ${nama} Saya ${umur} Tahun `;
console.log(kata_kata);
