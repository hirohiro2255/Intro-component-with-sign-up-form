const resultDialog = document.getElementById('resultDialog');

const firstName = document.getElementById('firstName');
const firstNameErrorImg = firstName.nextElementSibling;
const firstNameErrorMsg = firstName.parentElement.nextElementSibling;

const lastName = document.getElementById('lastName');
const lastNameErrorImg = lastName.nextElementSibling;
const lastNameErrorMsg = lastName.parentElement.nextElementSibling;

const email = document.getElementById('email');
const emailErrorImg = email.nextElementSibling;
const emailErrorMsg = email.parentElement.nextElementSibling;

const password = document.getElementById('password');
const passwordErrorImg = password.nextElementSibling;
const passwordErrorMsg = password.parentElement.nextElementSibling;

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (firstName.value.length === 0) {
    firstName.classList.add('input-error');
    firstNameErrorImg.style.visibility = 'visible';
    firstNameErrorMsg.style.visibility = 'visible';
  }
  if (lastName.value.length === 0) {
    lastName.classList.add('input-error');
    lastNameErrorImg.style.visibility = 'visible';
    lastNameErrorMsg.style.visibility = 'visible';
  }

  if (!validateEmail(email.value)) {
    email.classList.add('input-error');
    emailErrorImg.style.visibility = 'visible';
    emailErrorMsg.style.visibility = 'visible';
  }

  if (password.value.length === 0) {
    password.classList.add('input-error');
    passwordErrorImg.style.visibility = 'visible';
    passwordErrorMsg.style.visibility = 'visible';
  }

  resultDialog.showModal();
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
