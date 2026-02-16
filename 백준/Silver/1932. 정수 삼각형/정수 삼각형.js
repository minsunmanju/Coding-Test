const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr[i - 1] = input[i].split(" ").map(Number);
}

const dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));

dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i+1; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][0] + arr[i][0];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
    } else {
      dp[i][j] = Math.max(
        dp[i - 1][j] + arr[i][j],
        dp[i - 1][j - 1] + arr[i][j],
      );
    }
  }
}

console.log(Math.max(...dp[N-1]))