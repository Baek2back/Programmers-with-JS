function solution(genres, plays) {
  const genreMap = genres.reduce((obj, genre, idx) => {
    if (obj[genre]) {
      obj[genre].total += plays[idx];
      obj[genre].songs.push([idx, plays[idx]]);
    } else {
      obj[genre] = {
        total: plays[idx],
        songs: [[idx, plays[idx]]]
      };
    }
    return obj;
  }, {});
  const result = Object.entries(genreMap).map(v => {
    const [genre, info] = v;
    return [genre, info.total, info.songs];
  });
  result
    .sort((a, b) => {
      const [, totalA] = a;
      const [, totalB] = b;
      return totalB - totalA;
    })
    .map(v => {
      const [, , songs] = v;
      songs.sort((a, b) => {
        const [idxA, playA] = a;
        const [idxB, playB] = b;
        return playA === playB ? idxA - idxB : playB - playA;
      });
    });
  const answer = result.reduce((ret, v) => {
    const [, , songs] = v;
    return (ret = [
      ...ret,
      ...songs
        .map(v => {
          const [idx] = v;
          return idx;
        })
        .slice(0, 2)
    ]);
  }, []);
  return answer;
}
