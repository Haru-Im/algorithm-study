const solution = (nums) => {
  let sums = [];

  // 세 수의 합 구하기
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sums.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  // 소수 판별 로직
  sums = sums.filter((e) => {
    for (let i = 2; i <= Math.sqrt(e); i++) {
      if (e % i === 0) return false;
    }
    return e > 1;
  });

  return sums.length;
};
