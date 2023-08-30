// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Halo Dunia</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "HAHA";

// const judul = document.querySelector("#judul");
// judul.style.color = "white";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "judul");

// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("label");
// p2.classList.toggle("label");

// document.body.classList.toggle("biru_muda");

const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Baru");
// Simpan Tulisan Ke Paragraf
pBaru.appendChild(teksPBaru);
// Menyimpan PBaru Ke Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Li Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2");
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Hai");

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);
