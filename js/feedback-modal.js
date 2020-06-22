var buttonFeedback = document.querySelector(".button-feedback");
var feedbackForm = document.querySelector(".feedback-form");
var modalClose = loginPopup.querySelector(".modal-close");
var feedbackFormForm = loginPopup.querySelector(".feedback-form-form");
var feedbackName = loginPopup.querySelector(".feedback-name");
var feedbackEmail = loginPopup.querySelector(".feedback-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonFeedback.addEventListener("click", function () {
    evt.preventDefault();
    feedbackForm.classList.add("modal-show");

    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
});

feedbackFormForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackForm.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackForm.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
  });