var angkot = 1,
  nomorangkot = 6,
  jumlahangkot = 10;
for (angkot = angkot; angkot <= jumlahangkot; angkot++) {
  if (angkot <= nomorangkot) {
    console.log("Angkot No. " + angkot + " beroprasi dengan baik.");
  } else if (angkot === nomorangkot + 2) {
    console.log("Angkot No. " + angkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + angkot + " sedang tidak beroprasi.");
  }
}
