function solution(s) {
  let check = 0;
  for (const parentheses of s) {
    check += parentheses === '(' ? 1 : -1;
    if (check < 0) {
      return false;
    }
  }
  return check ? false : true;
}
