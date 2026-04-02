const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let arr = [[0, 0]];

for (let i = 1; i < N + 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  arr.push([A, B]);
}

let dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < K + 1; j++) {
    let weight = arr[i][0];
    let value = arr[i][1];

    if (j < weight) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}

console.log(dp[N][K]);
