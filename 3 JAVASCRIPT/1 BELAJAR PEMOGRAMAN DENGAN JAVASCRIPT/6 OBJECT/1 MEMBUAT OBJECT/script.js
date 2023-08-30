// Object Literal
var profil = {
  nama: "Naufal FIFA",
  umur: 20,
  email: "fifanaufal10@gmail.com",
  jurusan: "Teknik Informatika",
};

// Funtion Declaration
function buatObject(nama, umur, email, jurusan) {
  var profil = {};
  profil.nama = nama;
  profil.umur = umur;
  profil.email = email;
  profil.jurusan = jurusan;
  return profil;
}

console.log(buatObject("naufal", 14, "fifanaufal10@gmail.com", "Teknik"));

// Construtor
function Profil(nama, umur, email, jurusan) {
  this.nama = nama;
  this.umur = umur;
  this.email = email;
  this.jurusan = jurusan;
}

var profil1 = new Profil("naufal", 14, "fifanaufal10@gmail.com", "Teknik");

console.log(profil1);
