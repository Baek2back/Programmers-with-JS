function solution(dartResult) {
  const map = { S: 1, D: 2, T: 3, '*': 2, '#': -1 };
  const darts = dartResult.match(/\d.?\D/g);
  darts.forEach((v, i) => {
    const [_, score, bonus, option] = v.match(/(^\d+)(S|D|T)(\*|\#)?/);
    if (option === '*' && i >= 1) darts[i - 1] *= map[option];
    darts[i] = Math.pow(score, map[bonus]) * (option ? map[option] : 1);
  });
  return darts.reduce((a, b) => a + b, 0);
}
