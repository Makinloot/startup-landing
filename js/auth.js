// submit registration form
const signupForm = document.getElementById("signup-form");
const modal = document.getElementById("modal");
signupForm.addEventListener("submit", (e) => {
  // input fiels
  const inputFields = {
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    confirm_password: document.getElementById("confirm-password"),
    checkbox: document.getElementById("privacy-policy"),
  };

  // input field errors
  const inputErrors = {
    username: document.getElementById("username-error"),
    email: document.getElementById("email-error"),
    password: document.getElementById("password-error"),
    confirm_password: document.getElementById("confirm-password-error"),
    checkbox: document.getElementById("checkbox-error"),
  };

  // validated inputs
  const validInputs = {
    username: validateInputs(inputFields.username, inputErrors.username),
    email: validateInputs(inputFields.email, inputErrors.email),
    password: validateInputs(inputFields.password, inputErrors.password),
    confirm_password: validateInputs(
      inputFields.confirm_password,
      inputErrors.confirm_password
    ),
    checkbox: validateCheckBox(inputFields.checkbox, inputErrors.checkbox),
  };

  // input valuse
  const inputValues = [
    { username: inputFields.username.value },
    { email: inputFields.email.value },
    { password: inputFields.password.value },
  ];

  e.preventDefault();
  // get values from username, email and password input
  inputValues.forEach((value) => {
    return value;
  });

  if (
    validInputs.username &&
    validInputs.email &&
    validInputs.password &&
    validInputs.confirm_password &&
    validInputs.checkbox
  ) {
    e.preventDefault();
    modal.showModal();
    console.log("ready to reach server");
  } else {
    e.preventDefault();
    console.log("not ready to reach server");
  }
});

// check if inputs are valid
function validateInputs(input, error) {
  if (!input.validity.valid) {
    error.classList.add("active");
    if (input.validity.tooShort) error.innerText = "Minimum 6 characters";
    else if (input.validity.typeMismatch) error.innerText = "Enter valid Email";
    else if (input.validity.patternMismatch)
      error.innerText = "Password too weak";
    else error.innerText = "Required field";
    return false;
  } else {
    error.classList.remove("active");
    return true;
  }
}

// check if check box is checked
function validateCheckBox(box, error) {
  if (box.checked) {
    error.style.display = "none";
    return true;
  } else {
    error.style.display = "block";
    return false;
  }
}

// close modal function
function closeModal(element) {
  element.close();
}
