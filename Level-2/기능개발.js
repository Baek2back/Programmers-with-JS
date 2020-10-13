function solution(progresses, speeds) {
  const lefts = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  const answer = lefts.reduce((answer, left, i) => {
    const finish = answer[answer.length - 1];
    if (0 < i && left <= finish[0]) {
      finish.push(left);
    } else {
      answer = [...answer, [left]];
    }
    return answer;
  }, []);
  return answer.map((v) => v.length);
}
