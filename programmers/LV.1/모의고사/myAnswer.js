const solution = (answer) => {
  let one = [1, 2, 3, 4, 5]; //5
  let two = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
  let result = [];
  const correct = (arr) => {
    return answer.filter((e, i) => e === arr[i % arr.length]).length;
  };
  let ans = [correct(one), correct(two), correct(three)]; // [5,0,0 ]

  let max = Math.max(...ans);
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === max) result.push(i + 1);
  }

  return result;
};

console.log(solution([1, 2, 3, 4, 5]));
