const solution = (str, n) => {
  let arr = [...str];

  arr.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );

  return arr;
};
