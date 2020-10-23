function solution(s) {
  const tuples = JSON.parse(
    s.replace(/({|})/g, (v) => (v === '{' ? '[' : ']'))
  );
  tuples.sort((a, b) => a.length - b.length);
  const answer = tuples.reduce((answer, tuple) => {
    const rest = tuple.filter((v) => !answer.includes(v));
    answer = [...answer, ...rest];
    return answer;
  }, []);
  return answer;
}
