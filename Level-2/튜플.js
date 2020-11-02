function solution(s) {
  const tuples = JSON.parse(s.replace(/{|}/g, (e) => (e === '{' ? '[' : ']')));
  tuples.sort((a, b) => a.length - b.length);
  const answer = tuples.reduce((ret, tuple) => {
    const rest = tuple.filter((v) => !ret.includes(v));
    return [...ret, ...rest];
  }, []);
  return answer;
}
