//https://school.programmers.co.kr/learn/courses/30/lessons/72410

const solution = (new_id) => {
  new_id = new_id.toLowerCase();

  // 이스케이프 : 대괄호, 슬래시(/) 문자는 대괄호 안에서 특별한 의미 가지므로 문자 그대로 해석 위해서는 이스케이프 필요
  new_id = new_id.replace(/[~!@#$%^&*()=+{}:?,<>\[\]\//]/g, "");
  //   \.으로 . 문자열을 {2,} 2개 이상 있으면 바꾸기
  new_id = new_id.replace(/\.{2,}/g, ".");

  if (new_id.at(0) === ".") new_id = new_id.slice(1);

  if (new_id.length === 0) new_id = "a";

  new_id = new_id.slice(0, 15);

  if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1);

  if (new_id.length < 3) new_id += new_id.at(-1).repeat(3 - new_id.length);

  return new_id;
};

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
// -_.~!@#$%^&*()=+[{]}:?,<>/

// padEnd();
