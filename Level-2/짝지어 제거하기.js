// 시간 초과 코드 (spread 연산자)
function solution(s) {
  if (s.length % 2 === 1) return 0;
  const result = [...s]
    .reduce((result, v) => {
      const top = result[result.length - 1];
      if (top === v) {
        result.pop();
      } else {
        result.push(v);
      }
      return result;
    }, [])
    .join('');
  return s.length === 0 ? 1 : s.length === result.length ? 0 : solution(result);
}

function solution(s) {
  if (s.length % 2 === 1) return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === top) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? 0 : 1;
}
