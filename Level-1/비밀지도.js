function solution(n, arr1, arr2) {
  const answer = arr1.map((row, i) => {
    return (row | arr2[i]).toString(2).padStart(n, 0);
  });
  return answer.map((v) =>
    v.replace(/1|0/g, (col) => (Number(col) ? '#' : ' '))
  );
  // return answer.map(v => v.replace(/1/g, '#').replace(/0/g, ' '));
}
