//  AMBIL SEMUA ELEMEN DATA
const data = Array.from(document.querySelectorAll("[data-menit]"));

// PILIH HANYA DATA JS
let js = data
  .filter((data) => data.textContent.includes("JAVASCRIPT"))

  // AMBIL DURASI MASING MASING DATA
  .map((barang) => barang.dataset.menit)

  // UBAH DURASI MENJADI INT UBAH MENIT MENJADI DETIK
  .map((waktu) => {
    const bagian_bagian = waktu.split(":").map((bagian) => parseFloat(bagian));
    return bagian_bagian[0] * 60 + bagian_bagian[1];
  })
  // JUMLAHKAN SEMUA DETIKNYA
  .reduce((total, detik) => total + detik);
// UBAH FORMAT MENJADI JAM MENIT DETIK
const jam = Math.floor(js / 3600);
js -= jam + 3600;

const menit = Math.floor(js / 60);
const detik = js - menit * 60;
// SIMPAN DI DOM
const pMenit = document.querySelector(".total_durasi");
pMenit.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jumlah_data = data.filter((data) =>
  data.textContent.includes("JAVASCRIPT")
).length;
const pJumlahData = document.querySelector(".jumlah_data");
pJumlahData.textContent = `${jumlah_data} Data`;

console.log(jumlah_data);
