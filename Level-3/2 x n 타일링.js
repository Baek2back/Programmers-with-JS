function solution(n) {
  const initialState = [1, 2];
  if (initialState.includes(n)) return n;
  let [beforePrev, prev] = initialState;
  let answer;
  for (let i = 2; i < n; i++) {
    answer = (prev + beforePrev) % 1000000007;
    [beforePrev, prev] = [prev, answer];
  }
  return answer;
}
