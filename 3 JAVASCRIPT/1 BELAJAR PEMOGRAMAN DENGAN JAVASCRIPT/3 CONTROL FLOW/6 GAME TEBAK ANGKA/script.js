alert("Tebak Angka Dari : 1  - 10 " + "\nAnda Mempunyai 3 Kesempatan");
var komputer = Math.floor(Math.random() * 11);
var kesempatan = 3;

do {
  var pemain = prompt("Masukan Angka Tebakan");
  var hasil;

  if (pemain === null) {
    break;
  }

  var tebakan = parseInt(pemain);

  if (tebakan === komputer) {
    hasil = "Anda Benar";
  } else {
    hasil = "Anda Salah";
  }

  kesempatan--;

  if (kesempatan > 0 && hasil === "Anda Salah") {
    alert("Kesempatan Anda: " + kesempatan);
  }
} while (hasil === "Anda Salah" && kesempatan > 0);

if (hasil !== "Anda Benar") {
  alert("Kesempatan Anda Habis. Angka yang benar adalah: " + komputer);
} else {
  alert(hasil);
}
