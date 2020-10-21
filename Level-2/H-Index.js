function solution(citations) {
  let answer = citations.length;
  citations.sort((a, b) => b - a);
  citations.some((v, i) => {
    if (i + 1 > v) {
      answer = i;
      return true;
    }
  });
  return answer;
}
