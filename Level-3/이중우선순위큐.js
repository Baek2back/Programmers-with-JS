function solution(operations) {
  const enqueue = (queue, number) => {
    let loc = -1;
    const result = queue.some((v, i) => {
      if (v > number) {
        loc = i;
        return true;
      }
    });
    queue.splice(result ? loc : queue.length, 0, number);
    return queue;
  };
  let queue = [];
  operations.forEach(operation => {
    const [action, number] = operation.split(' ');
    switch (action) {
      case 'I':
        queue = enqueue(queue, +number);
        break;
      case 'D':
        number === '1' ? queue.pop() : queue.shift();
        break;
    }
  });
  return queue.length ? [queue.pop(), queue.shift()] : [0, 0];
}
