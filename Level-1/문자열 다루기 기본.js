function solution(s) {
  const regExp = new RegExp(/^\d{6}$|^\d{4}$/);
  return regExp.test(s);
}
