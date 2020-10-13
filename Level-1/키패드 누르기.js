function solution(numbers, hand) {
  function getDiff(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  }
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
        const target = [centerKey.indexOf(number), 1];
        const leftDiff = getDiff(target, leftHand);
        const rightDiff = getDiff(target, rightHand);
        if (leftDiff === rightDiff) {
          if (hand === 'left') {
            leftHand = target;
            return 'L';
          } else if (hand === 'right') {
            rightHand = target;
            return 'R';
          }
        } else {
          if (leftDiff < rightDiff) {
            leftHand = target;
            return 'L';
          } else {
            rightHand = target;
            return 'R';
          }
        }
      }
    })
    .join('');

  return answer;
}
