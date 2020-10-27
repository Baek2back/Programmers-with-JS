function solution(numbers) {
  function makeSieve(limit) {
    const sieve = [...Array(limit)].fill(false).fill(true, 2);
    sieve.forEach((v, i, src) => {
      if (v && 0 < i && Math.sqrt(limit)) {
        for (let mult = Math.pow(i, 2); mult <= limit; mult += i) {
          src[mult] = false;
        }
      }
    });
    return sieve;
  }
  function makeNumberInArray(arr) {
    return Number(arr.reduce((acc, v) => acc + v, ''));
  }
  function getPermutations(arr, toSelectNumber) {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((result, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, toSelectNumber - 1);
      const attached = permutations.map((permutation) => {
        return [fixed, ...permutation];
      });
      return (result = [...result, ...attached]);
    }, []);
  }
  const sieve = makeSieve(10000000);
  const papers = [...numbers];
  const range = [...Array(numbers.length).keys()].map((v) => v + 1);
  let answer = 0;
  const candidates = range.reduce((candidates, v) => {
    const result = getPermutations(papers, v).reduce((result, permutation) => {
      result = [...result, makeNumberInArray(permutation)];
      return result;
    }, []);
    candidates = [...new Set([...candidates, ...result])];
    return candidates;
  }, []);
  candidates.forEach((candidate) => {
    if (sieve[candidate]) answer++;
  });
  return answer;
}
