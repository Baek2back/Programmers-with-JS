function solution(n, works) {
  const total = works.reduce((ret, v) => ret + v, 0);
  if (total <= n) return 0;
  works.sort((a, b) => b - a);
  while (n) {
    let max = works.shift();
    if (max === 0) return 0;
    let toInsertNumber = max - 1;
    let idx = -1;
    works.some((work, i) => {
      if (work < toInsertNumber) {
        return true;
      }
      idx = i;
    });
    works.splice(idx + 1, 0, toInsertNumber);
    n--;
  }
  return works.reduce((ret, v) => ret + v ** 2, 0);
}
