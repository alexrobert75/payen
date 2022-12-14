// Menu mobile

var burger = document.getElementById("burgersign");
var barre = document.querySelector("header");
var maincontent = document.querySelector("main");

burger.addEventListener("click", function () {
    barre.classList.toggle("reveal1");
    maincontent.classList.toggle("reveal2");
});
