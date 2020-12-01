function solution(jobs) {
  class PriorityQueue {
    constructor() {
      this.nodes = [];
    }

    compareTwoNodes(n1, n2) {
      const [n1Request, n1Complete] = n1;
      const [n2Request, n2Complete] = n2;
      return n2Complete - n1Complete;
    }

    isEmpty() {
      return !this.nodes.length;
    }

    insert(value) {
      this.nodes.push(value);
      this.bubbleUp(this.compareTwoNodes);
    }

    bubbleUp(compareFunction, index = this.nodes.length - 1) {
      if (index < 1) return;
      const currentNode = this.nodes[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.nodes[parentIndex];
      if (compareFunction(currentNode, parentNode) <= 0) return;
      this.nodes[index] = parentNode;
      this.nodes[parentIndex] = currentNode;
      index = parentIndex;
      this.bubbleUp(compareFunction, index);
    }

    extract() {
      if (this.nodes.length <= 1) return this.nodes.pop();
      const extracted = this.nodes[0];
      this.nodes[0] = this.nodes.pop();
      this.trickleDown(this.compareTwoNodes);

      return extracted;
    }

    trickleDown(compareFunction, index = 0) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      const { length } = this.nodes;

      let largest = index;

      if (
        leftChildIndex < length &&
        compareFunction(this.nodes[leftChildIndex], this.nodes[largest]) > 0
      ) {
        largest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        compareFunction(this.nodes[rightChildIndex], this.nodes[largest]) > 0
      ) {
        largest = rightChildIndex;
      }
      if (largest !== index) {
        [this.nodes[largest], this.nodes[index]] = [
          this.nodes[index],
          this.nodes[largest]
        ];
        this.trickleDown(compareFunction, largest);
      }
    }
  }
  const pq = new PriorityQueue();
  jobs.sort((a, b) => {
    const [aRequest, aComplete] = a;
    const [bRequest, bComplete] = b;
    return aRequest === bRequest ? aComplete - bComplete : aRequest - bRequest;
  });
  const { length } = jobs;
  let [currentTime, totalTime] = [0, 0];
  while (jobs.length || !pq.isEmpty()) {
    const copyJobs = [...jobs];
    jobs.some(job => {
      const [request] = job;
      if (request <= currentTime) {
        pq.insert(copyJobs.shift());
        return false;
      }
      return true;
    });
    jobs = [...copyJobs];
    if (pq.isEmpty()) {
      const [firstJob] = jobs;
      const [request] = firstJob;
      currentTime = request;
    } else {
      const nextJob = pq.extract();
      const [request, complete] = nextJob;
      totalTime += currentTime - request + complete;
      currentTime += complete;
    }
  }
  return Math.floor(totalTime / length);
}
