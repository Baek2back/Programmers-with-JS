function solution(s) {
  let sign = 1;
  const number = [...s]
    .map((v) => {
      if (v === '+') {
        sign *= 1;
      } else if (v === '-') {
        sign *= -1;
      } else {
        return v;
      }
    })
    .join('');
  return number * sign;
}
