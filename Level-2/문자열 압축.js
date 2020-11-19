function solution(s) {
  const getSplitedResult = (str, diff) => {
    const ret = [];
    for (let i = 0; i <= str.length; i += diff) {
      ret.push(str.slice(i, i + diff));
    }
    return ret.filter((v) => v).map((v) => [1, v]);
  };
  const getZippedResult = (strArr) => {
    return strArr.reduce((ret, v, i) => {
      if (0 < i) {
        let [count, prev] = ret[ret.length - 1];
        let [_, current] = v;
        if (prev === current) {
          ret[ret.length - 1] = [count + 1, prev];
          return ret;
        }
      }
      return (ret = [...ret, v]);
    }, []);
  };
  const getZippedString = (strArr) => {
    return strArr.reduce((ret, v) => {
      const [count, str] = v;
      return count === 1 ? ret + str : ret + count + str;
    }, '');
  };
  let answer = s.length;
  const limit = Math.floor(s.length / 2);
  for (let diff = 1; diff <= limit; diff++) {
    const splitedResult = getSplitedResult(s, diff);
    const zippedResult = getZippedResult(splitedResult);
    const zippedString = getZippedString(zippedResult);
    answer = Math.min(answer, zippedString.length);
  }
  return answer;
}
