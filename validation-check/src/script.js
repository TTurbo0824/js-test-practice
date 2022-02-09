let username = document.querySelector('#username');
let password = document.querySelector('#password');
let passwordRetype = document.querySelector('#password-retype');

let usernameFailureShort = document.querySelector('.failure-short');
let usernameFailureLong = document.querySelector('.failure-long');
let passwordMis = document.querySelector('.mismatch');

username.addEventListener('keyup', () => {
  if (isMoreThan4Length(username.value) === 'short') {
    usernameFailureShort.classList.remove('hide');
    usernameFailureLong.classList.add('hide');
  } else if (isMoreThan4Length(username.value) === 'long') {
    usernameFailureShort.classList.add('hide');
    usernameFailureLong.classList.remove('hide');
  } else {
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
});

passwordRetype.addEventListener('keyup', () => {
  if (!isMatch(password.value, passwordRetype.value)) {
    passwordMis.classList.remove('hide');
  } else {
    passwordMis.classList.add('hide');
  }
});

function isMoreThan4Length(value) {
  if (value.length < 4) return 'short';
  else if (value.length > 10) return 'long';
}

function isMatch(password1, password2) {
  return password1 === password2;
}
