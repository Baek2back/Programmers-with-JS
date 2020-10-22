function solution(nums) {
  const map = nums.reduce((obj, num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    return obj;
  }, {});
  return Math.min(nums.length / 2, Object.keys(map).length);
}
