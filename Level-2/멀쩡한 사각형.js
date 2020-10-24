function solution(w, h) {
  function getGCD(a, b) {
    const [high, low] = [Math.max(a, b), Math.min(a, b)];
    return low === 0 ? high : getGCD(low, high % low);
  }
  return w * h - (w + h - getGCD(w, h));
}
