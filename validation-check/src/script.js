let username = document.querySelector('#username');
let password = document.querySelector('#password');
let passwordRetype = document.querySelector('#password-retype');

let usernameFailureShort = document.querySelector('.failure-short');
let usernameFailureLong = document.querySelector('.failure-long');
let usernameMixed = document.querySelector('.failure-mixed');
let passwordMis = document.querySelector('.mismatch');
let passwordWrong = document.querySelector('.failure-vali');

let submitBnt = document.querySelector('.submit-bnt');
let emptyMessage = document.querySelector('.empty');

let modal = document.querySelector('.backdrop');
let closeBnt = document.querySelector('.fa-times');

username.addEventListener('keyup', () => {
  if (username.value && !onlyNumberAndEnglish(username.value)) {
    usernameMixed.classList.remove('hide');
  } else {
    usernameMixed.classList.add('hide');
  }

  if (isMoreThan4Length(username.value) === 'short') {
    usernameFailureShort.classList.remove('hide');
    usernameFailureLong.classList.add('hide');
  } else if (isMoreThan4Length(username.value) === 'long') {
    usernameFailureShort.classList.add('hide');
    usernameFailureLong.classList.remove('hide');
  }

  if (
    isMoreThan4Length(username.value) !== 'short' &&
    isMoreThan4Length(username.value) !== 'long'
  ) {
    usernameFailureShort.classList.add('hide');
    usernameFailureLong.classList.add('hide');
  }
});

password.addEventListener('keyup', () => {
  if (
    passwordRetype.value !== '' &&
    !isMatch(password.value, passwordRetype.value)
  ) {
    passwordMis.classList.remove('hide');
  } else {
    passwordMis.classList.add('hide');
  }

  if (!strongPassword(password.value)) {
    passwordWrong.classList.remove('hide');
  } else {
    passwordWrong.classList.add('hide');
  }
});

passwordRetype.addEventListener('keyup', () => {
  if (!isMatch(password.value, passwordRetype.value)) {
    passwordMis.classList.remove('hide');
  } else {
    passwordMis.classList.add('hide');
  }
});

submitBnt.addEventListener('click', () => {
  if (
    username.value &&
    password.value &&
    usernameFailureShort.classList.contains('hide') &&
    usernameFailureLong.classList.contains('hide') &&
    usernameMixed.classList.contains('hide') &&
    passwordMis.classList.contains('hide') &&
    passwordWrong.classList.contains('hide')
  ) {
    modal.classList.remove('hide');
  } else if (!username.value || !password.value || !passwordRetype.value) {
    emptyMessage.classList.remove('hide');
  }
});

closeBnt.addEventListener('click', () => {
  location.reload();
});

function isMoreThan4Length(value) {
  if (value.length < 4) return 'short';
  else if (value.length > 10) return 'long';
}

function isMatch(password1, password2) {
  return password1 === password2;
}
