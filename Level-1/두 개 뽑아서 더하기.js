function solution(numbers) {
  const answer = numbers.reduce((answer, src, srcIdx) => {
    return [
      ...answer,
      ...numbers.filter((v, i) => i !== srcIdx).map((v) => v + src)
    ];
  }, []);
  return [...new Set(answer)].sort((a, b) => a - b);
}
