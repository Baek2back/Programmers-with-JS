function solution(n, arr1, arr2) {
  const answer = arr1.map((row, rowIdx) =>
    (row | arr2[rowIdx]).toString(2).padStart(n, 0)
  );
  return answer.map((row) => row.replace(/1|0/g, (e) => (+e ? '#' : ' ')));
}
