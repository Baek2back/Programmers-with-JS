function solution(n) {
  const candidates = [...Array(Math.floor(n / 2)).keys()].map((v) => v + 1);
  return candidates.reduce((answer, v, i) => {
    return n % v === 0 ? answer + v : answer;
  }, n);
}
