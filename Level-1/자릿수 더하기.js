function solution(n) {
  return [...n.toString()].reduce((acc, v) => acc + Number(v), 0);
}

function solution(n, result) {
  const nextN = Math.floor(n / 10);
  const remainder = n % 10;
  return n ? solution(nextN, result + remainder) : result;
}
