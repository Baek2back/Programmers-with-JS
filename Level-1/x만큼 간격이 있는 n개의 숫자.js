function solution(x, n) {
  return [...Array(n).keys()].map((e) => (e + 1) * x);
}
