(function () {
  const container = document.getElementById("fireworks-container");
  const starsContainer = document.getElementById("stars-container");
  if (!container) return;

  /* Generate twinkling stars */
  if (starsContainer) {
    const starCount = 60;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDuration = 2 + Math.random() * 2 + "s";
      star.style.animationDelay = Math.random() * 2 + "s";
      starsContainer.appendChild(star);
    }
  }

  const createFirework = () => {
    const sparkCount = 20;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);
    const hue = 200 + Math.random() * 100;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement("div");
      spark.classList.add("spark");
      spark.style.background = `hsl(${hue}, 100%, 80%)`;
      spark.style.width = "4px";
      spark.style.height = "4px";
      spark.style.left = x + "px";
      spark.style.top = y + "px";

      const angle = (Math.PI * 2 * i) / sparkCount;
      const radius = 60 + Math.random() * 40;
      const destX = Math.cos(angle) * radius;
      const destY = Math.sin(angle) * radius;

      spark.animate(
        [
          { transform: "translate(0, 0)", opacity: 1 },
          { transform: `translate(${destX}px, ${destY}px)`, opacity: 0 },
        ],
        {
          duration: 1500 + Math.random() * 500,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      setTimeout(() => spark.remove(), 2000);
      container.appendChild(spark);
    }
  };

  // Launch fireworks every 2 seconds
  setInterval(createFirework, 2000);

  /* Music toggle */
  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");
  if (music && toggle) {
    // autoplay may be blocked; start when user interacts
    const initPlay = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", initPlay);
    };
    document.addEventListener("click", initPlay);

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (music.paused) {
        music.play();
        toggle.style.opacity = 1;
      } else {
        music.pause();
        toggle.style.opacity = 0.5;
      }
    });
  }
})();
