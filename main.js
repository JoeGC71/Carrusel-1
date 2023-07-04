const slider = document.getElementById("slider"),
btnLeft= document.getElementById("left"),
btnRight =document.getElementById("right"); 
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement(`afterbegin`, sliderSectionLast)

function derecha(){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
slider.style.marginLeft = "-200%";
slider.style.transition = ".5s";
setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement(`beforeend`,sliderSectionFirst);
    slider.style.marginLeft = "-100%";
},500)};

btnRight.addEventListener("click",function(){
    derecha();
});

function izquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = ".5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement(`afterbegin`,sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500)};
    
    btnRight.addEventListener("click",function(){
        derecha();
    });

    btnLeft.addEventListener("click",()=>{
        izquierda();
    })

    setInterval(function(){
        derecha();
    },5000)