// 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}

// 8-12자, 알파벳과 숫자 및 특수문자(@$!%*#?&)는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/.test(str);
}
