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
var sortItemLinks = document.querySelectorAll(".sort-item-link");
var sorting = document.querySelector(".sorting");
var selectSort = document.querySelector(".select-sort");
var sortFilter = document.querySelector(".sort-filter");
var buttonFeedback = document.querySelector(".button-feedback");
var feedbackForm = document.querySelector(".feedback-modal");

if (feedbackForm) {
  var modalClose = feedbackForm.querySelector(".modal-close");
  var feedbackFormForm = feedbackForm.querySelector(".feedback-form-form");
  var feedbackName = feedbackForm.querySelector(".feedback-name-input");
  var feedbackEmail = feedbackForm.querySelector(".feedback-email-input");
}
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (buttonFeedback) {
  buttonFeedback.addEventListener("click", function () {
    feedbackForm.classList.add("modal-show");

    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });
}

if (feedbackForm) {
  modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-show");
    feedbackForm.classList.remove("modal-error");
  });
}

if (feedbackFormForm) {
  feedbackFormForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackForm.classList.remove("modal-error");
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
      feedbackForm.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value);
      }
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackForm.classList.remove("modal-show");
      feedbackForm.classList.remove("modal-error");
    }
  }
});

for (let toggleButton of toggleButtons) {
  toggleButton.onclick = function () {
    document.querySelector(".current").classList.remove("current");
    toggleButton.classList.add("current");
    if (toggleButtonOne.classList.contains("current")) {
      siteWrapper.classList.remove("site-wrapper-2", "site-wrapper-3");
      siteWrapper.classList.add("site-wrapper-1");
      document.querySelector(".slider-current").classList.remove("slider-current");
      sliderItemOne.classList.add("slider-current");
    } else if (toggleButtonTwo.classList.contains("current")) {
      siteWrapper.classList.remove("site-wrapper-1", "site-wrapper-3");
      siteWrapper.classList.add("site-wrapper-2");
      document.querySelector(".slider-current").classList.remove("slider-current");
      sliderItemTwo.classList.add("slider-current");
    } else if (toggleButtonThree.classList.contains("current")) {
      siteWrapper.classList.remove("site-wrapper-1", "site-wrapper-2");
      siteWrapper.classList.add("site-wrapper-3");
      document.querySelector(".slider-current").classList.remove("slider-current");
      sliderItemThree.classList.add("slider-current");
    }
  }
}

if (selectSort) {
  selectSort.addEventListener("click", function () {
    if (sortFilter.classList.contains("sort-list-opened")) {
      sortFilter.classList.remove("sort-list-opened");
    } else {
      sortFilter.classList.add("sort-list-opened");
    }
  });
}

sortItemLinks.forEach(function (sortItemLink) {
  sortItemLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    sorting.value = this.innerText;
    selectSort.innerText = this.innerText;
    sortFilter.classList.remove("sort-list-opened");
  });
})
