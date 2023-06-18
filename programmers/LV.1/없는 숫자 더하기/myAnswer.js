function solution(numbers) {
  let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return sumArr.reduce((a, b) => a + b, 0) - numbers.reduce((a, b) => a + b, 0);
}
