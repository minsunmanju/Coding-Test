
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input)
let dp = Array(100001).fill(0)
dp[1] = 3
dp[2] = 7
dp[3] = 17
for(let i =4; i<N+1; i++){
    dp[i] = (2*dp[i-1] + dp[i-2])%9901
}
console.log(dp[N])