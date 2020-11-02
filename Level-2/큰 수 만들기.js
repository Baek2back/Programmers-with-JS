function solution(number, k) {
  const stack = [];
  let toSelect = k;
  for (const current of number) {
    while (toSelect !== 0 && stack[stack.length - 1] < current) {
      stack.pop();
      toSelect -= 1;
    }
    stack.push(current);
  }
  return stack.length === number.length
    ? stack.slice(0, stack.length - k).join('')
    : stack.join('');
}
