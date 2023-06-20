const solution = (arr, com) => {
  const answer = [];
  com.forEach((item) => {
    let sliced = arr.slice(item[0] - 1, item[1]).sort((a, b) => a - b);
    let selectedNum = sliced[item[2] - 1];
    answer.push(selectedNum);
  });

  return answer;
};

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
