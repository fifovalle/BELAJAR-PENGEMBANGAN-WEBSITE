// const coba = new Promise((aksi) => {
//   setTimeout(() => {
//     aksi("Selesai");
//   }, 2000);
// });

function CobaPromise() {
  return new Promise((aksi, gagal) => {
    const waktu = 8000;
    if (waktu < 5000) {
      setTimeout(() => {
        aksi("Selesai");
      }, waktu);
    } else {
      gagal("Lola");
    }
  });
}

// const coba = CobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await CobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
