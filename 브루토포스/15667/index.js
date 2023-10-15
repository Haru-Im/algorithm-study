var fs = require("fs");
var input = fs
  .readFileSync(
    "/Users/haru/Desktop/algorithm-study/브루토포스/15667/input.txt"
  )
  .toString();

input = Number(input);

console.log(Math.floor(Math.sqrt(input)));
