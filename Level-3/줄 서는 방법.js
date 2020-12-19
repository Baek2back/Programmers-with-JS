function solution(n, k) {
  const rangeFromOneToLimit = limit => {
    return Array.from({ length: limit }, (_, i) => i + 1);
  };
  const removeElementsByIdx = (array, index) => {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  };
  const factorial = (n, current = 1, value = 1) => {
    if (!n || n === current) return value;
    return factorial(n, current + 1, value * (current + 1));
  };
  k = k - 1;
  let persons = rangeFromOneToLimit(n);
  const answer = [];
  while (persons.length) {
    const factResult = factorial(persons.length - 1);
    const index = Math.floor(k / factResult);
    answer.push(persons[index]);
    k = k % factResult;
    persons = removeElementsByIdx(persons, index);
  }
  return answer;
}
