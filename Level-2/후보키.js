function solution(relation) {
  const isSubset = (src, target) => {
    return src.every((v) => target.includes(v));
  };
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
  const rowLength = relation[0].length;
  const rowIdx = [...Array(rowLength).keys()];
  const combinations = [...Array(rowLength).keys()]
    .map((v) => v + 1)
    .map((v) => {
      return getCombinations(rowIdx, v);
    })
    .flat();
  const candidates = combinations.filter((combination) => {
    const tuples = relation.map((row) => {
      return row
        .filter((_, colIdx) => {
          return combination.includes(colIdx);
        })
        .join(' ');
    });
    return tuples.length === [...new Set(tuples)].length;
  });
  let state = [...candidates];
  const answer = [];
  while (state.length) {
    const key = state.shift();
    answer.push(key);
    state = state.filter((v) => !isSubset(key, v));
  }
  return answer.length;
}
