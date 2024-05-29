let loginFunc = function () {
    let login = document.querySelector(".person");
    let divLogin = document.querySelector(".main-two");
    let btnClose = document.querySelector(".login-div .btn-close");
    let loginDiv = document.querySelector(".login-div");
    login.addEventListener("click", function () {
        if (divLogin) {
            divLogin.classList.add("active");
            loginDiv.classList.add("active");
        }
    });
    btnClose.addEventListener("click", function () {
        if (divLogin) {
            divLogin.classList.remove("active");
            loginDiv.classList.remove("active");
        }
    });
};
export { checkInput, submitForm, iconFunc } from "./form-validation.js";
export { mySign } from "./sign.js";
export { SignValid, KeyUpFunc, iconFunction } from "./Sign-validation.js";
export { loginFunc };
