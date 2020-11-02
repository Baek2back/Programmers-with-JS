function solution(land) {
  const answer = land.reduce((ret, row, rowIdx) => {
    if (rowIdx === 0) return row;
    return row.map((col, colIdx) => {
      const removeSameIndexFromPrevRow = ret.filter((v, i) => i !== colIdx);
      return col + Math.max(...removeSameIndexFromPrevRow);
    });
  }, []);
  return Math.max(...answer);
}
