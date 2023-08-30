// function funSaya(a, b, ...argumensaya) {
//   return `nilai a ${a}, nilai b ${b}, argumentsaya ${argumensaya}`;
// }

// console.log(funSaya(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// const kelompok10 = ["Naufal", "Fadhil", "Ihsan", "Haha", "hihi"];
// const [ketua, wakil, ...anggota] = kelompok10;

// console.log(anggota);

// const tim = {
//   pm: "Naufal",
//   frontEnd1: "Ihsan",
//   frontEnd2: "Fadhil",
//   backEnd: "Ahsan",
//   ux: "Agus",
//   devOps: "Ash Shidqi",
// };

// const { pm, ...timsaya } = tim;
// console.log(timsaya);

function saringOleh(tipe, ...nilai) {
  return nilai.filter((f) => typeof f === tipe);
}

console.log(saringOleh("boolean", 1, 2, "Haha", false, true, 10));
