function solution(dirs) {
  function compareTwoArray(arr1, arr2) {
    const [arr1A, arr1B] = arr1;
    const [arr2A, arr2B] = arr2;
    return arr1A === arr2A ? arr1B < arr2B : arr1A < arr2A;
  }
  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((v, i) => v === b[i])
    );
  }
  const routes = [];
  let [y, x] = [0, 0];
  let from;
  let to;
  const commands = [...dirs];
  commands.forEach(command => {
    from = [y, x];
    switch (command) {
      case 'U':
        to = [y + 1, x];
        break;
      case 'D':
        to = [y - 1, x];
        break;
      case 'L':
        to = [y, x - 1];
        break;
      case 'R':
        to = [y, x + 1];
        break;
    }
    if (to.some(v => v > 5 || v < -5)) return;
    routes.push([from, to]);
    [y, x] = to;
  });
  const sortedRoutes = routes.map(route => {
    const [from, to] = route;
    return compareTwoArray(from, to) ? route : [to, from];
  });
  const answer = sortedRoutes.filter((route, idx) => {
    const [from, to] = route;
    const rest = sortedRoutes.slice(idx + 1);
    return !rest.some(otherRoute => {
      const [otherFrom, otherTo] = otherRoute;
      return arrayEquals(from, otherFrom) && arrayEquals(to, otherTo);
    });
  });

  return answer.length;
}
