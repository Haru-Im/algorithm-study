var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const M = input[2];
const arrN = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
const arrM = input[3].split(" ").map((v) => +v);

const solution = (N, arrN, arrM) => {
  const sol = [];
  for (let x of arrM) {
    let min = 0;
    let max = N - 1;
    let answer = 0;

    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      let currentElement = arrN[mid];

      if (currentElement === x) {
        answer = 1;
        break;
      } else if (currentElement > x) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }

    sol.push(answer);
  }

  console.log(sol.join("\n"));
};

solution(N, arrN, arrM);
