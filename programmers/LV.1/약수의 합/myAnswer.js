const solution = (n) => {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && answer.push(i);
  }
  return answer.reduce((a, b) => a + b, 0);
};

console.log(solution(12));

// 놀라운 사실, n과 i의 순서가 바뀌면 돌아가지 않는다..
