function solution(m, musicinfos) {
  const replaceSharpInMelody = (melody) => {
    return melody.replace(/([A-Z]#)/g, (m) => {
      const [alphabet, sharp] = m;
      return alphabet.toLowerCase();
    });
  };
  const getTotalMinutesInTime = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };
  const remember = replaceSharpInMelody(m);

  const playList = musicinfos.map((musicinfo) => {
    let [start, end, name, melody] = musicinfo.split(',');
    melody = replaceSharpInMelody(melody);
    const playTime = getTotalMinutesInTime(end) - getTotalMinutesInTime(start);
    const playedMelody =
      melody.repeat(Math.floor(playTime / melody.length)) +
      melody.slice(0, playTime % melody.length);
    return {
      playTime,
      name,
      playedMelody
    };
  });

  const corrects = playList.filter((song) => {
    return song.playedMelody.indexOf(remember) !== -1;
  });
  const [first, ...rest] = corrects.sort((a, b) => b.playTime - a.playTime);
  return corrects.length ? first.name : '(None)';
}
