const solution = (numbers) => {
  const answer = [];
  numbers.forEach((start, startIdx) => {
    const rest = numbers.filter((number, idx) => idx > startIdx);
    rest.forEach((e) => {
      answer.push(start + e);
    });
  });
  return [...new Set(answer)].sort((a, b) => a - b);
};
