function solution(priorities, location) {
  const printers = priorities.map((v, i) => {
    return { p: v, i };
  });
  let answer = 0;
  while (printers.length) {
    const current = printers.shift();
    const result = printers.some((printer) => {
      if (current.p < printer.p) {
        printers.push(current);
        return true;
      }
    });
    if (result === false) {
      answer++;
      if (current.i === location) {
        return answer;
      }
    }
  }
  return answer;
}
