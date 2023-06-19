const solution = (answer) => {
  let one = [1, 2, 3, 4, 5]; //5
  let two = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
  let result = [];
  const correct = (arr) => {
    return answer.filter((e, i) => e === arr[i % arr.length]).length;
  };
  let ans = [correct(one), correct(two), correct(three)]; // [5,0,0 ]

  //검사를 한다.
  //for무늘 돌면서 각 수가 최댓값인지를 확인한다.
  //만약에 최댓값이라면 그 수가 들어있는 배열에 인덱스를 answer에 담아서 출력을 한다.

  let max = Math.max(...ans);
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === max) result.push(i + 1);
  }

  return result;
};

console.log(solution([1, 2, 3, 4, 5]));

console.log(solution([1, 2, 3, 4, 5]));

// 1번과는 답을 비교하면 됨
// 5와 8의 최소공배수는 40 (40번 돌려야 함)
// 5와 10의 최소공배수는 20 (20번 돌려야 함)
// 즉, 40번 돌렸을 때 다들 몇 문제 맞췄는지 계산
// 1번의 경우, 인덱스가 모두 일치하면 *10 하는 방식으로 계산하면 됨
// 3번의 경우, 20번 돌렸을 경우 * 2 하는 방식으로 계산하면 됨
