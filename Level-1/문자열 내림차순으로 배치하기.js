function solution(s) {
  return [...s]
    .sort((a, b) => {
      return a < b ? 1 : -1;
    })
    .join('');
}
