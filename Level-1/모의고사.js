const solution = (answers) => {
  let answer = [];
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  persons.forEach((person) => {
    answer.push(
      answers.filter((e, idx) => e === person[idx % person.length]).length
    );
  });
  const max = Math.max(...answer);
  answer.forEach((e, idx) => {
    answer[idx] = e === max ? idx + 1 : 0;
  });
  return answer.filter((e) => e).sort();
};
