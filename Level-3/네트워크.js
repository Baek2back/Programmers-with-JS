function solution(n, computers) {
  const dfs = (n, computers, index, notVisited) => {
    notVisited[index] = true;
    const range = Array.from({ length: n }, (_, i) => i);
    for (const otherIndex of range) {
      if (index === otherIndex) continue;
      if (computers[index][otherIndex] && !notVisited[otherIndex]) {
        dfs(n, computers, otherIndex, notVisited);
      }
    }
  };
  let answer = 0;
  const notVisited = Array.from({ length: n }, () => false);
  notVisited.forEach((status, index, src) => {
    if (status) return;
    dfs(n, computers, index, src);
    answer += 1;
  });
  return answer;
}
