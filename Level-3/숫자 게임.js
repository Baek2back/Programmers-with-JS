function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let current = 0;
  A.forEach(target => {
    while (target >= B[current]) {
      current += 1;
    }
    if (target < B[current]) {
      answer += 1;
      current += 1;
    }
  });
  return answer;
}
