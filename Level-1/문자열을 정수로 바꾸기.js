function solution(s) {
  let sign = 1;
  let answer = [];
  [...s].forEach((e) => {
    if (e === '+') {
      sign = 1;
    } else if (e === '-') {
      sign = -1;
    } else {
      answer.push(e);
    }
  });
  return answer.join('') * sign;
}
