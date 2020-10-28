function solution(brown, yellow) {
  // w + h = (brown + 4) / 2
  // w * h = (brown + yellow)
  const width =
    (brown + 4 + Math.sqrt(Math.pow(brown + 4, 2) - 16 * (brown + yellow))) / 4;
  const height =
    (brown + 4 - Math.sqrt(Math.pow(brown + 4, 2) - 16 * (brown + yellow))) / 4;
  return [width, height];
}
