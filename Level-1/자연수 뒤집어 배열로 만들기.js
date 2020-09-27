const solution = (n) => {
  return [...n.toString()].reverse().map((str) => Number(str));
};
