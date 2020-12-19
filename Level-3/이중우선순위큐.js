function solution(operations) {
  class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(value) {
      let insertLoc = -1;
      const result = this.queue.some((element, elementIdx) => {
        if (element > value) {
          insertLoc = elementIdx;
          return true;
        }
      });
      this.queue.splice(result ? insertLoc : this.queue.length, 0, value);
    }
    get min() {
      return this.queue.pop();
    }
    get max() {
      return this.queue.shift();
    }
    get length() {
      return this.queue.length;
    }
  }
  const q = new Queue();
  operations.forEach(operation => {
    const [action, number] = operation.split(' ');
    switch (action) {
      case 'I':
        q.enqueue(+number);
        break;
      case 'D':
        number === '1' ? q.min : q.max;
        break;
    }
  });
  return q.length ? [q.min, q.max] : [0, 0];
}
