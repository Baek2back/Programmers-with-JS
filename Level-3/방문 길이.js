function solution(dirs) {
  const compareTwoArray = (a, b) => {
    const [aY, aX] = a;
    const [bY, bX] = b;
    return aY === bY ? aX < bX : aY < bY;
  };
  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((v, i) => v === b[i])
    );
  };
  const routes = [];
  let [currentY, currentX] = [0, 0];
  let from, to;
  const commands = [...dirs];
  commands.forEach(command => {
    from = [currentY, currentX];
    switch (command) {
      case 'U':
        to = [currentY + 1, currentX];
        break;
      case 'D':
        to = [currentY - 1, currentX];
        break;
      case 'L':
        to = [currentY, currentX - 1];
        break;
      case 'R':
        to = [currentY, currentX + 1];
        break;
    }
    if (to.some(v => v > 5 || v < -5)) return;
    routes.push([from, to]);
    [currentY, currentX] = to;
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
      return arrayEquals(from, otherFrom) && arrayEquals(from, otherTo);
    });
  });
  return answer.length;
}
