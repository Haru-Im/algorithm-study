var fs = require("fs");
var input = fs
  .readFileSync(
    "/Users/haru/Desktop/algorithm-study/문자열/모음의개수(1264)/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.pop();

const answer = [];

const solution = (input) => {
  const moum = ["a", "e", "i", "o", "u"];

  for (let x of input) {
    let sum = 0;
    const characterArr = x.split("");
    characterArr.map((letter) => {
      if (moum.includes(letter.toLowerCase())) {
        sum++;
      }
    });
    answer.push(sum);
  }
  console.log(answer.join("\n"));
};

solution(input);
