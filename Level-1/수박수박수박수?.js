const solution = (n) => {
  const rest = n % 2 ? '수' : '';
  return '수박'.repeat(n / 2).concat(rest);
};
