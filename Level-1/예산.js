function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b).some((v, i) => {
    if (budget - v >= 0) {
      budget -= v;
      answer = i + 1;
    } else {
      return true;
    }
  });
  return answer;
}
