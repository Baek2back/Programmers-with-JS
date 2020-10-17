function solution(numbers) {
  const answer = numbers
    .map((v) => v.toString())
    .sort((a, b) => {
      return a + b < b + a ? 1 : -1;
    })
    .join('');
  return Number(answer[0]) ? answer : '0';
}
