function solution(stones, k) {
  const findFriendsNumberToReachEndPoint = (stones, left, right, k) => {
    if (left >= right) return left;
    const mid = Math.floor((left + right) / 2);
    let notReachable = 0;
    for (const stone of stones) {
      if (notReachable === k) break;
      notReachable = stone <= mid ? notReachable + 1 : 0;
    }
    return notReachable === k
      ? findFriendsNumberToReachEndPoint(stones, left, mid, k)
      : findFriendsNumberToReachEndPoint(stones, mid + 1, right, k);
  };
  return findFriendsNumberToReachEndPoint(stones, 1, 200000000, k);
}
