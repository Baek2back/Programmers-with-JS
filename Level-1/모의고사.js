const solution = (answers) => {
  let answer = [];
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  persons.forEach((person) => {
    const score = answers.filter((answer, idx) => {
      return person[idx % person.length] === answer;
    }).length;
    answer.push(score);
  });
  const max = Math.max(...answer);
  return answer
    .map((e, idx) => {
      return e === max ? idx + 1 : 0;
    })
    .filter((e) => e)
    .sort();
};
