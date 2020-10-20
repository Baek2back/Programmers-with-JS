function solution(s) {
  const numbers = s.split(' ').map(Number);
  return [Math.min(...numbers), Math.max(...numbers)].join(' ');
}

function solution(s) {
  const numbers = s.split(' ');
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}
