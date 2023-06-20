// https://school.programmers.co.kr/learn/courses/30/lessons/12921

const solution = (n) => {
  let isPrime = [...Array(n + 1)].fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let primes = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes++;
    }
  }

  return primes;
};

// 중복 fill, filter 써서 리팩토링하기

console.log(Array(5).fill(true).fill(false, 0, 2));
// [ false, false, true, true, true ]
