function solution(msg) {
  const dictionary = [...Array(26).keys()].map((v) =>
    String.fromCharCode(v + 65)
  );
  let message = [...msg];
  const answer = [];
  let cursor = 0;
  while (message.length) {
    let word = '';
    message = message.slice(cursor);
    message.some((v, i) => {
      if (dictionary.includes(word + v)) {
        word += v;
        return false;
      } else {
        answer.push(dictionary.indexOf(word));
        dictionary.push(word + v);
        cursor = i;
        word = null;
        return true;
      }
    });
    if (!!word) {
      return [...answer, dictionary.indexOf(word)].map((v) => v + 1);
    }
  }
}
