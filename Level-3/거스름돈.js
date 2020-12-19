function solution(n, money) {
  const table = [1, ...new Array(n).fill(0)];
  money.forEach(won => {
    for (let current = won; current <= n; current++) {
      table[current] += table[current - won];
    }
  });
  return table[n] % 1000000007;
}
