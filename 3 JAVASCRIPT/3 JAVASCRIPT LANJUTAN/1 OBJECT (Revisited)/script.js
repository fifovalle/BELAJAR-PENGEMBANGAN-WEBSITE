// OBJECT LITERAL
// let permain = {
//   nama: "Naufal",
//   stamina: 10,
//   tambahdarah: function (darah) {
//     this.stamina = this.stamina + darah;
//     console.log(
//       `Selamat Anda Bertambah Staminanya ${this.nama}, Selamat Makan`
//     );
//   },
// };

//  FUNTION DECLARATION
// function Pemain(nama, stamina) {
//   let pemain = {};
//   pemain.nama = nama;
//   pemain.stamina = stamina;

//   pemain.tambahdarah = function (darah) {
//     this.stamina += darah;
//     console.log(`Halo ${this.nama}, Selamat Bertambah Staminanya`);
//   };
//   pemain.kalah = function (darah) {
//     this.stamina -= darah;
//     console.log(`Yah Anda ${this.nama} Kalah`);
//   };
//   return pemain;
// }

// let naufal = Pemain("Naufal", 10);
// let saha = Pemain("saha", 20);

// CONSTRUCTOR
function Pemain(nama, stamina) {
  this.nama = nama;
  this.stamina = stamina;

  this.tambahdarah = function (darah) {
    this.stamina += darah;
    console.log(`Halo ${this.nama}, Selamat Bertambah Staminanya`);
  };
  this.kalah = function (darah) {
    this.stamina -= darah;
    console.log(`Yah Anda ${this.nama} Kalah`);
  };
}

let naufal = new Pemain("Naufal", 10);
