function solution(s, n) {
  const upper = [...Array(26).keys()].map((v) => String.fromCharCode(v + 65));
  const lower = [...Array(26).keys()].map((v) => String.fromCharCode(v + 97));
  const answer = [...s].map((v) => {
    if (v === ' ') return v;
    if (upper.includes(v)) {
      return upper[(v.charCodeAt(0) - 65 + n) % 26];
    } else if (lower.includes(v)) {
      return lower[(v.charCodeAt(0) - 97 + n) % 26];
    }
  });
  return answer.join('');
}
