const startBtn = document.getElementById('start-btn');
const nameScreen = document.getElementById('name-screen');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const submitNameBtn = document.getElementById('submit-name');
const bgMusic = document.getElementById('bg-music');
const playerNameInput = document.getElementById('player-name');
const gameText = document.getElementById('game-text');
const locationImg = document.getElementById('location-img');

let playerName = "";

startBtn.addEventListener('click', () => {
  startScreen.classList.remove('active');
  nameScreen.classList.add('active');
});

submitNameBtn.addEventListener('click', () => {
  playerName = playerNameInput.value.trim();
  if (playerName !== "") {
    nameScreen.classList.remove('active');
    gameScreen.classList.add('active');
    startGame();
  }
});

function startGame() {
  bgMusic.play();
  locationImg.src = "location1.jpg"; // You can add your own image file here
  gameText.innerText = `Welcome, ${playerName}. You are a young choir member of the church. You had just joined the juniors to sing in front of the saints for the first time. Your voice blended in well with the others as you all vocalized the angelic songs of Heaven.`;
}