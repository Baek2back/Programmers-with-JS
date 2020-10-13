function solution(s) {
  const regExp = /^(\d{4}|\d{6})$/g;
  return regExp.test(s);
}
