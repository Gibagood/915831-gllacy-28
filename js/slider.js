/* var sliderList = document.querySelectorAll(".slider-list");
var currentSlide = 0;
var slide-interval = setInterval(nextSlide,2000);


function nextSlide(){
    sliderList[currentSlide].className = "slider-item";
    currentSlide = (currentSlide+1)%sliderList.length;
    sliderList[currentSlide].className = "slider-current";
} */
var sliders = document.querySelectorAll(".slider-list");
var slider = document.querySelector(".slider");
var toggleButtons = document.querySelectorAll(".toggle-button");
/* var toggleButton = document.querySelector(".toggle-button"); */
var siteWrapperOne = document.querySelector(".site-wrapper-1");
var siteWrapperTwo = document.querySelector(".site-wrapper-2");
var siteWrapperThree = document.querySelector(".site-wrapper-3");


    
for (let toggleButton of toggleButtons){
    toggleButton.onclick = function () {
        console.log(toggleButtons);
        let i = 0;
        while (i<=toggleButtons.length) {
            toggleButton.classList.remove("current");
            console.log(toggleButtons[i]);
            i++;
        };
        toggleButton.classList.add("current");
        
        
    } 
    /* for (toggleButton of toggleButtons){
        toggleButton.classList.add("current");
    } */
    /* if(toggleList.contains("current")){
        console.log(".toggleList");
        toggleList.classList.remove("current");
        toggleButton.classList.add("current");
    };
 */
/* 
    slider.classList.add("slider-current");
    toggleButton.classList.toggle("current");
 */
}
