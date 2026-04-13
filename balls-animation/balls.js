const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Balls Animation
const balls = [
  {
    x: 100,
    y: 150,
    radius: 40,
    color: "#FF6B6B",
    dx: 4,
    dy: 3,
  },
  {
    x: 300,
    y: 200,
    radius: 25,
    color: "#48C9B0",
    dx: -5,
    dy: 4,
  },
  {
    x: 200,
    y: 100,
    radius: 35,
    color: "#F7DC6F",
    dx: 3,
    dy: -5,
  },
  {
    x: 400,
    y: 300,
    radius: 20,
    color: "#AF7AC5",
    dx: -4,
    dy: -3,
  },
  {
    x: 150,
    y: 250,
    radius: 30,
    color: "#5DADE2",
    dx: 6,
    dy: -4,
  },
];
function drawCicle() {
  balls.forEach((e) => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
    ctx.fillStyle = e.color;
    ctx.fill();
  });
}

function moveBalls() {
  balls.forEach((e) => {
    e.x += e.dx;
    e.y += e.dy;
  });
}
function detectWalls() {
  balls.forEach((e) => {
    if (e.x + e.radius > canvas.width || e.x - e.radius < 0) {
      e.dx *= -1;
    }
    if (e.y + e.radius > canvas.height || e.y - e.radius < 0) {
      e.dy *= -1;
    }
  });
}

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCicle();
  moveBalls();
  detectWalls();
  requestAnimationFrame(run);
}
run();


