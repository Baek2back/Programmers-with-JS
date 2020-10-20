function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  while (people.length) {
    const lightest = people[0];
    const heaviest = people.pop();
    if (lightest + heaviest <= limit) {
      people.shift();
    }
    answer++;
  }
  return answer;
}
