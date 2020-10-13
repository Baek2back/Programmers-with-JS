function solution(skill, skill_trees) {
  const result = skill_trees
    .map((skills) => {
      return [...skills]
        .map((s) => {
          return skill.includes(s) ? s : '';
        })
        .join('');
    })
    .filter((v) => skill.indexOf(v) === 0);
  return result.length;
}
