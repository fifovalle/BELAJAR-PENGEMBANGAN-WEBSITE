// const tutup = document.querySelector(".close");
// const wadah = document.querySelector(".card");

// tutup.addEventListener("click", function () {
//   wadah.style.display = "none";
// });

// DOM TRAVERSAL
const tutup = document.querySelectorAll(".close");

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

tutup.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
