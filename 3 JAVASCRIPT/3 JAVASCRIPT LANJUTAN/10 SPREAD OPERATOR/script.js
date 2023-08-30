// SPREAD OPERATOR

// const pemain = ["Naufal", "Presan", "Udin"];
// console.log(...pemain[0]);

// MENGGABUNGKAN 2 ARRAY
// const pemain = ["Naufal", "Presan", "Udin"];
// const tingkatjago = ["Pro", "Noob"];
// const gabung = [...pemain, "hai", ...tingkatjago];

// console.log(gabung);

// MENGKOPI ARRAY
// const pemain = ["Naufal", "Presan", "Udin"];

// const pemain1 = [...pemain];
// pemain1[0] = "bang";

// console.log(pemain1);

// const liNama = document.querySelectorAll("li");

// const nama = [...liNama].map((n) => n.textContent);
// console.log(nama);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
