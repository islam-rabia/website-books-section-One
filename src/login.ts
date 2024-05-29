let loginFunc = function (): void {
  let login = document.querySelector(".person") as HTMLElement;
  let divLogin = document.querySelector(".main-two") as HTMLElement;
  let btnClose = document.querySelector(".login-div .btn-close") as HTMLElement;
  let loginDiv = document.querySelector(".login-div") as HTMLElement;

  login.addEventListener("click", function (): void {
    if (divLogin) {
      divLogin.classList.add("active");
      loginDiv.classList.add("active");
    }
  });

  btnClose.addEventListener("click", function (): void {
    if (divLogin) {
      divLogin.classList.remove("active");
      loginDiv.classList.remove("active");
    }
  })
}

export { checkInput, submitForm, iconFunc } from "./form-validation.js";
export { mySign } from "./sign.js";
export { SignValid, KeyUpFunc, iconFunction } from "./Sign-validation.js";
export { loginFunc };