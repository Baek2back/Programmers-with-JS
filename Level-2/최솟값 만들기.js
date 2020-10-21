function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  return A.reduce((answer, v, i) => {
    answer += v * B[i];
    return answer;
  }, 0);
}
