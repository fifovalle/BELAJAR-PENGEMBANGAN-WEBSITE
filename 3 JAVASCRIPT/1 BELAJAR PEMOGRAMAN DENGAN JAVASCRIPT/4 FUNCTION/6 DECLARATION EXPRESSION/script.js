// FUNCTION DECLARATION
console.log(Faktorial1(5));

function Faktorial1(n) {
  if (n === 0) {
    return 1;
  }
  return n * Faktorial1(n - 1);
}

// FUNCTION EXPRESSION
var Faktorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * Faktorial(n - 1);
};
console.log(Faktorial(5));
