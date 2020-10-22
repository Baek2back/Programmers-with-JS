function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((answer, v, i) => {
    return answer + v * B[i];
  }, 0);
}
