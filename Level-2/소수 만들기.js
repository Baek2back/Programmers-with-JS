function solution(nums) {
  const getCombinations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((ret, fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, toSelectNumber - 1);
      const attached = combinations.map((combination) => {
        return [fixed, ...combination];
      });
      return (ret = [...ret, ...attached]);
    }, []);
  };
  const makeSieve = (limit) => {
    const sieve = [...Array(limit + 1)].fill(false).fill(true, 2);
    sieve.forEach((v, i, src) => {
      if (v && 0 < i && i <= Math.sqrt(limit)) {
        for (let mult = Math.pow(i, 2); mult <= limit; mult += i) {
          src[mult] = false;
        }
      }
    });
    return sieve;
  };
  const getSumOfArray = (arr) => {
    return arr.reduce((ret, v) => ret + v, 0);
  };
  const sieve = makeSieve(3000);
  const combinations = getCombinations(nums, 3);
  const answer = combinations.reduce((answer, combination) => {
    return sieve[getSumOfArray(combination)] ? answer + 1 : answer;
  }, 0);

  return answer;
}
