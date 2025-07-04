const navBotton = document.querySelector("#menu-toggle");
const navBar = document.querySelector("#nav-bar");

navBotton.addEventListener("click", () => {
    navBotton.classList.toggle("show");
    navBar.classList.toggle("show");
});


