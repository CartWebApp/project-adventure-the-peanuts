// Retrieve the speed from localStorage
const selectedSpeed = localStorage.getItem('selectedSpeed') || 'medium'; // Default to 'medium' if no speed is saved

// Dialogue lines for the story
const dialogueLines = [
  "You are a young choir member of the church. You had just joined the juniors to sing in front of the saints for the first time. Your voice blended in well with the others as you all vocalized the angelic songs of Heaven.",
  "After the last note, everyone inside the chapel clapped their hands in praise at your singing, some enthusiastic, and some less than excited. You watched your fellow choir members smile and stand for the saint audience like statues waiting for praise. You follow their actions; smiling and standing all the same.",
  "As the sun begins to descend behind the sand white buildings, your choir members wave and bid you good night.",
  "You tuck away your milk-white robes inside a small chamber like many before you.",
  "Wiping away the dust that fell on your folded robe, you decide to leave the church and head home like the many others."
];

// Element references
const dialogueText = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");

// Typing speed settings
const speedValues = {
  instant: 0, // No delay for instant
  fast: 15,
  medium: 30,
  slow: 100
};

let currentLine = 0;
let charIndex = 0;
let typing = false;
let blinkTimeout;

// Function to type out each dialogue line
function typeLine(line) {
  typing = true;
  charIndex = 0;
  dialogueText.textContent = ''; // Clear previous text
  clearTimeout(blinkTimeout);
  nextBtn.classList.remove("blink");

  // Get the speed for typing based on the selected speed
  const speed = speedValues[selectedSpeed]; // Uses the selected speed from localStorage

  if (selectedSpeed === "instant") {
    dialogueText.textContent = line; // Show all text at once for 'instant'
    typing = false;
    startBlinkTimer(); // Start blinking effect immediately for instant speed
  } else {
    const interval = setInterval(() => {
      if (charIndex < line.length) {
        dialogueText.textContent += line.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        typing = false;
        startBlinkTimer(); // Start blinking effect after typing finishes
      }
    }, speed); // Speed depends on the selected speed
  }
}

// Show the next line of dialogue when button is clicked
function showNextLine() {
  if (typing) return;  // Prevent clicking while typing

  if (currentLine < dialogueLines.length) {
    typeLine(dialogueLines[currentLine]);
    currentLine++;
  } else {
    dialogueText.textContent = "However....";
    nextBtn.disabled = true;

    // Wait 2 seconds and redirect to next scene
    setTimeout(() => {
      window.location.href = "call-to-action.html"; // Replace with the next scene
    }, 2000); // 2 seconds delay
  }
}

// Timer to blink the next button after a delay
function startBlinkTimer() {
  blinkTimeout = setTimeout(() => {
    nextBtn.classList.add("blink");
  }, 5000); // 5 seconds of inactivity
}

// Event listener for next button
nextBtn.addEventListener("click", showNextLine);

// Event listener for any mouse click anywhere on the document
document.addEventListener("click", showNextLine);

// Event listener for right arrow key (keyCode: 39 or key: 'ArrowRight')
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.keyCode === 39) {
    showNextLine();
  }
});

// Start the first line
showNextLine();
