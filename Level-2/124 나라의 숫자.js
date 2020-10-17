function solution(n) {
  const numbers = [1, 2, 4];
  return n ? solution(Math.floor((n - 1) / 3)) + numbers[(n - 1) % 3] : '';
}
