const solution = (N, stages) => {
  let arr = [...Array(N)];

  for (let i = 1; i <= N; i++) {
    // 굳이 배열로 저장 안 해도 될듯 ㅠㅠ
    let failedRatio = [0, 0];
    failedRatio[1] = stages.length;
    // 밑에 두 줄을 e와 i가 일치하는 filter로 한 줄로 줄여도 좋았겠다 ㅜㅜ
    stages = stages.filter((e) => e !== i);
    failedRatio[0] = failedRatio[1] - stages.length;
    // 애초에 여기에서 넣어줄 때 배열로 넣어줘도 좋겠다,,
    arr[i - 1] = failedRatio[0] / failedRatio[1];
  }

  arr = arr
    // 만약에 위에서 애초에 배열로 넣어줬으면 이 과정에서 map돌릴 필요가 없어짐
    .map((v, i) => [v, i + 1])
    // sort쓸 때 굳이 이렇게 형태를 다 쓰지 않고 일단 여기 a,b 한다음에
    .sort(([vA, iA], [vB, iB]) => {
      // 이 과정이 필요가 없나보다,, [4,4,4,4] 라면 [0,0,0,1]이 돼서 어차피 걸러짐
      if (vA === vB) return iA - iB;
      // 여기에서 b[1] - a[1] 해도 됨, 당연히. 배열이니까. 하드코딩 ㄴㄴ
      return vB - vA;
    })
    // 이 부분도 동일. 그냥 x => x[0] 하면 됐었다.
    .map(([v, i]) => i);

  return arr;
};

solution(4, [4, 4, 4, 4, 4]);

// stages의 길이 : 도전자 수
// 일단 스테이지를 순서대로 sort시킨 다음, 같은 스테이지의 개수를 세어 실패율을 계산하고,
// 그만큼 빼고 남는 배열의 길이를 활용해 실패욜을 계산한 다음
// 그냥 몽땅 객체에 저장을 해 둘까?
// 아 for문 돌릴 때 N번 돌려야 함.. 없는 번호도 스테이지니까
// 그럼 N만큼 몽땅 객체를 만들어야? 아님 배열로 하고 index로 처리하고 1씩 더해서
// 계산을 하면 되지 멍청아
