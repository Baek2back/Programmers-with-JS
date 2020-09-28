const solution = (n) => {
  return [...n.toString()].map((e) => Number(e)).reduce((acc, e) => acc + e, 0);
};
