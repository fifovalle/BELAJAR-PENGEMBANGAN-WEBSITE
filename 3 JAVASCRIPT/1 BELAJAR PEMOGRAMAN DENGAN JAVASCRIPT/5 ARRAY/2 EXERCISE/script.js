var penumpang = [];

function tambahPenumpang(NamaPenumpang, penumpang) {
  if (penumpang.includes(NamaPenumpang)) {
    console.log(NamaPenumpang + " Sudah Ada");
  } else {
    penumpang.push(NamaPenumpang);
  }
  return penumpang;
}

function hapusPenumpang(NamaPenumpang, penumpang) {
  var index = penumpang.indexOf(NamaPenumpang);
  if (index !== -1) {
    penumpang[index] = undefined;
  } else {
    console.log(NamaPenumpang + " Tidak Ada");
  }
  return penumpang;
}

console.log("Tambah Penumpang:");
console.log(tambahPenumpang("Naufal", penumpang));

console.log(tambahPenumpang("Fadhil", penumpang));

console.log(tambahPenumpang("Naufal", penumpang));

console.log("\nHapus Penumpang:");
console.log(hapusPenumpang("Fadhil", penumpang));

console.log(hapusPenumpang("Jamal", penumpang));

console.log("\nDaftar Penumpang Saat Ini:");
console.log(penumpang);
