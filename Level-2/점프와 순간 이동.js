function solution(n) {
  function getFuelNeed(current, fuel) {
    if (current === 0) return fuel;
    return current % 2
      ? getFuelNeed(current - 1, fuel + 1)
      : getFuelNeed(current / 2, fuel);
  }
  return getFuelNeed(n, 0);
}
