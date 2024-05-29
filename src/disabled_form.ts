let EmailDisabled = document.querySelector(".formOne .Email input") as HTMLInputElement;
let passwordDisabled = document.querySelector(".formOne .password input") as HTMLInputElement;

let UserFirstInput = document.querySelector(".first input") as HTMLInputElement;
let UserLastInput = document.querySelector(".last input") as HTMLInputElement;
let UserPhoneInput = document.querySelector(".Phone input") as HTMLInputElement;
let EmailInput = document.querySelector(".formTwo .Email input") as HTMLInputElement;
let password = document.querySelector(".formTwo .password input") as HTMLInputElement;
let Crossword = document.querySelector(".formTwo .Crossword input") as HTMLInputElement;

let OpenFormOne = document.querySelector(".formOne .btn-form div") as HTMLElement;
let OpenFormTwo = document.querySelector(".formTwo .btn-form div") as HTMLElement;

let massageForm = document.querySelector(".massageForm") as HTMLElement;

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
}

export { disabledForm }