// Select elements
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const speedScreen = document.getElementById('speed-screen');
const gameScreen = document.getElementById('game-screen');
const speedButtons = document.querySelectorAll('.speed-option');
const previewText = document.getElementById('preview-text');
const confirmBtn = document.getElementById('confirm-btn');
let selectedSpeed = 'medium'; // Default text speed


let isTyping = false; // Lock flag to prevent multiple clicks during typing


// Show the text speed screen when "Start Game" is clicked
startBtn.addEventListener('click', () => {
 startScreen.classList.remove('active');
 speedScreen.classList.add('active');
});


// Typing effect with lock to block multiple clicks
function typeText(text, speed) {
 previewText.textContent = '';
 let index = 0;
 isTyping = true; // Lock input


 const speeds = {
   instant: 0,
   fast: 15,
   medium: 30,
   slow: 100
 };


 const interval = setInterval(() => {
   previewText.textContent += text[index];
   index++;


   if (index === text.length || speed === 'instant') {
     clearInterval(interval);
     if (speed === 'instant') previewText.textContent = text;


     isTyping = false; // Unlock after typing finishes
     confirmBtn.style.display = 'inline-block'; // Show confirm button
   }
 }, speeds[speed]);
}


// Add event listeners to speed buttons
speedButtons.forEach((btn) => {
 btn.addEventListener('click', () => {
   if (isTyping) return; // Ignore clicks while typing


   selectedSpeed = btn.dataset.speed;
   confirmBtn.style.display = 'none'; // Hide confirm while retyping
   typeText("This is how fast your story text will appear.", selectedSpeed);
 });
});


confirmBtn.addEventListener('click', () => {
 if (isTyping) return;


 // Save selected speed in localStorage
 localStorage.setItem('selectedSpeed', selectedSpeed);


 // Redirect to the starting scene
 window.location.href = `../startingscene.html?speed=${encodeURIComponent(selectedSpeed)}`;
});


