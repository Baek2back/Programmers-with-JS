function solution(arr) {
  return arr.reduce((acc, v) => acc + v, 0) / arr.length;
}
