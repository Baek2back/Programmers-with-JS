function solution(phone_number) {
  const regExp = new RegExp(/\d(?=\d{4})/, 'g');
  return phone_number.replace(regExp, '*');
}
