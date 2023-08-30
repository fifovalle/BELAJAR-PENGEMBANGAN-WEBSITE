function JumlahHitungKubus(a, b) {
  var hasil, kubus_a, kubus_b;
  kubus_a = a * a * a;
  kubus_b = b * b * b;

  hasil = kubus_a + kubus_b;
  return hasil;
}

alert(JumlahHitungKubus(8, 3));
alert(JumlahHitungKubus(30, 10));
