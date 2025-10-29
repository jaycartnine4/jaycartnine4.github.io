let gridX = 0;
let gridY = 0;
let gridScale = 50;

const sizeX = 500;
const sizeY = 600;
const isoSlope = 1.733;

function draw() {
  const canvas = document.getElementById("grid");
  canvas.clientWidth = document.body.clientWidth;
  canvas.clientHeight = document.body.clientHeight;
  const ctx = canvas.getContext("2d");

  // X
  for (let i = 0; i < (sizeY + sizeX / isoSlope) / gridScale; i++) {
    const h = i * gridScale;
    const w = h * isoSlope;
    ctx.beginPath();
    ctx.moveTo(0, sizeY - h);
    ctx.lineTo(w, sizeY);
    ctx.closePath();
    ctx.stroke();
  }

  // Y
  for (let i = 0; i < sizeX / gridScale; i++) {
    const h = i * gridScale;
    const w = h * isoSlope;
    ctx.beginPath();
    ctx.moveTo(gridX + w / 2, 0);
    ctx.lineTo(gridX + w / 2, sizeY);
    ctx.closePath();
    ctx.stroke();
  }

  // Z
  for (let i = 0; i < (sizeY + sizeX / isoSlope) / gridScale; i++) {
    const h = i * gridScale;
    const w = h * isoSlope;
    ctx.beginPath();
    ctx.moveTo(sizeX, sizeY - h);
    ctx.lineTo(sizeX - w, sizeY);
    ctx.closePath();
    ctx.stroke();
  }
}

draw();
