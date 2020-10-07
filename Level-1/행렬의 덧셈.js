function solution(arr1, arr2) {
  return arr1.map((row, rowIdx) =>
    row.map((col, colIdx) => col + arr2[rowIdx][colIdx])
  );
}
