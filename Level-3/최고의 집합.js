function solution(n, s) {
  if (n > s) return [-1];
  const quotient = Math.floor(s / n);
  let remainder = s % n;
  let answer = [...new Array(n).fill(quotient)];
  answer.forEach((v, i, src) => {
    if (!remainder) return;
    src[i] = v + 1;
    remainder -= 1;
  });
  return answer.reverse();
}
