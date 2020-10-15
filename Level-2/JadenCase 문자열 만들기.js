function solution(s) {
  const words = s.toLowerCase().split(' ');
  return words
    .map((word) => {
      const [first, ...others] = [...word];
      return [first && first.toUpperCase(), ...others].join('');
    })
    .join(' ');
}
