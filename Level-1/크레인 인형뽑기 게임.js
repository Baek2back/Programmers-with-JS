function solution(board, moves) {
  function transpose(board) {
    return board.reduce(
      (newBoard, row) =>
        row.map((col, rowIdx) => [...(newBoard[rowIdx] || []), col]),
      []
    );
  }
  board = transpose(board).map((row) => row.filter((v) => v));
  const basket = [];
  let answer = 0;
  for (const move of moves) {
    const doll = board[move - 1].shift();
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  }
  return answer;
}
