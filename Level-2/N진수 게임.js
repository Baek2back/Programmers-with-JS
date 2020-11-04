function solution(n, t, m, p) {
  const getNumberOrAlphabet = (number) => {
    const [low, high] = [10, 15];
    if (low <= number && number <= high) {
      return String.fromCharCode(number + 55);
    }
    return number;
  };
  const getStringArrayWithBase = (number, base) => {
    if (number === 0) return [0];
    const ret = [];
    while (number) {
      ret.unshift(getNumberOrAlphabet(number % base));
      number = Math.floor(number / base);
    }
    return ret;
  };
  const answer = [];
  let [cursor, number] = [0, 0];

  while (answer.length < t) {
    const current = getStringArrayWithBase(number, n);
    const result = current.some((v, i) => {
      if ((cursor % m) + 1 === p) answer.push(v);
      if (answer.length === t) return true;
      cursor += 1;
    });
    if (result) return answer.join('');
    number += 1;
  }
}
