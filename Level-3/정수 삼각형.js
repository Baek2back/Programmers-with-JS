function solution(triangle) {
  const answer = triangle.reduce((ret, row, rowIdx) => {
    if (!rowIdx) return row;
    return row.map((col, colIdx) => {
      if (!colIdx) return col + ret[colIdx];
      if (colIdx === row.length - 1) return col + ret[colIdx - 1];
      const candidates = [ret[colIdx - 1], ret[colIdx]];
      return col + Math.max(...candidates);
    });
  }, []);
  return Math.max(...answer);
}
