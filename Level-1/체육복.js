function solution(n, lost, reserve) {
  const _lost = lost.filter((v) => !reserve.includes(v));
  const _reserve = reserve.filter((v) => !lost.includes(v));

  const solved = _lost.filter((l_v) => {
    return _reserve.find((r_v, r_i) => {
      const found = r_v !== null && (r_v === l_v - 1 || r_v === l_v + 1);
      if (found) {
        _reserve[r_i] = null;
      }
      return found;
    });
  }).length;
  return n - (_lost.length - solved);
}
