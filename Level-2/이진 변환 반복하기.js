function getLengthOfC(x) {
    const c = [...x].filter(v => v !== '0');
    return [x.length - c.length, c.length];
}
function solution(s, count = 0, total = 0){
    if (s === '1') return [count, total];
    const [remove, next] = getLengthOfC(s)
    return solution(next.toString(2), count + 1, total + remove);
}