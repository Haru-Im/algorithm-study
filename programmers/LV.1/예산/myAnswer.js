const solution = (d, budget) => {
  let sum = 0;
  let count = 0;

  d.sort((a, b) => a - b).some((v) => {
    if (sum + v <= budget) {
      sum += v;
      count++;
    } else {
      return true;
    }
  });
  return count;
};

console.log(solution([1, 3, 2, 5, 4], 9));
