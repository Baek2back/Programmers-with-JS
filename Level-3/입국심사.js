function solution(n, times) {
  const getMinTimeToImmigration = (left, right, times, n, answer) => {
    if (left > right) return answer;
    const mid = Math.floor((left + right) / 2);
    const current = times.reduce(
      (current, time) => current + Math.floor(mid / time),
      0
    );
    return current < n
      ? getMinTimeToImmigration(mid + 1, right, times, n, answer)
      : getMinTimeToImmigration(left, mid - 1, times, n, Math.min(mid, answer));
  };
  const minTime = 1;
  const maxTime = times[times.length - 1] * n;
  return getMinTimeToImmigration(minTime, maxTime, times, n, maxTime);
}
