function solution(numbers, target) {
  function getTargetNumber(numbers, target, index, current) {
    if (index === numbers.length) {
      return current === target ? 1 : 0;
    }
    return (
      getTargetNumber(numbers, target, index + 1, current + numbers[index]) +
      getTargetNumber(numbers, target, index + 1, current - numbers[index])
    );
  }
  return getTargetNumber(numbers, target, 0, 0);
}
