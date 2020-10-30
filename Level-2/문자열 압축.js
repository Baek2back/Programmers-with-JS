function solution(s) {
  const splitOriginByLength = (origin, length) => {
    const ret = [];
    for (let i = 0; i <= origin.length; i += length) {
      ret.push(origin.slice(i, i + length));
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
        } else {
          return (ret = [...ret, v]);
        }
      }
      return (ret = [...ret, v]);
    }, []);
  };
  const getZippedString = (result) => {
    return result.reduce((ret, v) => {
      const [count, str] = v;
      return count === 1 ? ret + str : ret + count + str;
    }, '');
  };

  let answer = s.length;
  const limit = Math.floor(s.length / 2);

  for (let i = 1; i <= limit; i++) {
    const splited = splitOriginByLength(s, i);
    const result = getZippedResult(splited);
    const zipped = getZippedString(result);
    answer = Math.min(answer, zipped.length);
  }

  return answer;
}
