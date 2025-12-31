/* Falling petals animation */
(function () {
  const container = document.getElementById("petals-container");
  if (!container) return;
  const total = 60;

  for (let i = 0; i < total; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    // randomised attributes similar to practice.js
    const size = 10 + Math.random() * 20; // 10px – 30px
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    // horizontal start position and drift offset
    const left = Math.random() * 100; // percentage
    petal.style.left = left + "%";

    const xOffset = (Math.random() - 0.5) * 100; // –50 to 50 px drift
    petal.style.setProperty("--x-offset", `${xOffset}px`);

    // timing
    petal.style.animationDuration = 8 + Math.random() * 4 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(petal);
  }
})();
