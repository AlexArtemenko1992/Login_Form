import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import { UI, regForm } from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";
import { login, signup } from "./services/auth.service";
import { notify } from "./views/notification";

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

const {
  reg_form,
  inputEmail: email,
  inputPassword: password,
  inputNickname: nickname,
  inputFirstName: first_name,
  inputLastName: last_name,
  inputPhone: phone,
  inputGender: gender_orientation,
  inputCity: city,
  inputCountry: country,
  inputDate: date,
} = regForm;

const allInputs = [
  email,
  password,
  nickname,
  first_name,
  last_name,
  phone,
  gender_orientation,
  city,
  country,
  date,
];

// console.log(allInputs);

// Events

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});

reg_form.addEventListener("submit", (e) => {
  e.preventDefault();
  regFormSubmit();
});

inputs.forEach((el) => el.addEventListener("focus", () => removeInputError(el)));
allInputs.forEach((el) => el.addEventListener("focus", () => removeInputError(el)));

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
    notify({ msg: "Login success", className: "alert-success" });
  } catch (err) {
    notify({ msg: "Login faild", className: "alert-danger" });
    form.reset();
  }
}

async function regFormSubmit() {
  const isValidForm = allInputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await signup(
      email.value,
      password.value,
      nickname.value,
      first_name.value,
      last_name.value,
      phone.value,
      gender_orientation.value,
      city.value,
      country.value,
      date.value,
    );
    reg_form.reset();
    notify({ msg: "User created", className: "alert-success" });
    loginTest.classList.add("active");
    singupTest.classList.remove("active");
    formBody.classList.remove("d-none");
    regFormBody.classList.add("d-none");
  } catch (error) {
    console.log(error);
    notify({ msg: "Failed to create user", className: "alert-danger" });
    reg_form.reset();
  }
}

const links = document.querySelectorAll(".nav-link");
const loginTest = document.querySelector(".login");
const singupTest = document.querySelector(".signup");
const formBody = document.querySelector(".card-body");
const regFormBody = document.querySelector(".card-body-registration");
const loginPageWrap = document.querySelector(".login-page-wrap");

links.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("login")) {
      loginTest.classList.add("active");
      singupTest.classList.remove("active");
      formBody.classList.remove("d-none");
      regFormBody.classList.add("d-none");
    }
    if (el.classList.contains("signup")) {
      loginTest.classList.remove("active");
      singupTest.classList.add("active");
      regFormBody.classList.remove("d-none");
      formBody.classList.add("d-none");
    }
  });
});

function loginTemplate() {}

function signupTemplate() {}
