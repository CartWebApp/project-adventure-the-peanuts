const scenes = {
  scene1: {
    title: "Chapter 1: Seven Days of Creation",
    text: [
      "The choir sings the praise of the Holy Lord, the crowd with joyous and beaming faces at the sight of the young choir who stand on the stage. You stand amongst the fellow choir members; your voice trembling along with their confidence. You had just joined not too long ago, your voice hadn't well adjusted yet to complex singing and language.",
      "But despite your crude performance, you managed to keep the faces of the listeners happy."
    ],
    choices: [{ text: "Continue", next: "scene2" }]
  },
  scene2: {
    text: [
      "The sunlight dims as the night begins to inch closer to your lovely city. You watch as people go through the chapel's doors to head home before anything icky can occur during a nightly return. You find yourself standing, amongst your fellow peers who rid themselves of their white robes and neatly folded it back lovingly back to the closet.",
      `"Hey {name}, get home safely!" your peer says to you with their utmost sincerity before heading out the doors like the rest.`
    ],
    choices: [
      { text: "I will, thanks for your concern! You too!", next: "scene3" },
      { text: "Don't worry about me.", next: "scene3A" },
      { text: "...", next: "scene3B" }
    ]
  },
  scene3: {
    text: [
      "Your peer smiles at your concern and response, before giving you a wave and heading off into the night. You felt a slight enlated sense of happiness."
    ],
    choices: [{ text: "Continue", next: "scene4" }]
  },
  scene3A: {
    text: [
      "Your peer looks at you with a bit of a strained smile before nodding, and heading off into the night. You felt slight dip in your mood, you felt annoyed."
    ],
    choices: [{ text: "Continue", next: "scene4" }]
  },
  scene3B: {
    text: [
      "Your peer stares at you as their smile drops; giving one last wave and a 'goodbye' before heading off into the night. You felt a sense of guilt in you, you feel uncomfortable."
    ],
    choices: [{ text: "Continue", next: "scene4" }]
  },
  scene4: {
    text: [
      "You waited until everyone was gone to do your duties. As much as you were a newcomer, you had a job and that was small things like be the one to clean up the choir room before leaving. It was to instill a sense of 'duty' in your place of the hierarchy; as of now? Bottomfeeder.",
      "You estimated that it took you at least one quarter of the moon's cycle to finish cleaning up. As much as the choir members were good, you knew there were a few individuals who were... a bit lax on the rules of the Holy Church. 'Nevermind them,' you thought, 'At least the place looks sparkling clean.'",
      "Afterwards, you trailed down the corridors that reeked of incense and old holy water, and the carpets beneath your feet that itched."
    ],
    choices: [] // Add more if this leads somewhere
  }
};
function renderScene(sceneId) {
  const scene = scenes[sceneId];
  const container = document.getElementById("game-container");

  container.innerHTML = ""; // Clear old content

  // Title (if present)
  if (scene.title) {
    const h2 = document.createElement("h2");
    h2.textContent = scene.title;
    container.appendChild(h2);
  }

  // Paragraphs
  scene.text.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph.replace('{name}', gameState.playerName);
    container.appendChild(p);
  });

  // Choices
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.className = "Choice";
    button.onclick = () => {
      gameState.choicesMade.push(choice.text);
      transitionToScene(choice.next);
    };
    container.appendChild(button);
  });

  gameState.currentScene = sceneId;
  saveGameState();
}
function transitionToScene(sceneId) {
  const container = document.getElementById("game-container");

  container.style.opacity = 0;

  setTimeout(() => {
    container.style.display = "block";
    renderScene(sceneId);
    container.style.opacity = 1;
  }, 500);
}
nameConfirmButton.addEventListener("click", function () {
  gameState.playerName = document.getElementById("player-name").value;
  gameState.hasStarted = true;
  saveGameState();
  document.getElementById("name-screen").style.display = "none";
  transitionToScene("scene1");
});
window.onload = function () {
  const nameConfirmButton = document.getElementById("name-confirm-button");
  nameConfirmButton.addEventListener("click", function () {
    gameState.playerName = document.getElementById("player-name").value;
    gameState.hasStarted = true;
    saveGameState();
    document.getElementById("name-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block"; // show container
    transitionToScene("scene1");
  });
};
