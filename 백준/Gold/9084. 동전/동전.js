const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const coins = input.shift().split(" ").map(Number);
  coins.unshift(0);
  const M = Number(input.shift());

  let dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

  for (let i = 0; i < N + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= coins[i]) {
        dp[i][j] += dp[i][j - coins[i]];
      }
    }
  }
  console.log(dp[N][M]);
}
