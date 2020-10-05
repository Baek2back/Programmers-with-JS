function solution(num) {
  function collatz(current, count) {
    if (count > 500) return -1;
    if (current === 1) return count;
    return collatz(getNextNumber(current), count + 1);
  }
  function getNextNumber(num) {
    return num % 2 ? num * 3 + 1 : num / 2;
  }
  return collatz(num, 0);
}
