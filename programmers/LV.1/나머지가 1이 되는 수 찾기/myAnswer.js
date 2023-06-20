const solution = (n) => {
  let answer = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
};

// 수정해야할 점 : break; 굳이 쓰지 않고 answer 변수 굳이 만들지 않고
// return i; 하면 끝날 문제

solution(10);

// 나머지가 1이라는말?
// x는 2부터 시작해서 나눴을 때 나머지가 0이 아닌 최초의 수
// 이 조건을 만족하면 반복문을 종료하고 바로 x를 반환하면 됨
