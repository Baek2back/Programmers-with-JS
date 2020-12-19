function solution(n, works) {
  const total = works.reduce((ret, v) => ret + v, 0);
  if (total <= n) return 0;
  works.sort((a, b) => b - a);
  while (n) {
    const max = works.shift();
    if (!max) return 0;
    const toInsertNumber = max - 1;
    let toInsertIdx = -1;
    works.some((work, workIdx) => {
      if (work >= toInsertNumber) {
        toInsertIdx = workIdx;
        return false;
      }
      return true;
    });
    works.splice(toInsertIdx + 1, 0, toInsertNumber);
    n = n - 1;
  }
  return works.reduce((ret, v) => ret + v ** 2, 0);
}
