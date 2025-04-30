const canvas = document.getElementById("soul-box");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 16, // Adjusted for sprite clarity
  speed: 2
};

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
let mouseInside = false;

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener("mouseenter", () => mouseInside = true);
canvas.addEventListener("mouseleave", () => mouseInside = false);

// Mobile movement buttons (if used)
function moveHeart(direction) {
  const step = 10;
  if (direction === 'up') player.y -= step;
  if (direction === 'down') player.y += step;
  if (direction === 'left') player.x -= step;
  if (direction === 'right') player.x += step;
}

// Load images
const heartImg = new Image();
heartImg.src = "images/heart.png";

const arrowImg = new Image();
arrowImg.src = "images/arrow.png";

const swordImg = new Image();
arrowImg.src = "images/sword.png";

const arrows = [
  { x: 300, y: 50, width: 60, height: 60, speed: 4 }
];

const sword = [
  { x: 300, y: 50, width: 60, height: 60, speed: 4 }
];

// Game loop functions
function update() {
  if (mouseInside) {
    player.x += (mouseX - player.x) * 0.2;
    player.y += (mouseY - player.y) * 0.2;
  }

  // Update arrow positions
  arrows.forEach(arrow => {
    arrow.x -= arrow.speed;
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player heart
  ctx.drawImage(
    heartImg,
    player.x - player.size / 2,
    player.y - player.size / 2,
    player.size,
    player.size
  );

  // Draw arrows
  arrows.forEach(arrow => {
    ctx.drawImage(arrowImg, arrow.x, arrow.y, arrow.width, arrow.height);
  });
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start loop when heart is ready
heartImg.onload = () => {
  gameLoop();
};
