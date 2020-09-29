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
