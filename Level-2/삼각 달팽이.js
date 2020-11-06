function solution(n) {
  const fillFromTopToBottom = (board, rowIdx, colIdx, currentNumber) => {
    while (board[rowIdx] && board[rowIdx][colIdx] === 0) {
      board[rowIdx++][colIdx] = currentNumber++;
    }
    rowIdx--;
    colIdx++;
    return [board, rowIdx, colIdx, currentNumber];
  };
  const fillFromLeftToRight = (board, rowIdx, colIdx, currentNumber) => {
    while (board[rowIdx][colIdx] === 0) {
      board[rowIdx][colIdx++] = currentNumber++;
    }
    colIdx--;
    return [board, rowIdx, colIdx, currentNumber];
  };
  const fillFromBottomRightToTopLeft = (
    board,
    rowIdx,
    colIdx,
    currentNumber
  ) => {
    while (board[rowIdx - 1][colIdx - 1] === 0) {
      board[--rowIdx][--colIdx] = currentNumber++;
    }
    rowIdx++;
    return [board, rowIdx, colIdx, currentNumber];
  };
  if (n === 1) return [1];
  let board = [...Array(n)].fill(0).map((v) => [...Array(n)].fill(0));
  let currentNumber = 1;
  const lastNumber = (n * (n + 1)) / 2;
  let [rowIdx, colIdx] = [0, 0];
  while (currentNumber <= lastNumber) {
    [board, rowIdx, colIdx, currentNumber] = fillFromTopToBottom(
      board,
      rowIdx,
      colIdx,
      currentNumber
    );
    [board, rowIdx, colIdx, currentNumber] = fillFromLeftToRight(
      board,
      rowIdx,
      colIdx,
      currentNumber
    );
    [board, rowIdx, colIdx, currentNumber] = fillFromBottomRightToTopLeft(
      board,
      rowIdx,
      colIdx,
      currentNumber
    );
  }
  return board.map((v) => v.filter((v) => v)).flat();
}
