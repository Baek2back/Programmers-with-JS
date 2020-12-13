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
  banned_id = banned_id.map(id => id.replace(/\*/g, '.'));
  const candidates = getPermutations(user_id, banned_id.length);
  let answer = candidates.filter(candidate => {
    let current = [...candidate];
    banned_id.forEach(regExp => {
      const bannedRegExp = new RegExp(`${regExp}`);
      let idx = 0;
      for (const [id, status] of current) {
        if (status && regExp.length === id.length && bannedRegExp.test(id)) {
          current[idx] = [id, false];
          break;
        }
        idx++;
      }
    });
    return !current.filter(([_, status]) => status).length;
  });
  answer = answer
    .map(row =>
      row.map(v => {
        const [id] = v;
        return id;
      })
    )
    .map(row => {
      const sortedRow = [...row];
      return sortedRow.sort((a, b) => (a < b ? -1 : 1));
    })
    .map(v => v.join(' '));
  return new Set(answer).size;
}
