function solution(s, n) {
  const upperAlphabets = [...Array(26).keys()].map((i) =>
    String.fromCharCode(65 + i)
  );
  const lowerAlphabets = [...Array(26).keys()].map((i) =>
    String.fromCharCode(97 + i)
  );
  let answer = [...s];
  answer.forEach((v, i) => {
    if (v !== ' ') {
      if (upperAlphabets.includes(v)) {
        answer[i] = upperAlphabets[(v.charCodeAt(0) + n - 65) % 26];
      } else if (lowerAlphabets.includes(v)) {
        answer[i] = lowerAlphabets[(v.charCodeAt(0) + n - 97) % 26];
      }
    }
  });
  return answer.join('');
}
