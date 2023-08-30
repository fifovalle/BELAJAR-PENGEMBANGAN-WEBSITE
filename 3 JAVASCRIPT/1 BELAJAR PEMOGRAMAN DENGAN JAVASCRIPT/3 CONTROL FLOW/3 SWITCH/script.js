var makanan = prompt("Masukan Makanan : " + "Contoh 'Nasi' 'Burger'");

switch (makanan) {
  case "nasi":
    alert("Makanan Sehat");
    break;
  case "burger":
    alert("Makanan Tidak Sehat");
    break;
  default:
    alert("Input Yang Anda Masukan Tidak Valid");
    break;
}
