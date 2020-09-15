const solution = (n) => {
  const candidates = [...Array(Math.floor(n / 2)).keys()].map((i) => i + 1);
  return candidates.filter((c) => n % c === 0).reduce((a, b) => a + b, n);
};
