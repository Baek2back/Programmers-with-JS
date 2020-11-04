function solution(nums) {
  const getCombinations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((ret, fixed, index, origin) => {
      const rest = [...origin.slice(index + 1)];
      const combinations = getCombinations(rest, toSelectNumber - 1);
      const attached = combinations.map((combination) => {
        return [fixed, ...combination];
      });
      return (ret = [...ret, ...attached]);
    }, []);
  };
  const getSumOfArray = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
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
  const combinations = [
    ...new Set(getCombinations(nums, 3).map(getSumOfArray))
  ];
  const sieve = makeSieve(3000);

  return combinations.filter((combination) => sieve[combination]).length;
}
