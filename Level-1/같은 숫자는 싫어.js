// reduce 사용
const solution = (arr) => {
  return arr.reduce((answer, element) => {
    if (answer[answer.length - 1] !== element) {
      answer.push(element);
    }
    return answer;
  }, []);
};

// filter 사용
const solution = (arr) => {
  return arr.filter((element, idx) => element !== arr[idx - 1]);
};
