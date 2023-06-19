// 대문자는 대문자끼리, 소문자는 소문자끼리?
// 공백은 공백으로
// z -> a 처리하는 로직

const solution = (s, n) => {
  let toCode = [...s].map((e) => e.charCodeAt());

  let toChar = toCode.map((e) => {
    if (e >= 65 && e <= 90) {
      return String.fromCharCode(((e - 65 + n) % 26) + 65);
    } else if (e >= 97 && e <= 122) {
      return String.fromCharCode(((e - 97 + n) % 26) + 97);
    } else {
      return String.fromCharCode(e);
    }
  });

  return toChar.join("");
};

solution("a B z", 4);

console.log("Z".charCodeAt());
console.log(String.fromCharCode(90));
console.log(String.fromCharCode(32));

// 공백은 32
// a의 아스키코드는 97, b는 98... z는 122
// A의 아스키코드는 65, B는 66... Z는 90 n 1 -> 91 -> 65
// 문자를 코드로 변환 -> charCodeAt()
// 코드를 문자로 변환 -> String.fromCharCode()

// Z가 90 만약 n을 더했을 때 벗어나면 다시 A(65)로 돌아가야함
// 65 % 25 ? ??
// (e + n)
// 1칸 이동, 90 -> 91 (???) -> 65

s = "AB";
n = 1;
answer = "";
for (let i = 0; i < s.length; i++) {
  charCode = s.charCodeAt(i) + n;
  if (s[i] === " ") answer += " ";
  else if (charCode > 122) 96 + n;
  else if (charCode > 90 && charCode < 97) 64 + n;
  s[i] = String.fromCharCode(charCode);
}
console.log(s);

// function solution(s, n) {
//   var chars =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
//   return s
//     .split("")
//     .map((e) => {
//       return e === " " ? " " : chars[chars.indexOf(e) + n];
//     })
//     .join("");
// }
