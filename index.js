const resultDialog = document.getElementById('resultDialog');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const emailErrorImg = email.nextElementSibling;
const emailErrorMsg = email.parentElement.nextElementSibling;
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const elArr = [firstName, lastName, password];
  elArr.forEach((el) => {
    if (el.value.trim().length === 0) {
      el.classList.add('input-error');
      let elErrorImg = el.nextElementSibling;
      let elErrorMsg = el.parentElement.nextElementSibling;

      elErrorImg.style.visibility = 'visible';
      elErrorMsg.style.visibility = 'visible';
    } else {
      el.classList.remove('input-error');
      let elErrorImg = el.nextElementSibling;
      let elErrorMsg = el.parentElement.nextElementSibling;

      elErrorImg.style.visibility = 'hidden';
      elErrorMsg.style.visibility = 'hidden';
    }
  });
  if (!validateEmail(email.value)) {
    email.classList.add('input-error');
    emailErrorImg.style.visibility = 'visible';
    emailErrorMsg.style.visibility = 'visible';
  } else {
    email.classList.remove('input-error');
    emailErrorImg.style.visibility = 'hidden';
    emailErrorMsg.style.visibility = 'hidden';
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
