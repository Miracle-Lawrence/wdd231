// ==== Set footer year and last modified ====
const currentYear = new Date().getFullYear();
const footer = document.querySelector("footer");

if (footer) {
  const paras = footer.querySelectorAll("p");
  if (paras.length >= 2) {
    paras[0].textContent = `© ${currentYear} | Owerri Chamber of Commerce`;
    paras[1].textContent = `Last Modified: ${document.lastModified}`;
  }
}

// ==== Navigation hamburger toggle ====
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

if (navButton && navBar) {
  navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
  });
}
// ==== Member cards view toggle (grid/list) ====
const main = document.querySelector("main");
if (main) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle View";
  toggleBtn.classList.add("toggle-view-btn");
  main.before(toggleBtn);

  let isGrid = true;

  async function displayMembers() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
      renderMembers(data);
    } catch (error) {
      console.error("Error loading members:", error);
    }
  }

  function renderMembers(members) {
    const cards = document.getElementById("cards");
    if (!cards) return;

    cards.innerHTML = "";
    cards.className = isGrid ? "grid-view" : "list-view";

    members.forEach((member) => {
      const card = document.createElement("section");
      card.className = "member-card";
      card.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>Membership Level: ${member.membership_level}</p>
        <img src="images/${member.image}" alt="${member.name} logo" width="150" height="150">
      `;
      cards.appendChild(card);
    });
  }

  toggleBtn.addEventListener("click", () => {
    isGrid = !isGrid;
    displayMembers();
  });

  displayMembers();
}

