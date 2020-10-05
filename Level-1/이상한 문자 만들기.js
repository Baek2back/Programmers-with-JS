const solution = (s) => {
  let answer = [];
  const words = s.split(' ');
  words.forEach((word) => {
    answer.push(
      [...word]
        .map((e, idx) => {
          return idx % 2 ? e.toLowerCase() : e.toUpperCase();
        })
        .join('')
    );
  });
  return answer.join(' ');
};

function solution(s) {
  const words = s.split(' ');
  words.forEach((word, wordsIdx) => {
    words[wordsIdx] = [...word]
      .map((alphabet, wordIdx) => {
        return wordIdx % 2 === 0
          ? alphabet.toUpperCase()
          : alphabet.toLowerCase();
      })
      .join('');
  });
  return words.join(' ');
}
