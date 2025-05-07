const dialogueText = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");

const lines = [
  "She stares at you with scrutiny, enough to make rats tremble",
  "The Pope looks down at you, seemingly surprised to find an eavesdropper.",
  "\"What do you think, sire? Execute the vermin?\"",
  "The Pope eerily hums, watching you, deciding your worth.",
  "\"Keep this young believer alive.\"",
 "\"Why? Why should we bother?.\"",
 "\"Because, daughter Lily...\"",
 "You felt the Pope's eyes crawl over to you.",
 "\"One shall pay for the sin of eavesdropping on a precious sight.\"",
 "\"Why? Why should we bother?.\"",
];

let currentLine = 0;

nextBtn.addEventListener("click", () => {
  currentLine++;
  if (currentLine < lines.length) {
    dialogueText.textContent = lines[currentLine];
  } else {
    // Placeholder for next scene
    dialogueText.textContent = "End of scene.";
    nextBtn.style.display = "none";
  }
});
