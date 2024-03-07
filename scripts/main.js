const button = document.querySelector(".nav-btn");
const navbar = document.querySelector(".nav");

button.addEventListener("click", function () {
  navbar.classList.toggle("open");
});
