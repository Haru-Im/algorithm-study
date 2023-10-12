var fs = require("fs");
var input = fs
  .readFileSync(
    "/Users/haru/Desktop/algorithm-study/이진탐색(이분탐색)/나무자르기(2805)/input.txt"
  )
  .toString()
  .split("\n");

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const [N, M] = input.shift().split(" ");
const trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const solution = (trees, M) => {
  let start = 0;
  let end = trees[trees.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let x of trees) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= M) {
      answer = mid;
      start = mid + 1;
    } else if (sum < M) {
      end = mid - 1;
    }
  }

  return answer;
};

console.log(solution(trees, M));
