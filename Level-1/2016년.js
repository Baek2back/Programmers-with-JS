function solution(a, b) {
  const year = 2016;
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const month = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const days =
    month.filter((_, i) => i < a - 1).reduce((acc, v) => acc + v, 0) + b;
  return day[(days - 1) % 7];
}
