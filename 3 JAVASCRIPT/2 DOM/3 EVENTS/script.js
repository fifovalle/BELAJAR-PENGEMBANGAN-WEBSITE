const p3 = document.querySelector(".p3");

function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}

p3.onclick = ubahWarna;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const teksli = document.createTextNode("HAI");
  li.appendChild(teksli);
  ul.appendChild(li);
});
