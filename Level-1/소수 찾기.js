const solution = (n) => {
  const sieve = [...Array(n + 1)].fill(true).fill(false, 0, 2);
  sieve.forEach((element, idx) => {
    if (1 < idx && idx <= Math.sqrt(n) && element) {
      for (let multiple = Math.pow(idx, 2); multiple <= n; multiple += idx) {
        sieve[multiple] = false;
      }
    }
  });
  return sieve.filter((s) => s).length;
};
