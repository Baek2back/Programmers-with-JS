function solution(land) {
  const newLand = land.reduce((newLand, row, rowIdx) => {
    if (rowIdx === 0) return (newLand = row);
    return row.map((col, colIdx) => {
      const removeSameIndexInCurrentRow = newLand.filter(
        (_, newLandColIdx) => colIdx !== newLandColIdx
      );
      return col + Math.max(...removeSameIndexInCurrentRow);
    });
  }, []);
  return Math.max(...newLand);
}
