const solution = (participant, completion) => {
  const map = completion.reduce((map, name) => {
    map[name] = map[name] ? map[name] + 1 : 1;
    return map;
  }, {});
  return participant.find((name) => {
    if (map[name]) map[name] = map[name] - 1;
    else return true;
  });
};
