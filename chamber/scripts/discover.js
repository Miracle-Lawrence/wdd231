document.addEventListener("DOMContentLoaded", () => {
  // Load places data
  fetch("data/places.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("cards-container");
      data.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("gallery");

        card.innerHTML = `
          <figure>
            <img src="${place.image}" alt="${place.name}">
            <figcaption>${place.name}</figcaption>
          </figure>
          <div class="info">
            <h2>${place.name}</h2>
            <p>${place.description}</p>
            <address>${place.address}</address>
            <button class="learn-more">Learn More</button>
          </div>
        `;
        container.appendChild(card);
      });
    });

  // Visitor localStorage logic
  const messageBox = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const diff = now - parseInt(lastVisit, 10);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) {
      messageBox.textContent = "Back so soon! Awesome!";
    } else {
      messageBox.textContent = `You last visited ${days} day${
        days === 1 ? "" : "s"
      } ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});

