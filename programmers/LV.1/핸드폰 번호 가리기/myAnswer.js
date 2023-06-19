const solution = (pn) => {
  let splited = [...pn];

  let mapped = splited.map((e, i) => {
    if (i < pn.length - 4) {
      return (e = "*");
    } else return e;
  });

  return mapped.join("");
};
