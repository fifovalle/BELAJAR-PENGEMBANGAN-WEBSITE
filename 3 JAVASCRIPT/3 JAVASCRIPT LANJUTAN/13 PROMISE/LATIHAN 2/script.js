// const tombolCari = document.querySelector(".tombol-cari");
// tombolCari.addEventListener("click", function () {
//   const masukankatakunci = document.querySelector(".masukan-katakunci");
//   fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + masukankatakunci.value)
//     .then((aksi) => aksi.json())
//     .then((aksi) => {
//       const film = aksi.Search;
//       let kartu = "";
//       film.forEach((f) => {
//         kartu += tampilkanKartu(f);
//         const wadahFilm = document.querySelector(".wadah-film");
//         wadahFilm.innerHTML = kartu;

//         const detailModal = document.querySelectorAll(".detail-modal");
//         detailModal.forEach((tmb) => {
//           tmb.addEventListener("click", function () {
//             const imdbid = this.dataset.imdbid;
//             fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=" + imdbid)
//               .then((aksi) => aksi.json())
//               .then((f) => {
//                 const detailFilm = tampilkanDetailFilm(f);
//                 const modalBody = document.querySelector(".modal-body");
//                 modalBody.innerHTML = detailFilm;
//               });
//           });
//         });
//       });
//     });
// });

const tombolCari = document.querySelector(".tombol-cari");
tombolCari.addEventListener("click", async function () {
  const masukankatakunci = document.querySelector(".masukan-katakunci");
  const film = await ambilFilm(masukankatakunci.value);
  perbaharuiUI(film);
});

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("detail-modal")) {
    const imdbid = e.target.dataset.imdbid;
    const detailfilm = await ambilDetailFilm(imdbid);
    perbaharuiUIdetail(detailfilm);
  }
});

function ambilDetailFilm(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=" + imdbid)
    .then((aksi) => aksi.json())
    .then((f) => f);
}

function perbaharuiUIdetail(f) {
  const detailFilm = tampilkanDetailFilm(f);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = detailFilm;
}

function ambilFilm(katakunci) {
  return fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + katakunci)
    .then((aksi) => aksi.json())
    .then((aksi) => aksi.Search);
}

function perbaharuiUI(film) {
  let kartu = "";
  film.forEach((f) => {
    kartu += tampilkanKartu(f);
    const wadahFilm = document.querySelector(".wadah-film");
    wadahFilm.innerHTML = kartu;
  });
}

function tampilkanKartu(f) {
  return ` <div class="col-md-4 my-5">
    <div class="card">
        <img src="${f.Poster}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${f.Title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${f.Year}</h6>
            <a href="#" class="btn btn-primary detail-modal" data-bs-toggle="modal" data-bs-target="#DetailFilm" data-imdbid="${f.imdbID}">Tampilkan Detail</a>
        </div>
    </div>
</div>`;
}

function tampilkanDetailFilm(f) {
  return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${f.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item">
                    <h4>${f.Title} (${f.Year})</h4>
                </li>
                <li class="list-group-item"><strong>Director : </strong> ${f.Director}</li>
                <li class="list-group-item"><strong>Penulis :</strong>${f.Writer}</li>
                <li class="list-group-item"><strong>Plot :</strong><br> ${f.Plot} </li>
            </ul>
        </div>
    </div>
</div>`;
}
