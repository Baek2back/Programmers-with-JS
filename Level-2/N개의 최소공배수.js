function solution(arr) {
  function getLCM(a, b) {
    function getGCD(a, b) {
      const [high, low] = [Math.max(a, b), Math.min(a, b)];
      return low === 0 ? high : getGCD(low, high % low);
    }
    return (a * b) / getGCD(a, b);
  }

  return arr.reduce((answer, v) => getLCM(answer, v), 1);
}
