const UI = {
  form: document.forms["loginForm"],
  inputEmail: document.getElementById("email"),
  inputPassword: document.getElementById("password"),
};

const regForm = {
  reg_form: document.querySelector(".loginForm"),
  inputEmail: document.querySelector("#reg-email"),
  inputPassword: document.querySelector("#reg-password"),
  inputNickname: document.querySelector("#reg-nickname"),
  inputFirstName: document.querySelector("#reg-firstName"),
  inputLastName: document.querySelector("#reg-lastName"),
  inputPhone: document.querySelector("#reg-phone"),
  inputGender: document.querySelector("input[type='radio']"),
  inputCity: document.querySelector("#reg-city"),
  inputCountry: document.querySelector("#reg-country"),
  inputDate: document.querySelector("#dateBirth"),
};

export { UI, regForm };
