// // Wait for the page to load
// window.onload = function() {
//     // Get the elements for the cover screen, name screen, and start button
//     const coverScreen = document.getElementById("cover-screen");
//     const nameScreen = document.getElementById("name-screen");
//     const startButton = document.getElementById("start-button");
  
//     // Add an event listener to the start button
//     startButton.addEventListener("click", function() {
//       // Fade out the cover screen
//       coverScreen.style.opacity = 0; // Make the cover screen disappear (fade out)
  
//       // After the fade-out completes, show the name input screen
//       setTimeout(function() {
//         coverScreen.style.display = "none"; // Hide the cover screen completely
//         nameScreen.style.display = "block"; // Show the name input screen
//         nameScreen.style.opacity = 1;
//       }, 1000); // Delay should match the fade-out duration (1s)
//     });
//   };


window.onload = function () {
  const coverScreen = document.getElementById("cover-screen");
  const nameScreen = document.getElementById("name-screen");
  const coverStartButton = document.getElementById("cover-start-button");
  const nameConfirmButton = document.getElementById("name-confirm-button");

  // When the player clicks "Start Game" on the cover screen
  coverStartButton.addEventListener("click", function () {
    coverScreen.style.opacity = 0;

    setTimeout(function () {
      coverScreen.style.display = "none";
      nameScreen.style.display = "block";
      nameScreen.style.opacity = 1;
    }, 1000);
  });

  // When the player confirms their name
  nameConfirmButton.addEventListener("click", function () {
    gameState.playerName = document.getElementById("player-name").value;
    gameState.hasStarted = true;
    saveGameState();
    transitionToScene('scene1');
  });
};

// 🧠 Game state
let gameState = {
  playerName: "",
  currentScene: "coverScreen",
  choicesMade: [],
  hasStarted: false
};

// 🎯 Handle choice + route to next scene
function makeChoice(choiceText) {
  gameState.choicesMade.push(choiceText);
  console.log("Choice made:", choiceText);

  if (choiceText === 'I will, thanks for your concern! You too!') {
    transitionToScene('scene3');
  } else if (choiceText === "Don't worry about me.") {
    transitionToScene('scene3A');
  } else if (choiceText === '...') {
    transitionToScene('scene3B');
  }
}

// ✨ Transition between scenes
function transitionToScene(sceneId) {
  const scenes = document.querySelectorAll('.scene');
  scenes.forEach(scene => {
    scene.style.opacity = 0;
    setTimeout(() => scene.style.display = 'none', 500);
  });

  const newScene = document.getElementById(sceneId);
  newScene.style.display = 'block';
  setTimeout(() => newScene.style.opacity = 1, 10);

  gameState.currentScene = sceneId;
  saveGameState();
}

// 💾 Save & load game
if (localStorage.getItem('gameState')) {
  gameState = JSON.parse(localStorage.getItem('gameState'));
  if (savedState.hasStarted) {
    gameState = savedState;
    loadGameState();
  }
}
loadGameState();

function loadGameState() {
  transitionToScene(gameState.currentScene);
  const nameInput = document.getElementById('player-name');
  if (nameInput) nameInput.value = gameState.playerName;
}

function saveGameState() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}
