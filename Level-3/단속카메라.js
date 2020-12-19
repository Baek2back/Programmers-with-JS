function solution(routes) {
  routes.sort((a, b) => {
    const [, aOut] = a;
    const [, bOut] = b;
    return aOut - bOut;
  });
  const answer = routes.reduce((answer, car, idx) => {
    const [inLoc, outLoc] = car;
    if (!idx) return [outLoc, 1];
    const [cameraLoc, count] = answer;
    return cameraLoc >= inLoc ? answer : [outLoc, count + 1];
  }, []);
  const [_, count] = answer;
  return count;
}
