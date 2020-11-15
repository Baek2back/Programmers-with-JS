function solution(arr) {
  function getSplitedArrayInRow(arr, half) {
    return arr.reduce((split, row) => {
      let [left, right] = split;
      left = [...(left || []), row.slice(0, half)];
      right = [...(right || []), row.slice(half)];
      return [left, right];
    }, []);
  }

  function getSumOfArray(arr) {
    return arr.reduce((ret, row) => {
      return ret + row.reduce((ret, col) => ret + col, 0);
    }, 0);
  }

  function makeQuad(arr) {
    const length = arr.length;
    const half = length / 2;
    if (half < 1) return arr;
    const total = getSumOfArray(arr);
    if (total === length * length) return [1];
    if (total === 0) return [0];
    const [beforeHalf, afterHalf] = [arr.slice(0, half), arr.slice(half)];
    const quadrants = [
      ...getSplitedArrayInRow(beforeHalf, half),
      ...getSplitedArrayInRow(afterHalf, half)
    ];
    const result = quadrants.reduce(
      (result, quadrant) => result + makeQuad(quadrant),
      ''
    );
    return result;
  }
  const answer = makeQuad(arr);
  const countOne = [...answer].filter((v) => +v === 1).length;
  return [answer.length - countOne, countOne];
}
