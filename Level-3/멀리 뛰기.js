function solution(n) {
  if (n <= 2) return n;
  let [beforePrev, prev] = [1, 2];
  let current = beforePrev + prev;
  for (let i = 3; i < n; i++) {
    [beforePrev, prev] = [prev, current];
    current = (beforePrev + prev) % 1234567;
  }
  return current;
}
