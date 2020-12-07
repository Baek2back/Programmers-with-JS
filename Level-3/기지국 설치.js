function solution(n, stations, w) {
  let answer = 0;
  const range = 2 * w + 1;
  stations.forEach((station, idx, src) => {
    if (idx === 0) {
      const shaded = station - w - 1;
      if (shaded > 0) answer += Math.ceil(shaded / range);
    }
    if (idx === stations.length - 1) {
      const shaded = station + w;
      if (shaded < n) answer += Math.ceil((n - shaded) / range);
      return;
    }
    answer += Math.ceil(((src[idx + 1] - w) - (station + w + 1)) / range)
  });
  return answer;
}
