function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;
  const refreshCache = (cache, city) => {
    const index = cache.indexOf(city);
    return [...cache.slice(0, index), ...cache.slice(index + 1), city];
  };

  let cache = [];
  let answer = 0;
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      cache = refreshCache(cache, city);
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
