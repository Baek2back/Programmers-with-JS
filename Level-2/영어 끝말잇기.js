function solution(n, words) {
  const map = {};
  let answer = [0, 0];
  words.some((word, idx) => {
    if (idx === 0) return false;
    const prev = words[idx - 1];
    if (prev[prev.length - 1] !== word[0] || map[word] || prev === word) {
      answer = [idx % n, Math.floor(idx / n)].map((v) => v + 1);
      return true;
    }
    map[prev] = map[word] = 1;
  });
  return answer;
}
