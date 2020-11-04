function solution(m, musicinfos) {
  const getTotalMinutesInTime = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };
  const regExp = /([A-Z]\#)/g;
  const replaceSharpInMelody = (melody) => {
    return melody.replace(regExp, (note) => {
      const [alphabet, sharp] = note;
      return alphabet.toLowerCase();
    });
  };
  const remember = replaceSharpInMelody(m);

  const playList = musicinfos.map((musicinfo) => {
    const [start, end, name, melody] = musicinfo.split(',');
    const playTime = getTotalMinutesInTime(end) - getTotalMinutesInTime(start);
    const removeSharp = replaceSharpInMelody(melody);
    return {
      name,
      playTime,
      recoverMelody:
        removeSharp.repeat(playTime / removeSharp.length) +
        removeSharp.slice(0, playTime % removeSharp.length)
    };
  });

  const matched = playList.filter(
    (song) => song.recoverMelody.indexOf(remember) !== -1
  );
  const [answer] = matched;
  return matched.length ? answer.name : '(None)';
}
