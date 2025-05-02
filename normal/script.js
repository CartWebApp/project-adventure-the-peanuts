// Start screen to name screen
const startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('name-screen').classList.add('active');
  });
}

// Name screen to confirm screen
const nameSubmitBtn = document.getElementById('name-submit-btn');
if (nameSubmitBtn) {
  nameSubmitBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('player-name');
    const playerName = nameInput.value.trim();

    if (playerName) {
      document.getElementById('name-screen').classList.remove('active');
      const confirmScreen = document.getElementById('confirm-screen');
      const confirmMsg = document.getElementById('confirm-message');
      confirmMsg.textContent = `Are you ready, ${playerName}?`;
      confirmScreen.classList.add('active');

      // Save name in case needed later
      confirmScreen.dataset.playerName = playerName;
    } else {
      
    }
  });
}

// Confirm button logic (and movement)
const confirmBtn = document.getElementById('confirm-btn');
if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    const playerName = document.getElementById('confirm-screen').dataset.playerName || 'Player';
    window.location.href = `startingscene.html?name=${encodeURIComponent(playerName)}`;
  });

  // Make the button "run away" on hover
  let moveButton = true; // To control the movement

  confirmBtn.addEventListener('mouseover', () => {
    if (!moveButton) return; // Don't move the button if time's up

    const btn = confirmBtn;
    const parent = btn.parentElement;

    const maxX = parent.clientWidth - btn.offsetWidth;
    const maxY = parent.clientHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });

  // Stop the button after 10 seconds
  setTimeout(() => {
    moveButton = false; // Stop the movement
  }, 5000); // 10 seconds
}

