let formTwo = document.querySelector(".formTwo");
let UserFirstInput = document.querySelector(".first input");
let UserLastInput = document.querySelector(".last input");
let UserPhoneInput = document.querySelector(".Phone input");
let EmailInput = document.querySelector(".formTwo .Email input");
let password = document.querySelector(".formTwo .password input");
let Crossword = document.querySelector(".formTwo .Crossword input");
let paragraphFirst = document.querySelector(".first p");
let paragraphLast = document.querySelector(".last p");
let paragraphPhone = document.querySelector(".Phone p");
let paragraphEmail = document.querySelector(".formTwo .Email p");
let paragraphPassword = document.querySelector(".formTwo .password p");
let paragraphCrossword = document.querySelector(".formTwo .Crossword p");
let textFirst = document.querySelector(".first .text");
let iconErrorFirst = document.querySelector(".first .text .error");
let iconTrueFirst = document.querySelector(".first .text .true");
let textLast = document.querySelector(".last .text");
let iconErrorLast = document.querySelector(".last .text .error");
let iconTrueLast = document.querySelector(".last .text .true");
let textPhone = document.querySelector(".Phone .text");
let iconErrorPhone = document.querySelector(".Phone .text .error");
let iconTruePhone = document.querySelector(".Phone .text .true");
let textEmail = document.querySelector(".formTwo .Email .text");
let iconErrorEmail = document.querySelector(".formTwo .Email .text .error");
let iconTrueEmail = document.querySelector(".formTwo .Email .text .true");
let textPass = document.querySelector(".formTwo .password .text");
let iconErrorPass = document.querySelector(".formTwo .password .text .error");
let iconTruePass = document.querySelector(".formTwo .password .text .true");
let textCrossword = document.querySelector(".formTwo .Crossword .text");
let iconErrorCrossword = document.querySelector(".formTwo .Crossword .text .error");
let iconTrueCrossword = document.querySelector(".formTwo .Crossword .text .true");
let KeyUpFunc = function () {
    UserFirstInput.addEventListener("keyup", UserFirst);
    UserLastInput.addEventListener("keyup", UserLast);
    UserPhoneInput.addEventListener("keyup", Phone);
    EmailInput.addEventListener("keyup", EmailFuncInt);
    password.addEventListener("keyup", function () {
        eyeIconOne.style.top = "33%";
        PasswordFuncInt();
    });
    Crossword.addEventListener("keyup", function () {
        eyeIconTwo.style.top = "33%";
        CrosswordFuncInt();
        validation();
    });
    UserFirstInput.addEventListener("keyup", function () {
        if (UserFirstInput.value == "") {
            UserFirstInput.classList.remove("false");
            UserFirstInput.classList.remove("true");
            textFirst.classList.remove("active");
        }
    });
    UserLastInput.addEventListener("keyup", function () {
        if (UserLastInput.value == "") {
            UserLastInput.classList.remove("false");
            UserLastInput.classList.remove("true");
            textLast.classList.remove("active");
        }
    });
    UserPhoneInput.addEventListener("keyup", function () {
        if (UserPhoneInput.value == "") {
            UserPhoneInput.classList.remove("false");
            UserPhoneInput.classList.remove("true");
            textPhone.classList.remove("active");
        }
    });
    EmailInput.addEventListener("keyup", function () {
        if (EmailInput.value == "") {
            EmailInput.classList.remove("false");
            EmailInput.classList.remove("true");
            textEmail.classList.remove("active");
        }
    });
    password.addEventListener("keyup", function () {
        if (password.value == "") {
            password.classList.remove("false");
            password.classList.remove("true");
            textPass.classList.remove("active");
            eyeIconOne.style.top = "50%";
        }
    });
    Crossword.addEventListener("keyup", function () {
        if (Crossword.value == "") {
            Crossword.classList.remove("false");
            Crossword.classList.remove("true");
            textCrossword.classList.remove("active");
            eyeIconTwo.style.top = "50%";
        }
    });
};
let UserFirst = function () {
    let UserFirstValid = /[a-zA-Z]{5,}/ig;
    if (!UserFirstInput.value.match(UserFirstValid)) {
        UserFirstInput.classList.add("false");
        UserFirstInput.classList.remove("true");
        textFirst.classList.add("active");
        paragraphFirst.innerHTML = "name cant blank";
        paragraphFirst.style.color = "red";
        iconErrorFirst.style.color = "red";
        iconTrueFirst.style.display = "none";
        iconErrorFirst.style.display = "block";
    }
    else {
        UserFirstInput.classList.remove("false");
        UserFirstInput.classList.add("true");
        textFirst.classList.add("active");
        paragraphFirst.innerHTML = "Name validation";
        paragraphFirst.style.color = "#38ad3c";
        iconTrueFirst.style.color = "#38ad3c";
        iconTrueFirst.style.display = "block";
        iconErrorFirst.style.display = "none";
    }
};
let UserLast = function () {
    let UserLastValid = /[a-zA-Z]{5,}/ig;
    if (!UserLastInput.value.match(UserLastValid)) {
        UserLastInput.classList.add("false");
        UserLastInput.classList.remove("true");
        textLast.classList.add("active");
        paragraphLast.innerHTML = "name cant blank";
        paragraphLast.style.color = "red";
        iconErrorLast.style.color = "red";
        iconTrueLast.style.display = "none";
        iconErrorLast.style.display = "block";
    }
    else {
        UserLastInput.classList.remove("false");
        UserLastInput.classList.add("true");
        textLast.classList.add("active");
        paragraphLast.innerHTML = "Name validation";
        paragraphLast.style.color = "#38ad3c";
        iconTrueLast.style.color = "#38ad3c";
        iconTrueLast.style.display = "block";
        iconErrorLast.style.display = "none";
    }
};
let Phone = function () {
    let PhoneValid = /[^a-zA-Z]\d{2,3}\s\d{3}-\d{3}\s\d{2}/ig;
    if (!UserPhoneInput.value.match(PhoneValid)) {
        UserPhoneInput.classList.add("false");
        UserPhoneInput.classList.remove("true");
        textPhone.classList.add("active");
        paragraphPhone.innerHTML = "Phone cant blank";
        paragraphPhone.style.color = "red";
        iconErrorPhone.style.color = "red";
        iconTruePhone.style.display = "none";
        iconErrorPhone.style.display = "block";
    }
    else {
        UserPhoneInput.classList.remove("false");
        UserPhoneInput.classList.add("true");
        textPhone.classList.add("active");
        paragraphPhone.innerHTML = "Phone validation";
        paragraphPhone.style.color = "#38ad3c";
        iconTruePhone.style.color = "#38ad3c";
        iconTruePhone.style.display = "block";
        iconErrorPhone.style.display = "none";
    }
};
let EmailFuncInt = function () {
    let EmailRegularInput = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/ig;
    if (!EmailInput.value.match(EmailRegularInput)) {
        EmailInput.classList.add("false");
        EmailInput.classList.remove("true");
        textEmail.classList.add("active");
        paragraphEmail.innerHTML = "Email cant blank";
        paragraphEmail.style.color = "red";
        iconErrorEmail.style.color = "red";
        iconTrueEmail.style.display = "none";
        iconErrorEmail.style.display = "block";
    }
    else {
        EmailInput.classList.remove("false");
        EmailInput.classList.add("true");
        textEmail.classList.add("active");
        paragraphEmail.innerHTML = "Email validation";
        paragraphEmail.style.color = "#38ad3c";
        iconTrueEmail.style.color = "#38ad3c";
        iconTrueEmail.style.display = "block";
        iconErrorEmail.style.display = "none";
    }
};
let PasswordFuncInt = function () {
    let passwordRegular = /^\d{6,}[^a-zA-Z]/ig;
    if (!password.value.match(passwordRegular)) {
        password.classList.add("false");
        password.classList.remove("true");
        paragraphPassword.innerHTML = "Password address cant be blank";
        paragraphPassword.style.color = "red";
        textPass.classList.add("active");
        iconErrorPass.style.color = "red";
        iconTruePass.style.display = "none";
        iconErrorPass.style.display = "block";
    }
    else {
        password.classList.remove("false");
        password.classList.add("true");
        paragraphPassword.innerHTML = "Password success validation";
        paragraphPassword.style.color = "#38ad3c";
        textPass.classList.add("active");
        iconTruePass.style.color = "#38ad3c";
        iconTruePass.style.display = "block";
        iconErrorPass.style.display = "none";
    }
};
let CrosswordFuncInt = function () {
    let CrosswordRegular = /^\d{6,}[^a-zA-Z]/ig;
    if (!Crossword.value.match(CrosswordRegular)) {
        Crossword.classList.add("false");
        Crossword.classList.remove("true");
        paragraphCrossword.innerHTML = "Password address cant be blank";
        paragraphCrossword.style.color = "red";
        textCrossword.classList.add("active");
        iconErrorCrossword.style.color = "red";
        iconTrueCrossword.style.display = "none";
        iconErrorCrossword.style.display = "block";
    }
    else {
        Crossword.classList.remove("false");
        Crossword.classList.add("true");
        paragraphCrossword.innerHTML = "Password success validation";
        paragraphCrossword.style.color = "#38ad3c";
        textCrossword.classList.add("active");
        iconTrueCrossword.style.color = "#38ad3c";
        iconTrueCrossword.style.display = "block";
        iconErrorCrossword.style.display = "none";
    }
};
let validation = function () {
    if (Crossword.value !== "" && password.value !== "" && Crossword.value == password.value) {
        Crossword.classList.remove("false");
        Crossword.classList.add("true");
        paragraphCrossword.innerHTML = "Password success validation";
        paragraphCrossword.style.color = "#38ad3c";
        textCrossword.classList.add("active");
        iconTrueCrossword.style.color = "#38ad3c";
        iconTrueCrossword.style.display = "block";
        iconErrorCrossword.style.display = "none";
    }
    else {
        Crossword.classList.add("false");
        Crossword.classList.remove("true");
        paragraphCrossword.innerHTML = "Password address cant be blank";
        paragraphCrossword.style.color = "red";
        textCrossword.classList.add("active");
        iconErrorCrossword.style.color = "red";
        iconTrueCrossword.style.display = "none";
        iconErrorCrossword.style.display = "block";
    }
};
let SignValid = function () {
    formTwo.onsubmit = function (ele) {
        ele.preventDefault();
        UserFirst();
        UserLast();
        Phone();
        EmailFuncInt();
        PasswordFuncInt();
        CrosswordFuncInt();
        validation();
        eyeIconOne.style.top = "33%";
        eyeIconTwo.style.top = "33%";
        let UserFirstValid = /[a-zA-Z]{5,}/ig;
        let UserLastValid = /[a-zA-Z]{5,}/ig;
        let PhoneValid = /[^a-zA-Z]\d{2,3}\s\d{3}-\d{3}\s\d{2}/ig;
        let EmailRegularInput = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/ig;
        let passwordRegular = /^\d{6,}[^a-zA-Z]/ig;
        let CrosswordRegular = /^\d{6,}[^a-zA-Z]/ig;
        if (UserFirstInput.value.match(UserFirstValid)
            && UserLastInput.value.match(UserLastValid)
            && UserPhoneInput.value.match(PhoneValid)
            && EmailInput.value.match(EmailRegularInput)
            && password.value.match(passwordRegular)
            && Crossword.value.match(CrosswordRegular)) {
            location.href = "indexThree.html";
            UserFirstInput.value = "";
            UserPhoneInput.value = "";
            EmailInput.value = "";
            password.value = "";
            Crossword.value = "";
            UserLastInput.value = "";
            UserFirstInput.classList.remove("false");
            UserFirstInput.classList.remove("true");
            textFirst.classList.remove("active");
            UserLastInput.classList.remove("false");
            UserLastInput.classList.remove("true");
            textLast.classList.remove("active");
            UserPhoneInput.classList.remove("false");
            UserPhoneInput.classList.remove("true");
            textPhone.classList.remove("active");
            EmailInput.classList.remove("false");
            EmailInput.classList.remove("true");
            textEmail.classList.remove("active");
            password.classList.remove("false");
            password.classList.remove("true");
            textPass.classList.remove("active");
            Crossword.classList.remove("false");
            Crossword.classList.remove("true");
            textCrossword.classList.remove("active");
        }
    };
};
let eyeIconOne = document.querySelectorAll(".formTwo .eyeOff")[0];
let eyeIconTwo = document.querySelectorAll(".formTwo .eyeOff")[1];
let iconFunction = function () {
    eyeIconOne.addEventListener("click", function () {
        if (eyeIconOne.getAttribute("name") === "eye-off-outline") {
            eyeIconOne.setAttribute("name", "eye-outline");
            password.type = "text";
        }
        else {
            eyeIconOne.setAttribute("name", "eye-off-outline");
            password.type = "Password";
        }
    });
    eyeIconTwo.addEventListener("click", function () {
        if (eyeIconTwo.getAttribute("name") === "eye-off-outline") {
            eyeIconTwo.setAttribute("name", "eye-outline");
            Crossword.type = "text";
        }
        else {
            eyeIconTwo.setAttribute("name", "eye-off-outline");
            Crossword.type = "Password";
        }
    });
};
export { SignValid, KeyUpFunc, iconFunction };
