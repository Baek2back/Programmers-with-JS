function solution(s) {
  const words = s.toLowerCase().split(' ');
  return words
    .map((word) => {
      const [first, ...others] = [...word];
      const rest = [...others];
      return [first && first.toUpperCase(), ...rest].join('');
    })
    .join(' ');
}
