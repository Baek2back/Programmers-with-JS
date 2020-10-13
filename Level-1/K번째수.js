function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, idx] = command;
    return array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
  });
}
