function solution(n, t, m, p) {
  function transformToAlphabetsInRange(number) {
    const [low, high] = [10, 15];
    if (low <= number && number <= high) {
      return String.fromCharCode(number + 55);
    }
    return number;
  }
  function toStringWithBase(number, base) {
    if (number === 0) return [0];
    const ret = [];
    while (number !== 0) {
      ret.unshift(transformToAlphabetsInRange(number % base));
      number = Math.floor(number / base);
    }
    return ret;
  }
  let cursor = 0;
  let number = 0;
  let answer = [];
  while (answer.length !== t) {
    const current = toStringWithBase(number, n);
    current.some((element) => {
      if ((cursor % m) + 1 === p) answer.push(element);
      if (answer.length === t) return true;
      cursor++;
    });
    number++;
  }
  return answer.reduce((answer, v) => answer + v, '');
}
