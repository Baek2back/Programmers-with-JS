function solution(expression) {
  const calcTwoElementsWithOperand = (e1, e2, operand) => {
    switch (operand) {
      case '+':
        return e1 + e2;
      case '-':
        return e1 - e2;
      case '*':
        return e1 * e2;
    }
  };
  const refreshArrayWithCalculatedState = (arr, index, operand) => {
    arr[index + 1] = calcTwoElementsWithOperand(
      arr[index],
      arr[index + 1],
      operand
    );
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
  const regExp = /(\-|\+|\*)/g;
  const originNumbers = expression.replace(regExp, ' ').split(' ').map(Number);
  const originOperands = expression.match(regExp);
  const occuredOperands = [...new Set(originOperands)];
  const permutations = getPermutations(occuredOperands, occuredOperands.length);
  const answer = permutations.map((permutation) => {
    let numbers = [...originNumbers];
    let operands = [...originOperands];
    permutation.forEach((element) => {
      operands = operands.map((operand, idx) => {
        if (element === operand) {
          numbers = refreshArrayWithCalculatedState(numbers, idx, operand);
          return null;
        }
        return operand;
      });
      numbers = numbers.filter((v) => v !== null);
      operands = operands.filter((v) => v !== null);
    });
    return numbers;
  });
  return Math.max(...answer.flat().map(Math.abs));
}
