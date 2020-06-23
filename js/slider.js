/* var sliderList = document.querySelectorAll(".slider-list");
var currentSlide = 0;
var slide-interval = setInterval(nextSlide,2000);


function nextSlide(){
    sliderList[currentSlide].className = "slider-item";
    currentSlide = (currentSlide+1)%sliderList.length;
    sliderList[currentSlide].className = "slider-current";
} */
var slider = document.querySelector(".slider");
var toggleButton = document.querySelector(".toggle-button");


toggleButton.onclick = function () {
    slider.classList.toggle("slider-current");
    toggleButton.classList.toggle("current");
};