let Email = document.querySelector(".Email input") as HTMLInputElement;
let form = document.querySelectorAll("form")[0] as HTMLFormElement;
let password = document.querySelector(".password input") as HTMLInputElement;

let paragraphEmail = document.querySelector(".Email p") as HTMLElement;
let paragraphPassword = document.querySelector(".password p") as HTMLElement;

let text = document.querySelector(".Email .text") as HTMLElement;
let iconError = document.querySelector(".Email .text .error") as HTMLElement;
let iconTrue = document.querySelector(".Email .text .true") as HTMLElement;

let textPass = document.querySelector(".password .text") as HTMLElement;
let iconErrorPass = document.querySelector(".password .text .error") as HTMLElement;
let iconTruePass = document.querySelector(".password .text .true") as HTMLElement;

let checkInput = function () {
  if (Email.value != "") {
    EmailFunc();
  }

  if (password.value != "") {
    PasswordFunc();
  }

  Email.addEventListener("keyup", EmailFunc);
  password.addEventListener("keyup", function () {
    eyeIcon.style.top = "33%";
    PasswordFunc();
  });

  Email.addEventListener("keyup", function () {
    if (Email.value == "") {
      Email.classList.remove("false");
      Email.classList.remove("true");
      text.classList.remove("active");
    }
  });

  password.addEventListener("keyup", function () {
    if (password.value == "") {
      password.classList.remove("false");
      password.classList.remove("true");
      textPass.classList.remove("active");
      eyeIcon.style.top = "50%";
    }
  });
}

let EmailFunc = function () {
  let EmailRegular = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/ig;

  if (!Email.value.match(EmailRegular)) {
    Email.classList.add("false");
    Email.classList.remove("true");
    text.classList.add("active");

    paragraphEmail.innerHTML = "Email address cant be blank";
    paragraphEmail.style.color = "red";
    iconError.style.color = "red";
    iconTrue.style.display = "none";
    iconError.style.display = "block";
  } else {
    Email.classList.remove("false");
    Email.classList.add("true");
    text.classList.add("active");

    paragraphEmail.innerHTML = "Email success validation";
    paragraphEmail.style.color = "#38ad3c";
    iconTrue.style.color = "#38ad3c";
    iconTrue.style.display = "block";
    iconError.style.display = "none";
  }
}

let PasswordFunc = function () {
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
  } else {
    password.classList.remove("false");
    password.classList.add("true");
    paragraphPassword.innerHTML = "Password success validation";
    paragraphPassword.style.color = "#38ad3c";
    textPass.classList.add("active");

    iconTruePass.style.color = "#38ad3c";
    iconTruePass.style.display = "block";
    iconErrorPass.style.display = "none";
  }

  eyeIcon.style.top = "33%";
}

let submitForm = function () {
  form.onsubmit = function (ele) {
    ele.preventDefault();

    EmailFunc();
    PasswordFunc();
    eyeIcon.style.top = "33%";

    let EmailRegular = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/ig;
    let passwordRegular = /^\d{6,}[^a-zA-Z]/ig;

    if (password.value.match(passwordRegular) && Email.value.match(EmailRegular)) {
      location.href = "indexTwo.html";
      Email.value = "";
      password.value = "";
      password.classList.remove("false");
      password.classList.remove("true");
      textPass.classList.remove("active");
      Email.classList.remove("false");
      Email.classList.remove("true");
      text.classList.remove("active");
    }
  }
}

let eyeIcon = document.querySelector(".eyeOff") as HTMLElement;

let iconFunc = function () {
  eyeIcon.addEventListener("click", function () {
    if (eyeIcon.getAttribute("name") === "eye-off-outline") {
      eyeIcon.setAttribute("name", "eye-outline");
      password.type = "text";
    } else {
      eyeIcon.setAttribute("name", "eye-off-outline");
      password.type = "Password";
    }
  });
}

export { checkInput, submitForm, iconFunc };