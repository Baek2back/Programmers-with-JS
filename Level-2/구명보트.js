function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  while (people.length) {
    const lightest = people[0];
    const heaviest = people[people.length - 1];
    if (lightest + heaviest <= limit) {
      people.shift();
      people.pop();
    } else {
      people.pop();
    }
    answer++;
  }
  return answer;
}
