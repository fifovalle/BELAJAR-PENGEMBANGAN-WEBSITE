function Faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * Faktorial(n - 1);
}

console.log(Faktorial(5));
