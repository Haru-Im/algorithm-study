var fs = require("fs");
var input = fs
  .readFileSync("/Users/haru/Desktop/algorithm-study/소수판정/1978/input.txt")
  .toString()
  .trim()
  .split("\n");

const numArr = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

const solution = (numArr) => {
  const primes = Array(numArr[numArr.length - 1] + 1)
    .fill(true)
    .fill(false, 0, 2);

  let answer = 0;

  for (let i = 2; i * i <= numArr[numArr.length - 1]; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= numArr[numArr.length - 1]; j += i) {
        primes[j] = false;
      }
    }
  }

  for (let x of numArr) {
    if (primes[x]) answer++;
  }

  return answer;
};

console.log(solution(numArr));
