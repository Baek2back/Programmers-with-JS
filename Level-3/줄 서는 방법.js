function solution(n, k) {
  function rangeFromOneToLimit(limit) {
    return [...Array(limit).keys()].map(v => v + 1);
  }
  function refreshArray(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function factorial(n) {
    let answer = 1;
    while (n) {
      answer *= n;
      n -= 1;
    }
    return answer;
  }
  let persons = rangeFromOneToLimit(n);
  const answer = [];
  k = k - 1;
  while (persons.length) {
    const factorialResult = factorial(persons.length - 1);
    const index = Math.floor(k / factorialResult);
    answer.push(persons[index]);
    k %= factorialResult;
    persons = refreshArray(persons, index);
  }
  return answer;
}
