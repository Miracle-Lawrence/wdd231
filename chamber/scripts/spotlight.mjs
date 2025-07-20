// Fetch and display member spotlights
import members from "./members.mjs";

function displaySpotlight() {
  const spotlightContainer = document.querySelector(".spotlight");

  if (!spotlightContainer) {
    console.error("Spotlight container not found.");
    return;
  }

  // Filter Gold and Silver members
  const eligibleMembers = members.filter(
    (member) => member.membership === "Gold" || member.membership === "Silver"
  );

  // Shuffle the eligible members
  const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

  // Pick up to 3 eligible members
  const selectedMembers = shuffled.slice(0, 3);

  // Clear existing content
  spotlightContainer.innerHTML = "";

  // Create and append spotlight member cards
  selectedMembers.forEach((member) => {
    const spotlightCard = document.createElement("div");
    spotlightCard.classList.add("spotlight-card");

    spotlightCard.innerHTML = `
      <img src="${member.logo}" alt="${member.company} logo">
      <h3>${member.company}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(spotlightCard);
  });
}

// Call the function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", displaySpotlight);
