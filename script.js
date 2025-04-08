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

// choices
  let gameState = {
    playerName: "",
    currentScene: "coverScreen",
    choicesMade: []
  };
  function makeChoice(choiceText) {
    gameState.choicesMade.push(choiceText);
    console.log("Choice made:", choiceText);
  }
  function transitionToScene(sceneId) {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => scene.style.display = 'none');

  const newScene = document.getElementById(sceneId);
  newScene.style.display = 'block';

  gameState.currentScene = sceneId;
  }

// saving the game progress
  if (localStorage.getItem('gameState')) {
    gameState = JSON.parse(localStorage.getItem('gameState'));
    loadGameState();
  }
  function loadGameState() {
    transitionToScene(gameState.currentScene);
    document.getElementById('player-name').value = gameState.playerName;
  }

  function saveGameState() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }


// transitions
  function transitionToScene1() {
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'block';
  }
  function transitionToScene2() {
    document.getElementById('scene2').style.display = 'none';
    document.getElementById('scene3').style.display = 'block';
  }