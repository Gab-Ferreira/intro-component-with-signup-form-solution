let myForm = document.getElementById("form");
let emailRegex =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;
myForm.addEventListener("submit", function (e) {
  let FNInput = document.getElementById("firstName");
  let LNInput = document.getElementById("lastName");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  if (FNInput.value.trim() === "") {
    let FNError = document.getElementById("FNError");
    FNError.innerHTML = "First Name cannot be empty";
    FNInput.classList.add("error-style");
    e.preventDefault();
  }

  if (LNInput.value.trim() === "") {
    let LNError = document.getElementById("LNError");
    LNError.innerHTML = "Last Name cannot be empty";
    LNInput.classList.add("error-style");
    e.preventDefault();
  }

  if (emailInput.value.trim() === "") {
    let emailError = document.getElementById("emailError");
    emailError.innerHTML = "Email cannot be empty";
    emailInput.classList.add("error-style");
    e.preventDefault();
  } else if (emailRegex.test(emailInput.value) == false) {
    let emailError = document.getElementById("emailError");
    emailError.innerHTML = "Looks like this is not an email";
    emailInput.classList.add("error-style");
    e.preventDefault();
  }

  if (passwordInput.value.trim() === "") {
    let passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "Password cannot be empty";
    passwordInput.classList.add("error-style");
    e.preventDefault();
  }
});
