// Slideshow contact

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");

var changeS = function(elem1) {
    elem1.classList.toggle("slidepic2");
}

var isPaused = false;
var time = 0;
var t = setInterval(function() {
    if(!isPaused) {
        time++;
        changeS(slide2);
    }
}, 3000);
function play(){
    isPaused = false;
}
function pause(){
    isPaused = true;
}