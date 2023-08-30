//  DOM SELECTION
// document.getElementById -> Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "black";

// document.getElementById -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "black";
  p[i].style.color = "white";
}

// document.getElementsByClassName -> HTMLCollection
const p1 = (document.getElementsByClassName("p1")[0].innerHTML =
  "Telah Di Hek");

// document.querySelector
const p4 = document.querySelector("#b p");
p4.style.backgroundColor = "green";

const l2 = document.querySelector("section#b ul li:nth-child(2)");
l2.style.backgroundColor = "black";

//  document.querySelectorAll
const p2 = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "white";
  p[i].style.color = "black";
}
