function solution(n) {
  let answer = [];
  while (n !== 0) {
    answer = [n % 3, ...answer];
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
