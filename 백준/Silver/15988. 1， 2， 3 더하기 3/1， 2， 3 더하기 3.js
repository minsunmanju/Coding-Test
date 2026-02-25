const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input[0];
let max = Math.max(...input);
let dp = Array(max + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let j = 4; j < max + 1; j++) {
  dp[j] = (dp[j - 3] + dp[j - 2] + dp[j - 1]) % 1000000009;
}

for (let i = 1; i < T + 1; i++) {
  let num = Number(input[i]);
  console.log(dp[num]);
}
