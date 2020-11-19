function solution(genres, plays) {
  const map = genres.reduce((obj, genre, idx) => {
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
  const result = Object.entries(map).map((v) => {
    const [genre, info] = v;
    return [genre, info.total, info.songs];
  });
  result
    .sort((a, b) => {
      const [, totalA] = a;
      const [, totalB] = b;
      return totalB - totalA;
    })
    .map((v) => {
      const [genre, total, songs] = v;
      songs.sort((a, b) => {
        const [idxA, playA] = a;
        const [idxB, playB] = b;
        if (playA === playB) {
          return idxA - idxB;
        } else {
          return playB - playA;
        }
      });
    });
  const answer = result.reduce((ret, v) => {
    const [, , songs] = v;
    return (ret = [
      ...ret,
      ...songs
        .map((v) => {
          const [idx] = v;
          return idx;
        })
        .slice(0, 2)
    ]);
  }, []);
  return answer;
}
