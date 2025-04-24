const canvas = document.getElementById("soul-box");
const ctx = canvas.getContext("2d");

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  color: "red",
  speed: 2
};

// let mouseX = player.x;
// let mouseY = player.y;
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;


// Mouse tracking (for desktop)
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// Mobile movement (via buttons)
function moveHeart(direction) {
  const step = 10;
  if (direction === 'up') player.y -= step;
  if (direction === 'down') player.y += step;
  if (direction === 'left') player.x -= step;
  if (direction === 'right') player.x += step;
}

function update() {
  // Move heart toward mouse
  player.x += (mouseX - player.x) * 0.3;
  player.y += (mouseY - player.y) * 0.3;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

let mouseInside = false;

canvas.addEventListener("mouseenter", () => mouseInside = true);
canvas.addEventListener("mouseleave", () => mouseInside = false);

function update() {
  if (mouseInside) {
    player.x += (mouseX - player.x) * 0.2;
    player.y += (mouseY - player.y) * 0.2;
  }
}
function update() {
    player.x = mouseX;
    player.y = mouseY;
  }
gameLoop();