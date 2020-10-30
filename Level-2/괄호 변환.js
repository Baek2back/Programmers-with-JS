const splitByBalancedString = (w) => {
  let [idx, count] = [0, 0];
  [...w].some((v, i) => {
    count += v === '(' ? 1 : -1;
    if (count === 0) {
      idx = i;
      return true;
    }
  });
  const [u, v] = [w.slice(0, idx + 1), w.slice(idx + 1)];
  return [u, v];
};
const isCorrectString = (u) => {
  const stack = [];
  for (const parenthesis of u) {
    if (parenthesis === '(') {
      stack.push(parenthesis);
    } else {
      if (stack[stack.length - 1] !== '(') {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length ? false : true;
};
function solution(p) {
  if (p === '') return '';
  const [u, v] = splitByBalancedString(p);
  const result = isCorrectString(u);
  if (result) {
    return u + solution(v);
  } else {
    let ret =
      '(' +
      solution(v) +
      ')' +
      [...u.slice(1, u.length - 1)]
        .map((v) => (v === '(' ? ')' : '('))
        .join('');
    return ret;
  }
}
