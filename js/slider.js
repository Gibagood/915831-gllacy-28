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
var toggleList = document.querySelectorAll(".toggle-list");
var toggleButton = document.querySelector(".toggle-button");
var siteWrapperOne = document.querySelector(".site-wrapper-1");
var siteWrapperTwo = document.querySelector(".site-wrapper-2");
var siteWrapperThree = document.querySelector(".site-wrapper-3");

toggleButton.addEventListener("click", function() {
    for (i=0; i<=toggleList.length; i++){
        if(toggleList[i].classList.contains("current")){
            toggleList.classList.remove("current");
            toggleButton.classList.add("current");
        }
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
});