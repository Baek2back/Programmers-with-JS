function solution(name) {
  const getCountsToNeed = (alphabet) => {
    const [A, Z] = [65, 90];
    const [toUp, toDown] = [
      Math.abs(alphabet.charCodeAt(0) - A),
      Math.abs(alphabet.charCodeAt(0) - Z) + 1
    ];
    return Math.min(...[toUp, toDown]);
  };
  const getSumOfArray = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  const length = name.length;
  const transformed = [...name].map(getCountsToNeed);
  const upAndDown = getSumOfArray(transformed);
  let leftAndRight = length - 1;
  transformed.forEach((_, current) => {
    let next = current + 1;
    while (next < length && !transformed[next]) {
      next++;
    }
    leftAndRight = Math.min(
      leftAndRight,
      current + (length - next) + Math.min(current, length - next)
    );
  });
  return upAndDown + leftAndRight;
}
