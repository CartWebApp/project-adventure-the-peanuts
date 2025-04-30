  const dialogueLines = [
    "The choir sings the praise of the Holy Lord.",
    "The crowd watches with joyous and beaming faces.",
    "You stand among the choir, your voice trembling.",
    "You had just joined. Your voice is not yet steady."
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
    if (typing) return;

    clearTimeout(blinkTimeout);
    nextBtn.classList.remove("blink");

    if (currentLine < dialogueLines.length) {
      typeLine(dialogueLines[currentLine]);
      currentLine++;
    } else {
      dialogueText.textContent = "End of scene.";
      nextBtn.disabled = true;
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

