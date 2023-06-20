const solution = (a, b) => {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(a, b), lcm(a, b)];
};

//  유클리드 호제법 (gcd, lcm)
