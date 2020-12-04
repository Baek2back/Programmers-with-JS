function solution(n, money) {
  const table = [1, ...new Array(n).fill(0)];
  money.forEach(v => {
    for (let next = v; next <= n; next++) {
      table[next] += table[next - v];
    }
  });
  return table[n] % 1000000007;
}
