function solution(n) {
  if (n === 1 || n === 2) return n;
  let [prev2, prev1] = [1, 2];
  let answer;
  for (let i = 2; i < n; i++) {
    answer = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = answer;
  }
  return answer;
}
