// Caroussel

var pic1 = document.getElementById('bigpicture1');
var pic2 = document.getElementById('bigpicture2');
var pic3 = document.getElementById('bigpicture3');
var previous = document.getElementById('prev');
var next = document.getElementById('next');
var minipic1 = document.getElementById('pic1');
var minipic2 = document.getElementById('pic2');
var minipic3 = document.getElementById('pic3');

var changeD = function(elem){
    elem.classList = "bigpic showimg";
}
var removeD = function(elem){
    elem.classList = "bigpic";
}
var clearD = function(elem){
    elem.classList = "tpic clear";
}
var blackD = function(elem){
    elem.classList = "tpic";
}

document.body.onload = function () { changeD(pic1), clearD(minipic1), changeS(slide1) };


// Vignettes caroussel

var i=0;

minipic1.addEventListener("click", function() {
    changeD(pic1);
    removeD(pic2);
    removeD(pic3);
    clearD(minipic1);
    blackD(minipic2);
    blackD(minipic3);
    i = 0;
});
minipic2.addEventListener("click", function() {
    i = 1;
    changeD(pic2);
    removeD(pic1);
    removeD(pic3);
    clearD(minipic2);
    blackD(minipic1);
    blackD(minipic3);

});
minipic3.addEventListener("click", function() {
    i = 2;
    changeD(pic3);
    removeD(pic1);
    removeD(pic2);
    clearD(minipic3);
    blackD(minipic2);
    blackD(minipic1);
});


// Flèches précédentes/suivantes


next.addEventListener("click", function() {
    if (i === 0) {
        changeD(pic2);
        removeD(pic1);
        clearD(minipic2);
        blackD(minipic1);
        i++;
    } else if (i === 1) {
        changeD(pic3);
        removeD(pic2);
        clearD(minipic3);
        blackD(minipic2);
        i++;
    } else if (i === 2) {
        changeD(pic1);
        removeD(pic3);
        clearD(minipic1);
        blackD(minipic3);
        i = 0;
    }
});
previous.addEventListener("click", function() {
    if (i === 0) {
        changeD(pic3);
        removeD(pic1);
        clearD(minipic3);
        blackD(minipic1);
        i = 2;
    } else if (i === 1) {
        changeD(pic1);
        removeD(pic2);
        clearD(minipic1);
        blackD(minipic2);
        i--;
    } else if (i === 2) {
        changeD(pic2);
        removeD(pic3);
        clearD(minipic2);
        blackD(minipic3);
        i--;
    }
});

document.body.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous.click();
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next.click();
    }
});


// Image en plein écran

var picB = document.getElementById("mainP");
var modal = document.querySelector(".modal");
var span = document.getElementById("closed");
var caroussel = document.getElementById("caroussel");

picB.onclick = function () {
    picB.classList.toggle("modal");
    if (span.style.display === "block") {
        span.style.display = "none";
    } else {
        span.style.display = "block";
    }
    caroussel.classList.toggle("relativeP");
    previous.classList.toggle("bigfleche");
    next.classList.toggle("bigfleche");
};




