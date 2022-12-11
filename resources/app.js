const pic1 = document.getElementById('bigpicture1');
const pic2 = document.getElementById('bigpicture2');
const pic3 = document.getElementById('bigpicture3');
const previous = document.getElementById('prev');
const next = document.getElementById('next');
const minipic1 = document.getElementById('pic1');
const minipic2 = document.getElementById('pic2');
const minipic3 = document.getElementById('pic3');

const changeD = (elem) => {
    elem.classList = "bigpic showimg";
}
const removeD = (elem) => {
    elem.classList = "bigpic";
}
const clearD = (elem) => {
    elem.classList = "tpic clear";
}
const blackD = (elem) => {
    elem.classList = "tpic";}

document.body.onload = function(){changeD(pic1),clearD(minipic1)};

minipic1.addEventListener("click", ()=>{
    changeD(pic1);
    removeD(pic2);
    removeD(pic3);
    clearD(minipic1);
    blackD(minipic2);
    blackD(minipic3);
});
minipic2.addEventListener("click", ()=>{
    changeD(pic2);
    removeD(pic1);
    removeD(pic3);
    clearD(minipic2);
    blackD(minipic1);
    blackD(minipic3);

});
minipic3.addEventListener("click", ()=>{
    changeD(pic3);
    removeD(pic1);
    removeD(pic2);
    clearD(minipic3);
    blackD(minipic2);
    blackD(minipic1);
});

let i = 0;
let imgList = [pic1,pic2,pic3];
next.addEventListener("click", ()=>{
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
    }   else if (i === 2) {
        changeD(pic1);
        removeD(pic3);
        clearD(minipic1);
        blackD(minipic3);
        i = 0;
    }
});
previous.addEventListener("click", ()=>{
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
    }   else if (i === 2) {
        changeD(pic2);
        removeD(pic3);
        clearD(minipic2);
        blackD(minipic3);
        i--;
    }
});


const picB = document.getElementById("mainP");
const modal = document.querySelector(".modal");
const span = document.getElementById("closed");
const caroussel =  document.getElementById("caroussel");

picB.onclick = function(){
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