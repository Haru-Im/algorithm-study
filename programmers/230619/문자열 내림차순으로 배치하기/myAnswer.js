const solution = (s) => {
  return [...s].sort().reverse().join("");
};

// localeCompare() 사용 못하나?ㅠㅠ

console.log(solution("Zbcdefg"));
