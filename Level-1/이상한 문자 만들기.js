function solution(s) {
  const answer = [];
  const words = s.split(' ');
  words.forEach((word) => {
    answer.push(
      [...word]
        .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
        .join('')
    );
  });
  return answer.join(' ');
}

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
