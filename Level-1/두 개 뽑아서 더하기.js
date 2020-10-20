function solution(numbers) {
  const answer = numbers
    .map((src, srcIdx) => {
      return numbers.filter((_, i) => i !== srcIdx).map((v) => v + src);
    })
    .reduce((answer, v, i) => [...answer, ...v], []);
  return [...new Set(answer)].sort((a, b) => a - b);
}
