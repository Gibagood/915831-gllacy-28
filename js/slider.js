var toggleButtons = document.querySelectorAll(".toggle-button");
var siteWrapper = document.querySelector(".site-wrapper");
var siteWrapperOne = document.querySelector(".site-wrapper-1");
var siteWrapperTwo = document.querySelector(".site-wrapper-2");
var siteWrapperThree = document.querySelector(".site-wrapper-3");
var toggleButtonOne = document.querySelector(".toggle-button-1");
var toggleButtonTwo = document.querySelector(".toggle-button-2");
var toggleButtonThree = document.querySelector(".toggle-button-3");
var sliderItemOne = document.querySelector(".slider-item-1");
var sliderItemTwo = document.querySelector(".slider-item-2");
var sliderItemThree = document.querySelector(".slider-item-3");


    
for (let toggleButton of toggleButtons){
    toggleButton.onclick = function () {
        document.querySelector(".current").classList.remove("current");
        toggleButton.classList.add("current");
        if(toggleButtonOne.classList.contains("current")){
            siteWrapper.classList.remove("site-wrapper-2" , "site-wrapper-3");
            siteWrapper.classList.add("site-wrapper-1");
            document.querySelector(".slider-current").classList.remove("slider-current");
            sliderItemOne.classList.add("slider-current");
        }
        else  if(toggleButtonTwo.classList.contains("current")){
            siteWrapper.classList.remove("site-wrapper-1" , "site-wrapper-3");
            siteWrapper.classList.add("site-wrapper-2");
            document.querySelector(".slider-current").classList.remove("slider-current");
            sliderItemTwo.classList.add("slider-current");
        }
        else  if(toggleButtonThree.classList.contains("current")){
            siteWrapper.classList.remove("site-wrapper-1" , "site-wrapper-2");
            siteWrapper.classList.add("site-wrapper-3");
            document.querySelector(".slider-current").classList.remove("slider-current");
            sliderItemThree.classList.add("slider-current");
        }
    }
}
