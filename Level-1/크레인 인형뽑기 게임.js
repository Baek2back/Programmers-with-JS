function solution(board, moves) {
  const transpose = (board) => {
    return board.reduce((newBoard, row) => {
      return row.map((col, rowIdx) => [...(newBoard[rowIdx] || []), col]);
    }, []);
  };
  board = transpose(board).map((row) => row.filter((v) => v));
  let answer = 0;
  const basket = [];
  moves.forEach((move) => {
    const doll = board[move - 1].shift();
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        answer += 2;
        basket.pop();
      } else {
        basket.push(doll);
      }
    }
  });
  return answer;
}
