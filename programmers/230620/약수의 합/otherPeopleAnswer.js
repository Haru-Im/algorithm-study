// 굳이 배열 안에 넣고 reduce로 더할 필요가 없음

function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
