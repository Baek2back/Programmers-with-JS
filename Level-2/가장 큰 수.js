function solution(numbers) {
  const answer = numbers.map(String).sort((a, b) => (a + b < b + a ? 1 : -1));
  return answer[0] === '0' ? '0' : answer.join('');
}
