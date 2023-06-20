// left(포함) - right(포함)
// 약수 구하는 방법 1) for 문으로 하나씩 돌림 (시간복잡도 많이 늘어날 것 같음)
// 약수 구하는 방법 2)

const solution = (left, right) => {
  const isDivisorOdd = (num) => {
    let divisor = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) divisor++;
    }
    return divisor % 2 === 0;
  };

  const sum = [...Array(right - left + 1)]
    .map((_, i) => i + left)
    .reduce((acc, cur) => {
      acc += isDivisorOdd(cur) ? cur : -cur;
      return acc;
    }, 0);

  return sum;
};

console.log(solution(16, 19));

const isDivisorOdd = (num) => {
  let divisor = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisor++;
  }
  return divisor % 2; //짝수면 0이 나오고 홀수면 1이 나옴
};

// console.log(isDivisorOdd(16));
