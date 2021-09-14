const $ = document.querySelector.bind(document);

const fName = $("#fName");
const lName = $("#lName");
const email = $("#email");
const password = $("#password");
const btn = $("#button");

function inputCheck() {
  this.value.trim();
  if (!this.value) {
    this.classList.add("error");
    this.parentElement.children[1].classList.add("error");
    this.parentElement.children[2].classList.add("error");
  }
  if (this.value) {
    this.classList.remove("error");
    this.parentElement.children[1].classList.remove("error");
    this.parentElement.children[2].classList.remove("error");
  }
}
function emailCheck() {
  this.value.trim();
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(this.value)) {
    this.classList.add("error");
    this.parentElement.children[1].classList.add("error");
    this.parentElement.children[2].classList.add("error");
  }
  if (regex.test(this.value)) {
    this.classList.remove("error");
    this.parentElement.children[1].classList.remove("error");
    this.parentElement.children[2].classList.remove("error");
  }
}
function passwordCheck() {
  this.value.trim();
  if (this.value.length < 8) {
    this.classList.add("error");
    this.parentElement.children[1].classList.add("error");
    this.parentElement.children[2].classList.add("error");
  } else {
    this.classList.remove("error");
    this.parentElement.children[1].classList.remove("error");
    this.parentElement.children[2].classList.remove("error");
  }
}

fName.onblur = inputCheck;
lName.onblur = inputCheck;
email.onblur = emailCheck;
password.onblur = passwordCheck;
