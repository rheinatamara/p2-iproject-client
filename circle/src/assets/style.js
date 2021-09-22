const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#btn-modal");
const inputs = document.querySelectorAll(".input1");
const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const password = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

togglePassword2.addEventListener("click", function () {
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});
modalBtn.addEventListener("click", openModal);
window.addEventListener("click", clickOutside);

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function openModal() {
  modal.style.display = "block";
}
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const container = document.querySelector("#container");

signInButton.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});
signUpButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});
