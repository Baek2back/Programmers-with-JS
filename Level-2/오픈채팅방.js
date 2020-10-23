function solution(record) {
  const idMap = {};
  const actionMap = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.'
  };
  const answer = record
    .map((line) => {
      const [action, id, name] = line.split(' ');
      switch (action) {
        case 'Enter':
          idMap[id] = name;
          return [id, actionMap[action]];
        case 'Leave':
          return [id, actionMap[action]];
        case 'Change':
          idMap[id] = name;
          return '';
      }
    })
    .filter((v) => v)
    .map((line) => {
      const [id, command] = line;
      return `${idMap[id] + command}`;
    });
  return answer;
}
