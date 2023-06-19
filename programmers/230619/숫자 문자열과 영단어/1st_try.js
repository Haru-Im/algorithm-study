// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const solution = (s) => {
  const wordsMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let words = Object.keys(wordsMap);

  words.forEach((e, i) => {
    while (s.includes(e)) {
      s = s.replace(e, wordsMap[e]);
    }
  });

  return +s;
};

solution("23four5six7");

// replaceAll() 로 고쳐보기
// replaceAll 사용 방법
// 정규표현식으로 고칠 수 있음
