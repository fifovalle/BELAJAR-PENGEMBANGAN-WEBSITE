var i,
  j,
  s = "";
for (i = 0; i < 5; i++) {
  for (j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
