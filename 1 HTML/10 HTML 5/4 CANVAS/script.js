const canvas_saya = document.querySelector("#canvassaya");

canvas_saya.width = window.innerWidth;
canvas_saya.height = window.innerHeight;

const c = canvas_saya.getContext("2d");

c.fillStyle = "brown";
c.strokeStyle = "red";
c.lineWidth = "5";

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();
let x = 300;
let y = 200;
let kecepatanX = 20;
let kecepatanY = 20;
let jari_jari = 150;

function gambar() {
  window.requestAnimationFrame(gambar);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.fillStyle = "black";
  c.beginPath();
  c.arc(x, y, jari_jari, 0, 2 * Math.PI);
  c.fill();
  c.stroke();
  if (x + jari_jari > innerWidth || x - jari_jari < 0) {
    kecepatanX = -kecepatanX;
  }

  if (y + jari_jari > innerHeight || y - jari_jari < 0) {
    kecepatanY = -kecepatanY;
  }

  y += kecepatanY;
  x += kecepatanX;
}

gambar();

// c.fillStyle = "pink";
// c.beginPath();
// c.moveTo(900, 50);
// c.lineTo(1050, 350);
// c.lineTo(750, 350);
// c.closePath();
// c.fill();
// c.stroke();
