function solution(begin, target, words) {
  let answer = Number.MAX_VALUE;
  const isConvertable = (src, target) => {
    const result = [...src].reduce(
      (ret, v, i) => (v === target[i] ? ret + v : ret),
      ''
    );
    return result.length + 1 === target.length;
  };
  const removeElementByIdx = (array, idx) => {
    return [...array.slice(0, idx), ...array.slice(idx + 1)];
  };
  const createRouteToReachTarget = (current, target, restWords, count) => {
    if (current === target) {
      answer = Math.min(count, answer);
      return;
    }
    if (!restWords.length) {
      return;
    }
    restWords.forEach((word, idx) => {
      if (!isConvertable(current, word)) return;
      createRouteToReachTarget(
        word,
        target,
        removeElementByIdx(restWords, idx),
        count + 1
      );
    });
  };
  words.forEach((word, idx) => {
    if (!isConvertable(begin, word)) return;
    createRouteToReachTarget(word, target, removeElementByIdx(words, idx), 1);
  });
  return answer === Number.MAX_VALUE ? 0 : answer;
}
