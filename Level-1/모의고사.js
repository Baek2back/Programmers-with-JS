function solution(answers) {
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const answer = persons.map((person) => {
    return answers.filter((v, i) => v === person[i % person.length]).length;
  });
  const max = Math.max(...answer);
  return answer
    .map((v, i) => (v === max ? i + 1 : 0))
    .filter((v) => v)
    .sort((a, b) => a - b);
}
