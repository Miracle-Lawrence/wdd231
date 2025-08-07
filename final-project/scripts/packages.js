document.addEventListener("DOMContentLoaded", () => {
  fetch("data/packages.json")
    .then((response) => response.json())
    .then((data) => displayPackages(data.packages))
    .catch((error) => console.error("Error loading packages:", error));
});

function displayPackages(packages) {
  const container = document.getElementById("packages-container");
  packages.forEach((pkg) => {
    const card = document.createElement("section");
    card.classList.add("package-card");

    card.innerHTML = `
      <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
      <h2>${pkg.name}</h2>
      <p>${pkg.description}</p>
      <ul>
        <li><strong>Breakfast (10am):</strong> ${pkg.breakfast}</li>
        <li><strong>Dinner (6pm):</strong> ${pkg.dinner}</li>
        <li><strong>Price per day:</strong> ₦${pkg.price_per_day}</li>
        <li><strong>Total:</strong> ₦${pkg.total_price}</li>
      </ul>
      <a href="${pkg.subscribe_link}" target="_blank" class="subscribe-button">Get Package</a>
    `;

    container.appendChild(card);
  });
}
