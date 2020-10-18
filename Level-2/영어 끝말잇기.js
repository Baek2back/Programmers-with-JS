function solution(n, words) {
  const dict = {};
  let answer = [0, 0];
  words.some((word, idx) => {
    if (0 < idx) {
      const prev = words[idx - 1];
      if (word === prev || dict[word] || word[0] !== prev[prev.length - 1]) {
        answer = [(idx % n) + 1, Math.floor(idx / n) + 1];
        return true;
      }
      dict[word] = dict[prev] = 1;
    }
  });
  return answer;
}
