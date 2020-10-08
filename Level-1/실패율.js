function solution(N, stages) {
  const failure = [...Array(N).keys()].map((v) => v + 1);
  const answer = failure
    .map((stage) => {
      const total = stages.filter((v) => stage <= v).length;
      const failure = stages.filter((v) => stage === v).length;
      return { stage, rate: failure / total };
    })
    .sort((a, b) => b.rate - a.rate);
  return answer.map((v) => v.stage);
}
