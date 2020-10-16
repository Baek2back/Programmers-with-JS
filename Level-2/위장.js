function solution(clothes) {
  const map = clothes.reduce((obj, cloth) => {
    const [name, type] = cloth;
    obj[type] = obj[type] ? obj[type] + 1 : 1;
    return obj;
  }, {});
  return Object.values(map).reduce((answer, v) => answer * (v + 1), 1) - 1;
}
