function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [start, end, idx] = command;
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1]);
  });
  return answer;
}
