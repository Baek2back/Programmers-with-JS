function solution(n, computers) {
  const findNetwork = (n, computers, current, notVisited) => {
    notVisited[current] = true;
    const range = [...new Array(n).keys()];
    // const range = Array.from({ length: n }, (_, i) => i);
    for (const otherIndex of range) {
      if (current === otherIndex) continue;
      if (computers[current][otherIndex] && !notVisited[otherIndex]) {
        findNetwork(n, computers, otherIndex, notVisited);
      }
    }
  };
  let answer = 0;
  const notVisited = [...new Array(n).fill(false)];
  // const notVisited = Array.from({ length: n }, () => false);
  notVisited.forEach((status, index, src) => {
    if (status) return;
    findNetwork(n, computers, index, src);
    answer += 1;
  });
  return answer;
}
