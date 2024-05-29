let mySign = function () {
  let linkLogin = document.querySelector(".formOne a") as HTMLLinkElement;
  let linkSign = document.querySelector(".formTwo a") as HTMLLinkElement;
  let forms = document.querySelector(".formOne") as HTMLElement;
  let sign = document.querySelector(".formTwo") as HTMLElement;

  let formLog = document.querySelector(".formsInt") as HTMLElement;

  linkLogin.addEventListener("click", function () {
    forms.classList.add("active");
    sign.classList.add("active");
    formLog.classList.add("active");
  });

  linkSign.addEventListener("click", function () {
    forms.classList.remove("active");
    sign.classList.remove("active");
    formLog.classList.remove("active");
  });
}

export { mySign };