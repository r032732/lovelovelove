document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });
    });
  });

  function countdown(targetDate, elementId) {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById(elementId).textContent = "It's today! 💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById(elementId).textContent = `${days} days left`;
  }

  setInterval(() => {
    countdown("2025-10-08", "monthsary");
    countdown("2025-11-08", "monthsary6");
    countdown("2026-05-08", "anniversary");
  }, 1000);

  window.sendTreat = function(type) {
    const message = document.getElementById("treat-message");
    if (type === "hug") message.textContent = "Sending you the warmest hug ever 🤗";
    if (type === "kiss") message.textContent = "Mwah! A kiss just for you 😘";
    if (type === "sparkle") message.textContent = "✨ Glitter explosion of love! ✨";
  };
});
