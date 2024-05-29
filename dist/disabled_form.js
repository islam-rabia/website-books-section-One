let EmailDisabled = document.querySelector(".formOne .Email input");
let passwordDisabled = document.querySelector(".formOne .password input");
let UserFirstInput = document.querySelector(".first input");
let UserLastInput = document.querySelector(".last input");
let UserPhoneInput = document.querySelector(".Phone input");
let EmailInput = document.querySelector(".formTwo .Email input");
let password = document.querySelector(".formTwo .password input");
let Crossword = document.querySelector(".formTwo .Crossword input");
let OpenFormOne = document.querySelector(".formOne .btn-form div");
let OpenFormTwo = document.querySelector(".formTwo .btn-form div");
let massageForm = document.querySelector(".massageForm");
let disabledForm = function () {
    OpenFormOne.addEventListener("click", function () {
        EmailDisabled.removeAttribute("disabled");
        passwordDisabled.removeAttribute("disabled");
        massageForm.classList.add("active");
        setTimeout(function () {
            massageForm.classList.remove("active");
        }, 1000);
    });
    OpenFormTwo.addEventListener("click", function () {
        UserFirstInput.removeAttribute("disabled");
        UserLastInput.removeAttribute("disabled");
        UserPhoneInput.removeAttribute("disabled");
        EmailInput.removeAttribute("disabled");
        password.removeAttribute("disabled");
        Crossword.removeAttribute("disabled");
        massageForm.classList.add("active");
        setTimeout(function () {
            massageForm.classList.remove("active");
        }, 1000);
    });
};
export { disabledForm };
