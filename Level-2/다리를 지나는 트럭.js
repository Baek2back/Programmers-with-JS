function solution(bridge_length, weight, truck_weights) {
  function getTotalWeightsOnBridge(trucks) {
    return trucks.reduce((ret, truck) => ret + truck.weight, 0);
  }
  function removePassedTruckOnBridge(trucks, bridge_length) {
    return trucks.filter((truck) => {
      truck.location++;
      return truck.location !== bridge_length;
    });
  }
  let time = 0;
  let onBridge = [];
  let waiting = truck_weights.map((weight) => {
    return { weight, location: 0 };
  });
  while (onBridge.length || waiting.length) {
    time++;
    onBridge = removePassedTruckOnBridge(onBridge, bridge_length);
    if (
      onBridge.length < bridge_length &&
      waiting.length &&
      getTotalWeightsOnBridge(onBridge) + waiting[0].weight <= weight
    ) {
      onBridge.push(waiting.shift());
    }
  }
  return time;
}
