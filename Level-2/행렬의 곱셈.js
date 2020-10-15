function solution(arr1, arr2) {
  return arr1.map((row) => {
    return row.map((_, colIdx) => {
      return row.reduce((result, col, rowIdx) => {
        return result + col * arr2[rowIdx][colIdx];
      }, 0);
    });
  });
}
