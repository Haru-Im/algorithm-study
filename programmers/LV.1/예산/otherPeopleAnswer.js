const solution = (d, budget) => {
  return d
    .sort((a, b) => a - b)
    .reduce(
      (acc, v) =>
        acc.sum + v <= budget
          ? { count: acc.count + 1, sum: acc.sum + v }
          : acc,
      { count: 0, sum: 0 }
    ).count;
};
