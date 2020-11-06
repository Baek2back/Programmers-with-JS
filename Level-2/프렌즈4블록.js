const transpose = (board) => {
  return board.reduce((newBoard, row) => {
    return row.map((col, rowIdx) => {
      return [...(newBoard[rowIdx] || []), col];
    });
  }, []);
};

const initBoard = (board) => {
  return board.map((row) => {
    return [...row].map((col) => {
      return { element: col, isRemove: false };
    });
  });
};

const refreshBoard = (board) => {
  const transposed = transpose(board);
  let totalRemoved = 0;
  const refreshed = transposed.map((col) => {
    let removed = 0;
    const originLength = col.length;
    const zipped = col.filter((current) => {
      if (current.isRemove && current.element !== '.') {
        removed++;
      }
      return !current.isRemove && current.element !== '.';
    });
    totalRemoved += removed;
    const empty = { element: '.', isRemove: true };
    while (zipped.length < originLength) {
      zipped.unshift(empty);
    }
    return zipped;
  });
  return [transpose(refreshed), totalRemoved];
};

const checkToRemoveElementsInBoard = (board) => {
  board.forEach((row, rowIdx) => {
    if (rowIdx === 0) return;
    row.forEach((col, colIdx) => {
      if (colIdx === 0 || col.element === '.') return;
      const current = col.element;
      const prevRow = board[rowIdx - 1];
      const prevCol = row[colIdx - 1].element;
      const around = [
        prevCol,
        prevRow[colIdx].element,
        prevRow[colIdx - 1].element
      ];
      const isSameWithAround = around.every((element) => element === current);
      if (isSameWithAround) {
        board[rowIdx - 1][colIdx].isRemove = board[rowIdx - 1][
          colIdx - 1
        ].isRemove = row[colIdx - 1].isRemove = row[colIdx].isRemove = true;
      }
    });
  });
  return board;
};
function solution(m, n, board) {
  let answer = 0;
  let removed = 0;
  board = initBoard(board);
  do {
    board = checkToRemoveElementsInBoard(board);
    [board, removed] = refreshBoard(board);
    answer += removed;
  } while (removed !== 0);
  return answer;
}
