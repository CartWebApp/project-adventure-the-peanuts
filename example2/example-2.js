const dialogueText = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");

const lines = [
  "Sir Gwaine gazes across the hills...",
  "He senses a shift in the wind.",
  "The prophecy may yet be fulfilled."
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
