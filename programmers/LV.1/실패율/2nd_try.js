const solution = (N, stages) => {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let tried = stages.length;
    let successed = stages.filter((v) => v === i).length;
    stages = stages.filter((v) => v > i);
    answer.push([i, successed / tried]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
