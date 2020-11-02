function solution(files) {
  const regExp = /(\D+)(\d{1,5})(.*)?/;
  const directory = files.map((file) => {
    const [input, head, number, tail] = file.match(regExp);
    return {
      input,
      head: head.toLowerCase(),
      number: Number(number),
      tail
    };
  });
  directory.sort((a, b) => {
    if (a.head === b.head) {
      return a.number - b.number;
    } else {
      return a.head < b.head ? -1 : 1;
    }
  });
  return directory.map((v) => v.input);
}
