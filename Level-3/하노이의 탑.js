function solution(n) {
  const answer = [];
  (function hanoi(disk, src, helper, target) {
    if (!disk) return;
    hanoi(disk - 1, src, target, helper);
    answer.push([src, target]);
    hanoi(disk - 1, helper, src, target);
  })(n, 1, 2, 3);
  return answer;
}
