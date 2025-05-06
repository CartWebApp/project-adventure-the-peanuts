// Extract player's name from URL and insert into the dialogue bar
const params = new URLSearchParams(window.location.search);
const playerName = params.get('name') || 'Player';
document.getElementById("player-name").textContent = playerName;


const dialogueLines = [
  "You are a young choir member of the church. You had just joined the juniors to sing in front of the saints for the first time. Your voice blended in well with the others as you all vocalized the angelic songs of Heaven.",
  "After the last note, everyone inside the chapel clapped their hands in praise at your singing, some enthusiastic, and some less than excited. You watched your fellow choir members smile and stand for the saint audience like statues waiting for praise. You follow their actions; smiling and standing all the same.",
  "As the sun begins to descend behind the sand white buildings, your choir members wave and bid you good night.",
  "You tuck away your milk-white robes inside a small chamber like many before you.",
  "Wiping away the dust that fell on your folded robe, you decide to leave the church and head home like the many others."
];

  let currentLine = 0;
  let charIndex = 0;
  let typing = false;
  const dialogueText = document.getElementById("dialogue-text");
  const nextBtn = document.getElementById("next-btn");
  let blinkTimeout;

  function typeLine(line) {
    typing = true;
    dialogueText.textContent = "";
    charIndex = 0;
    clearTimeout(blinkTimeout);
    nextBtn.classList.remove("blink");

    const interval = setInterval(() => {
      if (charIndex < line.length) {
        dialogueText.textContent += line.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        typing = false;
        startBlinkTimer(); // start blinking countdown after typing finishes
      }
    }, 30);
  }

  function showNextLine() {
    if (typing) return;  // Prevent skipping while typing
  
    if (currentLine < dialogueLines.length) {
      typeLine(dialogueLines[currentLine]);
      currentLine++;
    } else {
      dialogueText.textContent = "However....";
      nextBtn.disabled = true;
  
      // Wait 2 seconds and redirect to scene2.html
      setTimeout(() => {
        window.location.href = "call-to-action.html"; // Redirect to the next scene
      }, 2000); // 2 seconds delay
    }
  }
  
  nextBtn.addEventListener("click", showNextLine);
  
  showNextLine();

  function startBlinkTimer() {
    blinkTimeout = setTimeout(() => {
      nextBtn.classList.add("blink");
    }, 5000); // 5 seconds of inactivity
  }

  nextBtn.addEventListener("click", showNextLine);

  document.addEventListener("click", function (e) {
    if (!e.target.closest("#next-btn")) {
      showNextLine();
    }
  });

  showNextLine(); // show first line

