// Screen navigation
let currentScreen = 1;
const screens = {
  landing: document.getElementById("screen-landing"),
  poem: document.getElementById("screen-poem"),
  celebration: document.getElementById("screen-celebration"),
};

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeLandingScreen();

  // Button click handler
  document.getElementById("beginBtn").addEventListener("click", function () {
    goToScreen("poem");
  });

  // Poem screen click handler
  screens.poem.addEventListener("click", function () {
    if (currentScreen === 2) {
      goToScreen("celebration");
    }
  });
});

function goToScreen(screenName) {
  // Remove active class from all screens
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  // Add active class to target screen
  screens[screenName].classList.add("active");

  // Initialize screen-specific animations
  if (screenName === "celebration") {
    currentScreen = 3;
    initializeCelebrationScreen();
  } else if (screenName === "poem") {
    currentScreen = 2;
  }
}

// =====================
// LANDING SCREEN
// =====================
function initializeLandingScreen() {
  const petalsContainer = document.getElementById("petals");
  const petalCount = 30;

  for (let i = 0; i < petalCount; i++) {
    createPetal(petalsContainer, i);
  }
}

function createPetal(container, index) {
  const petal = document.createElement("div");
  petal.className = "petal";

  const size = 10 + Math.random() * 20;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 4;
  const delay = Math.random() * 5;
  const xOffset = Math.sin(index) * 100;

  petal.style.width = size + "px";
  petal.style.height = size + "px";
  petal.style.left = left + "%";
  petal.style.animationDuration = duration + "s";
  petal.style.animationDelay = delay + "s";

  // Add horizontal drift
  petal.style.setProperty("--x-offset", xOffset + "px");

  container.appendChild(petal);
}

// =====================
// CELEBRATION SCREEN
// =====================
function initializeCelebrationScreen() {
  createStars();
  createFireworks();
}

function createStars() {
  const starsContainer = document.getElementById("stars");
  starsContainer.innerHTML = ""; // Clear existing stars
  const starCount = 40;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = 2 + Math.random() * 2 + "s";
    star.style.animationDelay = Math.random() * 2 + "s";

    starsContainer.appendChild(star);
  }
}

function createFireworks() {
  const fireworksContainer = document.getElementById("fireworks");
  fireworksContainer.innerHTML = ""; // Clear existing fireworks
  const fireworkCount = 15;

  for (let i = 0; i < fireworkCount; i++) {
    setTimeout(() => {
      createSingleFirework(fireworksContainer);
    }, i * 200);
  }

  // Keep creating new fireworks
  setInterval(() => {
    createSingleFirework(fireworksContainer);
  }, 3000);
}

function createSingleFirework(container) {
  const firework = document.createElement("div");
  firework.className = "firework";

  const left = 10 + Math.random() * 80;
  const top = 10 + Math.random() * 60;

  firework.style.left = left + "%";
  firework.style.top = top + "%";

  // Create particles for this firework
  const particleCount = 8;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "firework-particle";

    const angle = (i * Math.PI * 2) / particleCount;
    const distance = 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    particle.style.setProperty("--tx", tx + "px");
    particle.style.setProperty("--ty", ty + "px");
    particle.style.animationDelay = i * 0.05 + "s";

    firework.appendChild(particle);
  }

  container.appendChild(firework);

  // Remove firework after animation completes
  setTimeout(() => {
    if (firework.parentNode) {
      firework.remove();
    }
  }, 2000);
}

// Optional: Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    if (currentScreen === 1) {
      goToScreen("poem");
    } else if (currentScreen === 2) {
      goToScreen("celebration");
    }
  }
});

// Optional: Prevent scrolling
document.body.style.overflow = "hidden";
