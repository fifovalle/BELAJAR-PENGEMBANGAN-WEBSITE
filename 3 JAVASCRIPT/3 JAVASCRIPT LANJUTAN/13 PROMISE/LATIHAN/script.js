$(".tombol-cari").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" +
      $(".masukan-katakunci").val(),
    success: (hasil) => {
      const film = hasil.Search;
      let kartu = "";
      film.forEach((f) => {
        kartu += tampilkanKartu(f);
      });
      $(".wadah-film").html(kartu);

      $(".detail-modal").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
            $(this).data("imdbid"),
          success: (f) => {
            const detailFilm = tampilkanDetailFilm(f);

            $(".modal-body").html(detailFilm);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
