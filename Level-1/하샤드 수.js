const solution = (x) => {
  return (
    x % [...x.toString()].map((e) => Number(e)).reduce((a, b) => a + b, 0) === 0
  );
};
