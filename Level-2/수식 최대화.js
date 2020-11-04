function solution(expression) {
  const calcTwoElements = (e1, e2, operand) => {
    switch (operand) {
      case '*':
        return e1 * e2;
      case '+':
        return e1 + e2;
      case '-':
        return e1 - e2;
    }
  };
  const calcTwoElementsInArrayAndRemoveFirstOne = (arr, index, operand) => {
    arr[index + 1] = calcTwoElements(arr[index], arr[index + 1], operand);
    arr[index] = null;
    return arr;
  };
  const getPermutations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map((value) => [value]);
    return arr.reduce((ret, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, toSelectNumber - 1);
      const attached = permutations.map((permutation) => {
        return [fixed, ...permutation];
      });
      return (ret = [...ret, ...attached]);
    }, []);
  };
  const regExp = /(\-|\*|\+)/g;
  const numbers = expression.replace(regExp, ' ').split(' ').map(Number);
  const operands = expression.match(regExp);
  const removeDuplicatedOperands = [...new Set(operands)];
  const permutations = getPermutations(
    removeDuplicatedOperands,
    removeDuplicatedOperands.length
  );
  let answer = Number.MIN_SAFE_INTEGER;
  permutations.map((permutation) => {
    let restNumbers = [...numbers];
    let restOperands = [...operands];
    permutation.forEach((element) => {
      restOperands = restOperands.map((operand, idx) => {
        if (operand === element) {
          restNumbers = calcTwoElementsInArrayAndRemoveFirstOne(
            restNumbers,
            idx,
            operand
          );
          return null;
        }
        return operand;
      });
      restNumbers = restNumbers.filter((v) => v !== null);
      restOperands = restOperands.filter((v) => v !== null);
    });
    const result = restNumbers;
    answer = Math.max(answer, Math.abs(result));
  });
  return answer;
}
