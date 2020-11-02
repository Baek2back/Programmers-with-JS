function solution(numbers) {
  const getPermutations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map((v) => [v]);
    return arr.reduce((ret, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, toSelectNumber - 1);
      const attached = permutations.map((permutation) => {
        return [fixed, ...permutation];
      });
      return (ret = [...ret, ...attached]);
    }, []);
  };
  const makeStringFromArray = (arr) => {
    return arr.reduce((ret, v) => ret + v, '');
  };
  const makeSieve = (limit) => {
    const sieve = [...Array(limit + 1)].fill(false).fill(true, 2);
    sieve.forEach((v, i) => {
      if (v && 0 < i && i <= Math.sqrt(limit)) {
        for (let mult = Math.pow(i, 2); mult <= limit; mult += i) {
          sieve[mult] = false;
        }
      }
    });
    return sieve;
  };

  const candidates = [...numbers].reduce((candidates, _, idx) => {
    const permutations = getPermutations([...numbers], idx + 1).map(
      makeStringFromArray
    );
    return [...new Set([...candidates, ...permutations])];
  }, []);

  const sieve = makeSieve(9999999);
  return candidates.filter((v) => sieve[v]).length;
}
