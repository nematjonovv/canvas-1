const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "chocolate";
// ctx.fillRect(0, 0, 100, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(300, 200, 100, 100)

// circle
// ctx.beginPath()
// ctx.arc(50, 250, 50, 0, Math.PI * 2)
// ctx.fillStyle = "green"
// ctx.fill()

// stroke
// ctx.beginPath()
// ctx.arc(350, 50, 50, 0, Math.PI * 2)
// ctx.strokeStyle = "black"
// ctx.lineWidth = 3
// ctx.stroke()

// line
// ctx.beginPath()
// ctx.moveTo(0, 300)
// ctx.lineTo(400, 0)
// ctx.strokeStyle = "red"
// ctx.lineWidth = 3
// ctx.stroke()

// more lines
// ctx.beginPath()
// ctx.moveTo(0, 100)
// ctx.lineTo(100, 100)
// ctx.lineTo(50, 200)
// ctx.closePath()
// ctx.fillStyle = "orange"
// ctx.fill()

// more line stroke
// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(50, 200)
// ctx.lineTo(150, 200)
// ctx.closePath()
// ctx.strokeStyle = "black"
// ctx.stroke()

// Text
// ctx.font = "30px Arial"
// ctx.fillStyle = "black"
// ctx.fillText("Canvas!", 150, 150)

// ctx.font = '30px Arial'
// ctx.strokeStyle = 'black'
// ctx.strokeText('Canvas!', 150, 200)

// Clear
// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, 400, 300);
// ctx.clearRect(50,50, 100, 100)

// Animation 1
// const circle = {
//   x: 100,
//   y: 100,
//   size: 17,
//   dx: 5,
//   dy: 4,
// };

// function drawCircle() {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = "purple";
//   ctx.fill();
// }

// function update() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle();
//   requestAnimationFrame(update);
//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//     circle.dx *= -1;
//   }
//   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//     circle.dy *= -1;
//   }
// }

// update();

// Animation 2

const image = document.getElementById("character");

const player = {
  w: 50,
  h: 50,
  x: 20,
  y: 100,
  speed: 5,
  dx: 0,
  dy: 0,
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;
  detectWalls();
}

function detectWalls() {
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
  if (player.y < 0) {
    player.y = 0;
  }
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
function update() {
  clear();
  drawPlayer();
  newPos();
  requestAnimationFrame(update);
}

function moveRight() {
  player.dx = player.speed;
}
function moveLeft() {
  player.dx = -player.speed;
}
function moveUp() {
  player.dy = -player.speed;
}
function moveDown() {
  player.dy = player.speed;
}

function keyDown(e) {
  if (e.key === "ArrowRight" || e.key === "d") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "a") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "w") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "s") {
    moveDown();
  }
}
function keyUp(e) {
  if (
    e.key == "d" ||
    e.key == "ArrowRight" ||
    e.key == "a" ||
    e.key == "ArrowLeft" ||
    e.key == "w" ||
    e.key == "ArrowUp" ||
    e.key == "s" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
