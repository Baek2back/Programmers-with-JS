function solution(n) {
  return [...n.toString()].reduce((acc, v) => acc + Number(v), 0);
}
