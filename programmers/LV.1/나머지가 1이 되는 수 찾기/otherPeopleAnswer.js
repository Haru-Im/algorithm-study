function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

// 특이포인트 :
// 1. while문에서 x를 증가시킬 수 있다
// 2. 처음 solution함수의 인자에는 n밖에 주지 않을건데 x에 기본값을 줘서 저렇게 푸는 방법도 있음
