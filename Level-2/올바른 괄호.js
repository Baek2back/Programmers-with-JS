function solution(s) {
  let correct = 0;
  for (const parenthesis of s) {
    switch (parenthesis) {
      case '(':
        correct += 1;
        break;
      case ')':
        correct -= 1;
        break;
    }
    if (correct < 0) return false;
  }
  return correct ? false : true;
}
