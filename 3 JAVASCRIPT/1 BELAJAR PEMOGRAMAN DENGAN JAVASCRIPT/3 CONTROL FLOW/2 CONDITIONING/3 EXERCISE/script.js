var angkot = 1,
  nomorangkot = 6,
  jumlahangkot = 10;
for (angkot = angkot; angkot <= jumlahangkot; angkot++) {
  if (angkot <= nomorangkot && angkot !== 5) {
    console.log("Angkot No. " + angkot + " beroprasi dengan baik.");
  } else if (
    angkot === nomorangkot + 2 ||
    angkot === nomorangkot + 4 ||
    angkot === nomorangkot - 1
  ) {
    console.log("Angkot No. " + angkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + angkot + " sedang tidak beroprasi.");
  }
}
