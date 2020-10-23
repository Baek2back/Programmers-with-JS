function solution(s) {
  const stack = [];
  for (const alphabet of s) {
    const top = stack[stack.length - 1];
    if (top === alphabet) {
      stack.pop();
    } else {
      stack.push(alphabet);
    }
  }
  return stack.length ? 0 : 1;
}
