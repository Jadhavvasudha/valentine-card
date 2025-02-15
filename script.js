document.addEventListener("DOMContentLoaded", () => {
  const restartButton = document.getElementById("restart");
  const love = document.querySelector(".love");
  const alpacaLeft = document.querySelector(".alpaca-left");
  const alpacaRight = document.querySelector(".alpaca-right");
  const message = document.querySelector(".message");
  const displayToggle = document.getElementById("displayToggle");

  if (
    !restartButton ||
    !love ||
    !message ||
    !displayToggle ||
    !alpacaLeft ||
    !alpacaRight
  ) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  // Initial state
  love.classList.remove("hidden");
  alpacaLeft.classList.add("hidden");
  alpacaRight.classList.add("hidden");

  // Toggle handler
  displayToggle.addEventListener("change", () => {
    if (displayToggle.checked) {
      // Show alpacas, hide heart
      love.classList.add("hidden");
      alpacaLeft.classList.remove("hidden");
      alpacaRight.classList.remove("hidden");
    } else {
      // Show heart, hide alpacas
      love.classList.remove("hidden");
      alpacaLeft.classList.add("hidden");
      alpacaRight.classList.add("hidden");
    }

    // Restart animations
    restartAnimation();
  });

  // Restart button handler
  restartButton.addEventListener("click", restartAnimation);

  function restartAnimation() {
    const elements = [love, message, alpacaLeft, alpacaRight];

    // Remove existing animations
    elements.forEach((element) => {
      element.style.animation = "none";
      void element.offsetWidth; // Trigger reflow
    });

    // Re-apply animations
    love.style.animation = "fall 2s linear forwards";
    message.style.animation = "appear 2s forwards 2s";
    alpacaLeft.style.animation = "slideFromLeft 1s forwards 4s";
    alpacaRight.style.animation = "slideFromRight 1s forwards 4s";
  }
});
