const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  let num = input[i].split(" ").map(Number);
  arr.push(num);
}

let dp = Array.from(Array(N), () => Array(N).fill(-1n));

const dfs = (x, y) => {
  if (x === N - 1 && y === N - 1) return 1n;
  if (dp[x][y] !== -1n) return dp[x][y];

  dp[x][y] = 0n;

  let jump = arr[x][y];
  if (jump === 0) {
    return dp[x][y];
  }

  let nx = x + jump;
  let ny = y + jump;
  if (nx < N) dp[x][y] += dfs(nx, y);
  if (ny < N) dp[x][y] += dfs(x, ny);

  return dp[x][y];
};

console.log(dfs(0, 0).toString());
