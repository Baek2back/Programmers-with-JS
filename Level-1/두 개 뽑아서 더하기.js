const solution = (numbers) => {
  const answer = [];
  numbers.forEach((src, srcIdx) => {
    const rest = numbers.filter((_, tarIdx) => srcIdx !== tarIdx);
    rest.forEach((target) => {
      answer.push(src + target);
    });
  });
  return [...new Set(answer)].sort((a, b) => a - b);
};
