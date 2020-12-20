function solution(n) {
  const isNotConflict = (prevState, newNum) => {
    const { length: heightLength } = prevState;
    return prevState.every((prevNum, idx) => {
      if (prevNum === newNum) return false;
      return Math.abs(newNum - prevNum) !== heightLength - idx;
    });
  };
  const getAllCasesAllocateQueens = (state, n) => {
    if (state.length === n) return 1;
    let ret = 0;
    for (let i = 0; i < n; i++) {
      if (isNotConflict(state, i)) {
        state = [...state, i];
        ret += getAllCasesAllocateQueens(state, n);
        state = [...state.slice(0, state.length - 1)];
      }
    }
    return ret;
  };
  const answer = getAllCasesAllocateQueens([], n);
  return answer;
}
