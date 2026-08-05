// Mobile menu toggle
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");
document.querySelector("header").prepend(menuBtn);

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});