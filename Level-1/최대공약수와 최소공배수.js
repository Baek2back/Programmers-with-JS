function solution(n, m) {
  function getGcd(a, b) {
    return b ? getGcd(b, a % b) : a;
  }
  const [low, high] = [Math.min(n, m), Math.max(n, m)];
  const gcd = getGcd(high, low);
  return [gcd, (low * high) / gcd];
}
