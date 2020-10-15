function solution(skill, skill_trees) {
  const answer = skill_trees
    .map((skills) => {
      return [...skills].filter((s) => skill.includes(s)).join('');
    })
    .filter((skills) => skill.indexOf(skills) === 0);
  return answer.length;
}

function solution(skill, skill_trees) {
  const regExp = new RegExp(`[^${skill}]`, 'g');
  return skill_trees
    .map((tree) => tree.replace(regExp, ''))
    .filter((tree) => skill.indexOf(tree) === 0).length;
}
