// Start button logic
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const nameScreen = document.getElementById('name-screen');

startBtn.addEventListener('click', () => {
  startScreen.classList.remove('active');
  nameScreen.classList.add('active');
});
const nameSubmitBtn = document.getElementById('name-submit-btn');
const confirmScreen = document.getElementById('confirm-screen');
const confirmMessage = document.getElementById('confirm-message');
const playerNameInput = document.getElementById('player-name');

nameSubmitBtn.addEventListener('click', () => {
  const playerName = playerNameInput.value.trim();

  if (playerName === '') {
    alert('Please enter your name.');
    return;
  }

  // Store the name in the confirm screen's dataset (optional, used later)
  confirmScreen.dataset.playerName = playerName;

  // Set confirmation message
  confirmMessage.textContent = `Welcome, ${playerName}. Are you ready?`;

  // Hide name screen, show confirm screen
  nameScreen.classList.remove('active');
  confirmScreen.classList.add('active');
});

// Confirm button logic (and movement)
const confirmLink = document.getElementById('confirm-link');
if (confirmLink) {
  confirmLink.addEventListener('click', (e) => {
    // Prevent the default link behavior to update href dynamically
    e.preventDefault();

    // Get the player's name from the confirm screen
    const playerName = document.getElementById('confirm-screen').dataset.playerName || 'Player';

    // Update the href to include the player's name as a query parameter
    confirmLink.href = `startingscene.html?name=${encodeURIComponent(playerName)}`;

    // Trigger the navigation
    window.location.href = confirmLink.href;
  });

  // Make the button "run away" on hover (optional)
  let moveButton = true; // To control the movement

  confirmLink.addEventListener('mouseover', () => {
    if (!moveButton) return; // Don't move the button if time's up

    const btn = confirmLink;
    const parent = btn.parentElement;

    const maxX = parent.clientWidth - btn.offsetWidth;
    const maxY = parent.clientHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });

  // Stop the button after 5 seconds
  setTimeout(() => {
    moveButton = false; // Stop the movement
  }, 5000); // 5 seconds
}

const speedScreen = document.getElementById('speed-screen');
const speedButtons = document.querySelectorAll('.speed-option');
const previewText = document.getElementById('preview-text');
let selectedSpeed = 'medium'; // default

// Show speed selection screen after confirmation
const confirmBtn = document.getElementById('confirm-btn');
confirmBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link navigation for now
  confirmScreen.classList.remove('active');
  speedScreen.classList.add('active');
});

// Typing effect based on speed
function typeText(text, speed) {
  previewText.textContent = '';
  let index = 0;
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
    }
  }, speeds[speed]);
}

// Add event listeners to speed buttons
speedButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedSpeed = btn.dataset.speed;
    typeText("This is how fast your story text will appear.", selectedSpeed);

    // Optional: Proceed to game screen or save preference after this
    // Example: window.location.href = `startingscene.html?speed=${selectedSpeed}&name=${playerName}`;
  });
});
