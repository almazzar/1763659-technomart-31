const loginLink = document.querySelector(".button-contacts");
const loginPopup = document.querySelector(".modal-feedback");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".feedback-form-section");
const loginName = loginPopup.querySelector(".feedback-form-name");
const loginEmail = loginPopup.querySelector(".feedback-form-name");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Name");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginName.focus();
});

if (storage) {
  loginName.value = storage;
  loginEmail.focus();
} else {
  loginEmail.focus();
}
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("Name", loginName.value),
    localStorage.setItem("Email", loginEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});
