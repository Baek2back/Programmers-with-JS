function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  return A.reduce((answer, v) => {
    answer += v * B.pop();
    return answer;
  }, 0);
}
