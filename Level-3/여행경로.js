function solution(tickets) {
  const compare = (arr1, arr2, idx = 0, limit = arr1.length) => {
    if (idx === limit) return 0;
    if (arr1[idx] === arr2[idx]) return compare(arr1, arr2, idx + 1);
    return arr1[idx] < arr2[idx] ? -1 : 1;
  };
  const removeElementsByIdx = (array, idx) => {
    return [...array.slice(0, idx), ...array.slice(idx + 1)];
  };
  const createRoutes = (current, restTickets, currentRoutes) => {
    if (!restTickets.length) {
      routes.push(currentRoutes);
      return;
    }
    restTickets.forEach((ticket, ticketIdx) => {
      const [from, to] = ticket;
      if (from !== current) return;
      const nextRoutes = [...currentRoutes, to];
      createRoutes(to, removeElementsByIdx(restTickets, ticketIdx), nextRoutes);
    });
  };
  const routes = [];
  tickets.forEach((ticket, ticketIdx) => {
    const [from, to] = ticket;
    if (from !== 'ICN') return;
    createRoutes(to, removeElementsByIdx(tickets, ticketIdx), [from, to]);
  });
  routes.sort(compare);
  const [route] = routes;
  return route;
}
