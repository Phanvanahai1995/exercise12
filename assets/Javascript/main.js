var actionLogin = document.querySelector(".landing__switch-tab-login");
var actionRegister = document.querySelector(".landing__switch-tab-register");
var hideLogin = document.querySelector(".landing-form__login");
var hideRegister = document.querySelector(".landing-form__register");
actionRegister.onclick = function () {
  actionLogin.style.backgroundColor = "transparent";
  actionLogin.style.color = "#fff";
  actionRegister.style.backgroundColor = "#fff";
  actionRegister.style.color = "#3e3f5e";
  hideRegister.style.right = 0;
  hideRegister.style.opacity = 1;
  hideRegister.style.visibility = "visible";
  hideRegister.style.transition = "right 1s , opacity 1s , visibility 1s ";
  hideLogin.style.right = "-485px";
  hideLogin.style.opacity = 0;
  hideLogin.style.visibility = "hidden";
  hideLogin.style.transition = "right 1s , opacity 1s , visibility 1s ";
};

actionLogin.onclick = function () {
  actionRegister.style.backgroundColor = "transparent";
  actionRegister.style.color = "#fff";
  actionLogin.style.backgroundColor = "#fff";
  actionLogin.style.color = "#3e3f5e";
  hideLogin.style.right = 0;
  hideLogin.style.opacity = 1;
  hideLogin.style.visibility = "visible";
  hideLogin.style.transition = "right 1s , opacity 1s , visibility 1s ";
  hideRegister.style.right = "-485px";
  hideRegister.style.opacity = 0;
  hideRegister.style.visibility = "hidden";
  hideRegister.style.transition = "right 1s , opacity 1s , visibility 1s ";
};

console.log(action.style);
