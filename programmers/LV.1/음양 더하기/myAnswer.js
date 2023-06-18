const solution = (absolutes, signs) => {
  let sum = absolutes.reduce((acc, cur, idx) => {
    return acc + (signs[idx] ? cur : -cur);
  }, 0);

  return sum;
};
