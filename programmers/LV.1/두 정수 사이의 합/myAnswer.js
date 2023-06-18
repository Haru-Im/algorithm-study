// https://school.programmers.co.kr/learn/courses/30/lessons/12912

const solution = (a, b) => {
  let arr = [];
  let lessNum = Math.min(a, b);
  let biggerNum = Math.max(a, b);

  for (let i = 0; i < biggerNum - lessNum + 1; i++) {
    arr.push(i + lessNum);
  }
  return arr.reduce((a, c) => a + c, 0);
};
