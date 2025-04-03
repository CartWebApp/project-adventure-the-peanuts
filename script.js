// Wait for the page to load
window.onload = function() {
    // Get the elements for the cover screen, name screen, and start button
    const coverScreen = document.getElementById("cover-screen");
    const nameScreen = document.getElementById("name-screen");
    const startButton = document.getElementById("start-button");
  
    // Add an event listener to the start button
    startButton.addEventListener("click", function() {
      // Fade out the cover screen
      coverScreen.style.opacity = 0; // Make the cover screen disappear (fade out)
  
      // After the fade-out completes, show the name input screen
      setTimeout(function() {
        coverScreen.style.display = "none"; // Hide the cover screen completely
        nameScreen.style.display = "block"; // Show the name input screen
      }, 1000); // Delay should match the fade-out duration (1s)
    });
  };
  