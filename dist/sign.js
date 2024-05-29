let mySign = function () {
    let linkLogin = document.querySelector(".formOne a");
    let linkSign = document.querySelector(".formTwo a");
    let forms = document.querySelector(".formOne");
    let sign = document.querySelector(".formTwo");
    let formLog = document.querySelector(".formsInt");
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
};
export { mySign };
