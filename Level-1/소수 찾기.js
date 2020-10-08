function solution(n) {
  const sieve = [...Array(n + 1)].fill(false).fill(true, 2);
  sieve.forEach((v, i) => {
    if (v && 1 < i && i <= Math.sqrt(n)) {
      for (let mul = Math.pow(i, 2); mul <= n; mul += i) {
        sieve[mul] = false;
      }
    }
  });
  return sieve.filter((v) => v).length;
}
