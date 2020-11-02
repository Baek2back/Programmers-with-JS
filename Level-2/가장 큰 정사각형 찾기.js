function solution(board) {
  board.forEach((row, rowIdx) => {
    if (rowIdx === 0) return;
    row.forEach((col, colIdx) => {
      if (colIdx === 0 || col === 0) return;
      const prevRow = board[rowIdx - 1];
      const prevCol = row[colIdx - 1];
      const around = [prevRow[colIdx], prevRow[colIdx - 1], prevCol];
      row[colIdx] = Math.min(...around) + 1;
    });
  });
  const getMaxFromEachRow = board.map((row) => Math.max(...row));
  return Math.pow(Math.max(...getMaxFromEachRow), 2);
}
