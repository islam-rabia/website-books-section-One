import { ModeFunction } from "./Dark_Light.js";
ModeFunction();

const promises = Promise.all(
  [
    import("./header_navbar.js"),
  ]
);

promises.then(function (result) {
  result[0].headerFunc();
});

import { searchFunc } from "./search.js";
searchFunc();

import * as All from "./login.js";
All.loginFunc();
All.checkInput();
All.submitForm();
All.mySign();
All.iconFunc();
All.SignValid();
All.KeyUpFunc();
All.iconFunction();

document.onkeydown = function (e) {
  if (e.key == "F12") {
    return false;
  }

  if (e.ctrlKey && e.key == "u") {
    return false;
  }

  if (e.ctrlKey && e.key == "c") {
    return false;
  }

  if (e.ctrlKey && e.key == "v") {
    return false;
  }
}

document.oncontextmenu = function () {
  return false;
}

import { disabledForm } from "./disabled_form.js";
disabledForm();