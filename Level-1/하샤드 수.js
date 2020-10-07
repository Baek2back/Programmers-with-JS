function solution(x) {
  const divisor = [...x.toString()].reduce((acc, v) => acc + Number(v), 0);
  return x % divisor === 0;
}
