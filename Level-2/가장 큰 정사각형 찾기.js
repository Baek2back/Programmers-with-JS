function solution(board) {
  board.forEach((row, rowIdx) => {
    if (rowIdx === 0) return;
    row.forEach((col, colIdx) => {
      if (colIdx === 0 || col === 0) return;
      const prevRow = board[rowIdx - 1];
      const prevCol = row[colIdx - 1];
      const around = [prevCol, prevRow[colIdx - 1], prevRow[colIdx]];
      row[colIdx] = Math.min(...around) + 1;
    });
  });
  return Math.pow(
    board.map((v) => Math.max(...v)).reduce((ret, v) => Math.max(ret, v), 0),
    2
  );
}
