function solution(s) {
  let words = s.split(' ');
  words = words.map((word) => {
    return [...word]
      .map((v, i) => {
        return i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
      })
      .join('');
  });
  return words.join(' ');
}
