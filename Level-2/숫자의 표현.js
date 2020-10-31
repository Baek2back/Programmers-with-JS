function solution(n) {
  const candidates = [
    ...[...Array(Math.floor(n / 2)).keys()].map((v) => v + 1),
    n
  ];
  const answer = candidates.filter((v) => n % v === 0 && v % 2 === 1).length;
  return answer;
}
