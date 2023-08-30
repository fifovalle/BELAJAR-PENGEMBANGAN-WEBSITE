var tanya = true;
while (tanya) {
  var p = prompt("Silahkan Pilih : kertas, gunting, batu");

  var kom = Math.random();

  if (kom < 0.34) {
    kom = "gunting";
  } else if (kom > 0.34 && kom < 0.67) {
    kom = "kertas";
  } else {
    kom = "batu";
  }

  var hasil = "";

  if (p == kom) {
    hasil = "SERI";
  } else if (p == "gunting") {
    hasil = kom == "kertas" ? "MENANG!" : "KALAH!";
  } else if (p == "kertas") {
    hasil = kom == "batu" ? "MENANG!" : "KALAH!";
  } else if (p == "batu") {
    hasil = kom == "kertas" ? "MENANG!" : "KALAH!";
  } else {
    hasil = "Anda Memasukan Pilihan Yang Tidak Ada";
  }

  alert(
    "Anda Memilih : " +
      p +
      " Serta Komputer Memilih : " +
      kom +
      " Maka Anda : " +
      hasil
  );
  tanya = confirm("Anda Mau Main Lagi?");
}

alert("bye");
