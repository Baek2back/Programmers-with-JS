function solution(numbers) {
  const getPermutations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((ret, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, toSelectNumber - 1);
      const attached = permutations.map((permutation) => {
        return [fixed, ...permutation];
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

  const getRange = (limit) => {
    return [...Array(limit).keys()].map((v) => v + 1);
  };

  const range = getRange(numbers.length);

  const candidates = range.reduce((candidates, v) => {
    const permutations = getPermutations([...numbers], v).map((v) =>
      Number(v.join(''))
    );
    candidates = [...candidates, ...permutations];
    return [...new Set(candidates)];
  }, []);

  const sieve = makeSieve(9999999);
  return candidates.filter((v) => sieve[v]).length;
}
