function solution(a, b) {
  const [low, high] = [Math.min(a, b), Math.max(a, b)];
  const diff = Math.abs(high - low) + 1;
  return ((low + high) * diff) / 2;
}
