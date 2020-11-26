function solution(routes) {
  routes.sort((a, b) => {
    const [aIn, aOut] = a;
    const [bIn, bOut] = b;
    return aOut - bOut;
  });
  const answer = routes.reduce((answer, car, idx) => {
    const [inLoc, outLoc] = car;
    if (!idx) return (answer = [outLoc, 1]);
    const [cameraLoc, count] = answer;
    return cameraLoc >= inLoc ? answer : [outLoc, count + 1];
  }, []);
  const [_, count] = answer;
  return count;
}
