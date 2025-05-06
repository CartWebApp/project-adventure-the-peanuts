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
