function solution(n) {
  let [prev2, prev1] = [0, 1];
  let answer = prev2 + prev1;
  for (let i = 2; i < n; i++) {
    [prev2, prev1] = [prev1, answer];
    answer = prev2 + prev1;
  }
  return answer;
}
