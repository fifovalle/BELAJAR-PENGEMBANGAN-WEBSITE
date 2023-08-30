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
// const PrilakuPemain = {
//   tambahstamina: function (stamina) {
//     this.stamina += stamina;
//     console.log(`Halo ${this.nama}, Selamat Bertambah Staminanya`);
//   },

//   kalah: function (stamina) {
//     this.stamina -= stamina;
//     console.log(`Yah Anda ${this.nama} Kalah`);
//   },

//   bertapa: function (stamina) {
//     this.stamina += stamina * 2;
//     console.log(`Gila ${this.nama} Stamina Kamu Nambah 2 Kali Lipat`);
//   },
// };

// function Pemain(nama, stamina) {
//   let pemain = Object.create(PrilakuPemain);
//   pemain.nama = nama;
//   pemain.stamina = stamina;

//   return pemain;
// }

// let naufal = Pemain("Naufal", 10);
// let saha = Pemain("saha", 20);

// CONSTRUCTOR
// function Pemain(nama, stamina) {
//   this.nama = nama;
//   this.stamina = stamina;

//   this.tambahdarah = function (darah) {
//     this.stamina += darah;
//     console.log(`Halo ${this.nama}, Selamat Bertambah Staminanya`);
//   };
//   this.kalah = function (darah) {
//     this.stamina -= darah;
//     console.log(`Yah Anda ${this.nama} Kalah`);
//   };
// }

// let naufal = new Pemain("Naufal", 10);

// function Pemain(nama, stamina) {
//   this.nama = nama;
//   this.stamina = stamina;
// }

// Pemain.prototype.bertapa = function (darah) {
//   this.stamina += darah * 2;
//   return `Gila ${this.nama}, Stamina Kamu Bertambah 2 Kali Lipat`;
// };

// Pemain.prototype.kalah = function (darah) {
//   this.stamina -= darah;
//   return `Yah ${this.nama} Anda Kalah`;
// };

// let naufal = new Pemain("Naufal", 20);

// VERSI KELAS
class Pemain {
  constructor(nama, stamina) {
    this.nama = nama;
    this.stamina = stamina;
  }

  bertapa(darah) {
    this.stamina += darah * 2;
    return `Gila ${this.nama}, Stamina Kamu Bertambah 2 Kali Lipat`;
  }

  kalah(darah) {
    this.stamina -= darah;
    return `Yah ${this.nama} Anda Kalah`;
  }
}

let naufal = new Pemain("Naufal", 20);
let maug = new Pemain("Naufal", 30);
