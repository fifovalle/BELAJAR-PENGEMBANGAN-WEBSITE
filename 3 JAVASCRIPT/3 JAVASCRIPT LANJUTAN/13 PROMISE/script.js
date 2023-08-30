// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (film) => console.log(film),
// });

// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// let ditepati = true;
// const janji = new Promise((selesaikan, ditolak) => {
//   if (ditepati) {
//     selesaikan("Janji Telah Ditepati");
//   } else {
//     ditolak("Ingkar Janji");
//   }
// });

// janji
//   .then((aksi) => console.log(`OK! ${aksi}`))
//   .catch((aksi) => console.log(`NOT OK! ${aksi}`));

// console.log(janji);

// let ditepati = true;
// const janji = new Promise((diselesaikan, ditolak) => {
//   if (ditepati) {
//     setTimeout(() => {
//       diselesaikan("Ditepati Tapi Nunggu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       diselesaikan("Tidak Ditepati Tapi Nunggu!");
//     }, 2000);
//   }
// });

// console.log("Mulai");
// console.log(janji.then(() => console.log(janji)));
// janji
//   .finally(() => console.log("selesai Menunggu!"))
//   .then((aksi) => console.log(`OK! ${aksi}`))
//   .catch((aksi) => console.log(`NOT OK! ${aksi}`));
// console.log("Selesai");

// const film = new Promise((selesai) => {
//   setTimeout(() => {
//     selesai([
//       {
//         judul: "Kundang Lumping",
//         aktor: "Naufal",
//         sutradara: "ha",
//       },
//     ]);
//   }, 1000);
// });

// const cuaca = new Promise((selesai) => {
//   setTimeout(() => {
//     selesai([
//       {
//         kota: "Bandung",
//         temperatur: "90 Derajat",
//       },
//     ]);
//   }, 500);
// });

// Promise.all([film, cuaca]).then((selesai) => {
//   const [film, cuaca] = selesai;
//   console.log(film);
//   console.log(cuaca);
// });
