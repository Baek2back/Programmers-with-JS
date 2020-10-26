function solution(files) {
  const regExp = /(\D+)(\d{1,5})(.*)?/;
  const directory = files.map((file) => {
    const [origin, head, number, tail] = file.match(regExp);
    return { origin, head: head.toUpperCase(), number: Number(number), tail };
  });
  const answer = directory.sort((a, b) => {
    if (a.head === b.head && a.number !== b.number) {
      return a.number - b.number;
    }
    return a.head < b.head ? -1 : 1;
  });
  return answer.map((info) => info.origin);
}
