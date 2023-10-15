var fs = require("fs");
var input = fs
  .readFileSync(
    "/Users/haru/Desktop/algorithm-study/이진탐색(이분탐색)/나무자르기(2805)/input.txt"
  )
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map((n) => +n);
const trees = input[1]
  .split(" ")
  .map((t) => +t)
  .sort((a, b) => a - b);

const solution = (trees, M) => {
  let min = 0;
  let max = trees[trees.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let sum = 0;

    for (let x of trees) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= M) {
      answer = mid;
      min = mid + 1;
    } else if (sum < M) {
      max = mid - 1;
    }
  }

  return answer;
};

console.log(solution(trees, M)); //7
