function solution(N, number) {
  let answer = Infinity;
  const getDensedNumber = (number, times) => {
    return Number(Array.from({ length: times }, () => number).join(''));
  };
  const getNextNumber = (current, target, count, N) => {
    if (count > 8) return;
    if (current === target) {
      answer = Math.min(answer, count);
      return;
    }
    const remainedCount = 8 - count;
    for (let i = 1; i <= remainedCount; i++) {
      getNextNumber(current + getDensedNumber(N, i), target, count + i, N);
      getNextNumber(current - getDensedNumber(N, i), target, count + i, N);
      getNextNumber(current * getDensedNumber(N, i), target, count + i, N);
      getNextNumber(
        Math.floor(current / getDensedNumber(N, i)),
        target,
        count + i,
        N
      );
    }
  };
  getNextNumber(0, number, 0, N);
  return answer === Infinity ? -1 : answer;
}
