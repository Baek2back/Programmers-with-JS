function solution(n, words) {
  let answer = [0, 0];
  const map = {};
  words.some((word, idx) => {
    if (idx === 0) {
      return false;
    }
    const prev = words[idx - 1];
    if (prev[prev.length - 1] !== word[0] || map[word] || word === prev) {
      answer = [(idx % n) + 1, Math.floor(idx / n) + 1];
      return true;
    }
    map[word] = map[prev] = 1;
  });
  return answer;
}
