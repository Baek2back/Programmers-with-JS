function solution(priorities, location) {
  let answer = 0;
  const printers = priorities.map((priority, idx) => {
    return { priority, idx };
  });
  while (printers.length) {
    const current = printers.shift();
    const result = printers.some((printer) => {
      if (current.priority < printer.priority) {
        printers.push(current);
        return true;
      }
    });
    if (result === false) {
      answer++;
      if (current.idx === location) {
        return answer;
      }
    }
  }
}
