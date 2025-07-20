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
