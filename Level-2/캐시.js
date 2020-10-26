function solution(cacheSize, cities) {
  function refreshCache(cache, index, city) {
    return [...cache.slice(0, index), ...cache.slice(index + 1), city];
  }
  let cache = [];
  let answer = 0;
  if (cacheSize === 0) {
    return 5 * cities.length;
  }
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      const index = cache.indexOf(city);
      cache = refreshCache(cache, index, city);
    } else {
      answer += 4;
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
    }
    answer += 1;
  });
  return answer;
}
