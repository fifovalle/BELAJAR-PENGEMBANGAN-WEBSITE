const button = document.getElementById("ubahwarna");
button.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lightgreen";
  // document.body.setAttribute("class", "putih");
  document.body.classList.toggle("hijaumuda");
});

const tombolacak = document.createElement("button");
const tekstombol = document.createTextNode("acak warna");
tombolacak.appendChild(tekstombol);
tombolacak.setAttribute("type", "button");
button.after(tombolacak);

tombolacak.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const SliderM = document.querySelector("input[name=sMerah]");
const SliderG = document.querySelector("input[name=sHijau]");
const SliderB = document.querySelector("input[name=sBiru]");

function updateBackgroundColor() {
  const r = SliderM.value;
  const g = SliderG.value;
  const b = SliderB.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

SliderM.addEventListener("input", updateBackgroundColor);
SliderG.addEventListener("input", updateBackgroundColor);
SliderB.addEventListener("input", updateBackgroundColor);
