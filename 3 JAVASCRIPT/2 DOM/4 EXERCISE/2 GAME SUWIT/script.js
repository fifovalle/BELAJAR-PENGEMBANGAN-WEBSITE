function pilihkom() {
  const kom = Math.random();
  if (kom < 0.34) return "gajah";
  if (kom >= 0.34 && kom < 0.67) return "orang";
  return "semut";
}

function Aturan(kom, pemain) {
  if (pemain == kom) return "Seri!";
  if (pemain == "gajah") return kom == "orang" ? "Menang!" : "Kalah!";
  if (pemain == "orang") return kom == "gajah" ? "Menang!" : "Kalah!";
  if (pemain == "semut") return kom == "orang" ? "Menang!" : "Kalah!";
}

function acak() {
  const imgkom = document.querySelector(".img-komputer");
  const foto = ["gajah", "semut", "orang"];
  let i = 0;
  const Mulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - Mulai > 1000) {
      clearInterval;
      return;
    }
    imgkom.setAttribute("src", "img/" + foto[i++] + ".png");
    if (i == foto.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (gambar) {
  gambar.addEventListener("click", function () {
    const pilihanKom = pilihkom();
    const pilihanP = gambar.className;
    const hasil = Aturan(pilihanKom, pilihanP);
    acak();

    setTimeout(function () {
      const gambarkom = document.querySelector(".img-komputer");
      gambarkom.setAttribute("src", "img/" + pilihanKom + ".png");
      const informasi = document.querySelector(".info");
      informasi.innerHTML = hasil;
    }, 1000);
  });
});
