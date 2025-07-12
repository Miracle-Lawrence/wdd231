// Get the current year
const currentYear = new Date().getFullYear();

// Insert current year into the first <p> in the footer
const footer = document.querySelector("footer");
const firstPara = footer.querySelectorAll("p")[5];
firstPara.textContent = `© ${currentYear} | Owerri Chamber of Commerce`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Insert last modified date into the second <p> in the footer
const secondPara = footer.querySelectorAll("p")[6];
secondPara.textContent = `Last Modified: ${lastModifiedDate}`;

const navBotton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

navBotton.addEventListener("click", () => {
  navBotton.classList.toggle("show");
  navBar.classList.toggle("show");
});

// Display the cards in the main section
const main = document.querySelector("main");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle View";
toggleBtn.classList.add("toggle-view-btn"); 
main.before(toggleBtn);


let isGrid = true;

async function displayMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  renderMembers(data);
}

function renderMembers(members) {
  const cards = document.getElementById("cards");
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


