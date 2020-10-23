function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

function solution(n, a, b, answer = 0) {
  return a === b
    ? answer
    : solution(n, Math.ceil(a / 2), Math.ceil(b / 2), answer + 1);
}
