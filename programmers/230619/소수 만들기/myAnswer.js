const solution = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  result = result.reduce((acc, cur) => {
    let sum = cur.reduce((a, c) => a + c, 0);
    return [...acc, sum];
  }, []);

  result = result.filter((e) => {
    if (e < 2) return false;
    for (let i = 2; i < e; i++) {
      if (e % i === 0) {
        return false;
      }
    }
    return true;
  });

  return result.length;
};

console.log(solution([1, 2, 3, 4]));

// 3개 뽑아서 소수가 되는 경우의 개수를 return
// 소수 : 1과 자기 자신만으로 나누어지는 수 (<-> 합성수)

// 소수판별 알고리즘 -> 비효울적인 것부터 가장 효율적인 것
