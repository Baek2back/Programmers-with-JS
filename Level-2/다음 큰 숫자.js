function solution(n) {
  function countOneInBinaryArray(number) {
    return [...number.toString(2)].map(Number).filter((v) => v).length;
  }
  let answer = 0;
  const count = countOneInBinaryArray(n);
  let next = n + 1;
  while (true) {
    if (count === countOneInBinaryArray(next)) {
      answer = next;
      break;
    }
    next++;
  }
  return answer;
}

function solution(n) {
  const oneInN = (n.toString(2).match(/1/g) || []).length;
  while (true) {
    n += 1;
    const next = (n.toString(2).match(/1/g) || []).length;
    if (oneInN === next) return n;
  }
}
