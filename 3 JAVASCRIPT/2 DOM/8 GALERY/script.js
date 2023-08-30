const wadah = document.querySelector(".wadah");
const besar = document.querySelector(".besar");
const tams = document.querySelectorAll(".tam");

wadah.addEventListener("click", function (e) {
  // Cek Yang Di Klik
  if (e.target.className == "tam") {
    besar.src = e.target.src;
    besar.classList.add("hilang");
    setTimeout(function () {
      besar.classList.remove("hilang");
    }, 500);
    tams.forEach(function (t) {
      t.classList = "tam";
    });
    e.target.classList.add("aktif");
  }
});
