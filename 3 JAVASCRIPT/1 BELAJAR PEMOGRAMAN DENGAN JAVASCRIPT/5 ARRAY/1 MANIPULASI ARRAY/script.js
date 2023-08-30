// MENAMBAH ARRAY MANUAL
var array = [];
array[0] = "Naufal";
array[1] = "Fadhil";
array[2] = "Ihsan";
array[3] = "Fikri";
array[4] = "Ash Shidqi";
console.log(array);

// MENGHAPUS ARRAY MANUAL
var array = ["Naufal", "Fadhil", "Ihsan", "Fikri", "Ash Shidqi"];
array[3] = undefined;
console.log(array);

// MENAMPILKAN ARRAY
var i,
  array = ["Naufal", "Fadhil", "Ihsan", "Fikri", "Ash Shidqi"];

for (i = 0; i < array.length; i++) {
  console.log("Mahasiswa Ke - " + (i + 1) + " : " + array[i]);
}

// METHOD ARRAY JOIN
var array = ["Naufal", "Fadhil", "Ihsan", "Fikri", "Ash Shidqi"];
// METHOD ARRAY PUSH POP
array.push("Dodit", "Doni");
array.pop();
// METHOD UNSHIFT SHIFT
array.unshift("Jamal");
array.shift();
// METHOD SPLICE SLICE
array.splice(2, 0, "Doni");
var array2 = array.slice(1, 3);
console.log(array.join(" "));
console.log(array2.join(" "));

// FOREACH;
var angka = [1, 2, 3, 4, 5];

angka.forEach(function (a) {
  console.log(a);
});

// MAP;
var angka = [1, 2, 3, 4, 5];

var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" "));

//  SORT
var angka = [2, 3, 1, 4, 5, 10];

angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" "));

// FIND AND FILTER
var angka = [1, 2, 3, 4, 5, 4, 7, 10, 20];
var angka2 = angka.filter(function (e) {
  return e > 5;
});
console.log(angka2.join(" "));

var angka = [1, 2, 3, 4, 5, 4, 7, 10, 20];
var angka2 = angka.find(function (e) {
  return e > 5;
});
console.log(angka2);
