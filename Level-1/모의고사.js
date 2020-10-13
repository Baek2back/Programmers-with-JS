function solution(answers) {
  const solve = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const answer = [];
  solve.forEach((person) => {
    answer.push(answers.filter((_, i) => person[i % person.length]).length);
  });
  const max = Math.max(...answer);
  return answer
    .map((v, i) => (v === max ? i + 1 : 0))
    .filter((v) => v)
    .sort((a, b) => a - b);
}
