function solution(n) {
  let prevTwo = 0;
  let prevOne = 1;
  let answer = prevTwo + prevOne;
  for (let i = 2; i < n; i++) {
    prevTwo = prevOne;
    prevOne = answer;
    answer = (prevTwo + prevOne) % 1234567;
  }
  return answer;
}
