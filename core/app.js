// Menu mobile

const burger = document.getElementById("burgersign");
const barre = document.querySelector("header");
const maincontent = document.querySelector("main");

burger.addEventListener("click", function () {
    barre.classList.toggle("reveal1");
    maincontent.classList.toggle("reveal2");
});
