function solution(triangle) {
  const answer = triangle.reduce((ret, row, rowIdx) => {
    if (rowIdx === 0) return row;
    return row.map((col, colIdx) => {
      if (colIdx === 0) return col + ret[colIdx];
      else if (colIdx === row.length - 1) return col + ret[colIdx - 1];
      const candidates = [ret[colIdx - 1], ret[colIdx]];
      return col + Math.max(...candidates);
    });
  }, []);
  return Math.max(...answer);
}
