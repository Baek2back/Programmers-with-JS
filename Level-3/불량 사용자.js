function solution(user_id, banned_id) {
  const getPermutations = (arr, toSelectNumber) => {
    if (toSelectNumber === 1) return arr.map(value => [[value, true]]);
    return arr.reduce((result, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, toSelectNumber - 1);
      const attached = permutations.map(permutation => [
        [fixed, true],
        ...permutation
      ]);
      return (result = [...result, ...attached]);
    }, []);
  };
  const bannedId = banned_id.map(id => id.replace(/\*/g, '.'));
  const candidates = getPermutations(user_id, banned_id.length);
  let answer = candidates.filter(candidate => {
    let result = [...candidate];
    bannedId.forEach(banId => {
      const regExp = new RegExp(`${banId}`);
      let idx = 0;
      for (const [id, status] of result) {
        if (status && regExp.test(id)) {
          result[idx] = [id, false];
          break;
        }
        idx++;
      }
    });
    return !result.filter(([_, status]) => status).length;
  });
  answer = answer.map(row =>
    row.map(v => {
      const [id] = v;
      return id;
    })
  );
  return answer;
}
