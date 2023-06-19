// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const solution = (nums) => {
  let sums = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sums.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  sums = sums.filter((e) => {
    // 개선 : for(let i = 2; i <= Math.sqrt(e); i++)
    for (let i = 2; i < e; i++) {
      if (e % i === 0) return false;
    }
    return true;
    // 현재는 자연수의 합이라 이 부분이 그냥 return true여도 상관 없지만,
    // 만약 1보다 작은 수가 들어오면 false를 리턴해야 함
    // return e > 1;이 좀 더 많은 케이스 대비 가능
  });

  return sums.length;
};

console.log(solution([1, 2, 7, 6, 4]));

// 주어진 숫자 중 3개의 수를 조합으로 만든다
// 숫자의 합을 구한 뒤, 숫자 합들 중 소수인지 판단하는 로직을 짠다
// 소수인 갯수를 return한다
