function solution(n, s) {
  if (n > s) return [-1];
  const quotient = Math.floor(s / n);
  let remainder = s % n;
  let answer = [...Array(n)].fill(quotient);
  answer.forEach((v, i, src) => {
    if (remainder) {
      src[i] = v + 1;
      remainder -= 1;
    } else {
      return;
    }
  });
  return answer.reverse();
}
