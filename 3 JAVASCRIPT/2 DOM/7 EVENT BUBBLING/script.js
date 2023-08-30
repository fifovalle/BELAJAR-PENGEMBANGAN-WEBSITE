// const tutup = document.querySelector(".close");
// const wadah = document.querySelector(".card");

// tutup.addEventListener("click", function () {
//   wadah.style.display = "none";
// });

// DOM TRAVERSAL
// const tutup = document.querySelectorAll(".close");

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

// tutup.forEach(function (i) {
//   i.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const kartu = document.querySelectorAll(".card");
// kartu.forEach(function (kartus) {
//   kartus.addEventListener("click", function () {
//     alert("ok");
//   });
// });

const wadah = document.querySelector(".container");

wadah.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
