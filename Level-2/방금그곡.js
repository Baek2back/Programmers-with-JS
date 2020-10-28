function solution(m, musicinfos) {
  function getTotalMinutesFromTime(time, isEnd) {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  }
  function modifySharpInMelody(regExp, origin) {
    return origin.replace(regExp, (sound) => {
      if (sound.length === 2) {
        const [alphabet, sharp] = [...sound];
        return alphabet.toLowerCase();
      }
      return sound;
    });
  }
  const regExp = /[A-Z](#)?/g;
  const srcMelody = modifySharpInMelody(regExp, m);
  const playList = musicinfos.map((musicinfo) => {
    const [start, end, name, rawMelody] = musicinfo.split(',');
    const playTime =
      getTotalMinutesFromTime(end) - getTotalMinutesFromTime(start);
    const melody = modifySharpInMelody(regExp, rawMelody);
    return {
      playTime,
      name,
      melody:
        melody.repeat(Math.floor(playTime / melody.length)) +
        melody.slice(0, playTime % melody.length)
    };
  });
  const answer = playList.filter((song) => {
    return song.melody.indexOf(srcMelody) !== -1;
  });
  const [music, ...rest] = answer.sort((a, b) => b.playTime - a.playTime);
  return answer.length ? music.name : '(None)';
}
