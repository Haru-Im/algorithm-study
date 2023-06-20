// 유클리드 호제법 사용하기

const solution = (n, m) => {
  let answer = [];
  let a = n;
  let b = m;

  while (m != 0) {
    let r = n % m;
    n = m;
    m = r;
  }
  answer[0] = n;
  answer[1] = (a * b) / answer[0];

  return answer;
};

console.log(solution(3, 12));

// 3항연산자를 써서 다시 풀기
