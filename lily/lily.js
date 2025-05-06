const dialogueLines = [
  "She stares at you with scrutiny, enough to make rats tremble",
  "The Pope looks down at you, seemingly surprised to find an eavesdropper.",
  "\"What do you think, sire? Execute the vermin?\"",
  "The Pope eerily hums, watching you, deciding your worth.",
  "\"Keep this young believer alive.\""
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
