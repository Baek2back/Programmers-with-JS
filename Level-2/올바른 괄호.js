function solution(s) {
  let check = 0;
  for (const parenthesis of s) {
    check += parenthesis === '(' ? 1 : -1;
    if (check < 0) return false;
  }
  return check ? false : true;
}
