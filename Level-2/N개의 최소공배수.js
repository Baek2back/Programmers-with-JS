function solution(arr) {
  function getGCD(a, b) {
    const [low, high] = [Math.min(a, b), Math.max(a, b)];
    return low === 0 ? high : getGCD(low, high % low);
  }
  function getLCM(a, b) {
    const gcd = getGCD(a, b);
    return (a * b) / gcd;
  }
  const answer = arr.reduce((lcm, v, i) => getLCM(lcm, v), arr[0]);
  return answer;
}
