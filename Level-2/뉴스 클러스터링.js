function solution(str1, str2) {
  const onlyAlphabet = /^[a-zA-Z]*$/g;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  function makeSet(str) {
    return [...str]
      .reduce((ret, v, i, src) => {
        if (i < src.length - 1) {
          ret = [...ret, v + src[i + 1]];
        }
        return ret;
      }, [])
      .filter((v) => v.match(onlyAlphabet));
  }
  const [set1, set2] = [makeSet(str1), makeSet(str2)];
  const set = new Set([...set1, ...set2]);
  let [intersect, union] = [...Array(2)].fill(0);
  set.forEach((element) => {
    const result = [
      set1.filter((v) => v === element).length,
      set2.filter((v) => v === element).length
    ];
    intersect += Math.min(...result);
    union += Math.max(...result);
  });
  return union === 0 ? 65536 : Math.floor((intersect / union) * 65536);
}
