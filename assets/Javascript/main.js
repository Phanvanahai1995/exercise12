var action = document.querySelector(".landing__switch-tab-login");
var actionSwitch = document.querySelector(".landing__switch-tab-register");
var hideLogin = document.querySelector(".landing-form__login");
actionSwitch.onclick = function () {
  action.style.backgroundColor = "transparent";
  action.style.color = "#fff";
  actionSwitch.style.backgroundColor = "#fff";
  actionSwitch.style.color = "#3e3f5e";
};

action.onclick = function () {
  actionSwitch.style.backgroundColor = "transparent";
  actionSwitch.style.color = "#fff";
  action.style.backgroundColor = "#fff";
  action.style.color = "#3e3f5e";
};

console.log(action.style);
