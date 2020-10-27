function solution(nums) {
  function getCombinations(arr, toSelectNumber) {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((result, fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, toSelectNumber - 1);
      const attached = combinations.map((combination) => {
        return [fixed, ...combination];
      });
      return (result = [...result, ...attached]);
    }, []);
  }
  function getSumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  function makeSieve(limit) {
    const sieve = [...Array(limit)].fill(false).fill(true, 2);
    sieve.forEach((v, i, src) => {
      if (v && 0 < i && i <= Math.sqrt(limit)) {
        for (let mult = Math.pow(i, 2); mult <= limit; mult += i) {
          src[mult] = false;
        }
      }
    });
    return sieve;
  }
  const sieve = makeSieve(3000);
  const candidates = getCombinations(nums, 3);
  let answer = 0;
  candidates.forEach((candidate) => {
    const sum = getSumOfArray(candidate);
    if (sieve[sum]) answer++;
  });
  return answer;
}
