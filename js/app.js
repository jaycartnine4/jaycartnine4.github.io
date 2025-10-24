let gridX = 0
let gridY = 0
let gridScale = 50

const sizeX = 500;
const sizeY = 600;

function draw() {
  const canvas = document.getElementById("grid");
  const ctx = canvas.getContext("2d");

  // horizontal
  for(let i=0; i < sizeY / gridScale; i++) {
    ctx.fillStyle = "rgb(45 45 45)";
    ctx.fillRect(0, gridY+i*gridScale, sizeX, 1);
  }

  // vertical
  for(let i=0; i < sizeX / gridScale; i++) {
    ctx.fillStyle = "rgb(0145 0145 45 )";
    ctx.fillRect(gridX+i*gridScale, 0, 1, sizeY);
  }
}
draw();
