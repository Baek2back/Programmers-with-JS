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

function solution(s) {
  let sign = 1;
  return (
    Number(
      [...s]
        .filter((element) => {
          if (element === '+') {
            sign = sign * 1;
          } else if (element === '-') {
            sign = sign * -1;
          } else {
            return element;
          }
        })
        .join('')
    ) * sign
  );
}
