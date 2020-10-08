function solution(numbers, hand) {
  const abs = Math.abs;
  const leftKey = [1, 4, 7];
  const rightKey = [3, 6, 9];
  const centerKey = [2, 5, 8, 0];
  let [leftHand, rightHand] = [
    [3, 0],
    [3, 2]
  ];
  const answer = numbers
    .map((number) => {
      if (leftKey.includes(number)) {
        leftHand = [leftKey.indexOf(number), 0];
        return 'L';
      } else if (rightKey.includes(number)) {
        rightHand = [rightKey.indexOf(number), 2];
        return 'R';
      } else {
        const center = [centerKey.indexOf(number), 1];
        const [centerRow, centerCol] = center;
        const [leftRow, leftCol, rightRow, rightCol] = [
          ...leftHand,
          ...rightHand
        ];
        const [leftDiff, rightDiff] = [
          abs(centerRow - leftRow) + abs(centerCol - leftCol),
          abs(centerRow - rightRow) + abs(centerCol - rightCol)
        ];
        if (leftDiff === rightDiff) {
          if (hand === 'left') {
            leftHand = center;
            return 'L';
          } else if (hand === 'right') {
            rightHand = center;
            return 'R';
          }
        } else {
          if (leftDiff < rightDiff) {
            leftHand = center;
            return 'L';
          } else {
            rightHand = center;
            return 'R';
          }
        }
      }
    })
    .join('');
  return answer;
}
