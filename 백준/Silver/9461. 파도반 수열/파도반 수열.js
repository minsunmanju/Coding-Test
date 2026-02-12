const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])

let dp = Array(100).fill(0)
dp[1] =1;
dp[2] =1;
dp[3] =1;
for(let i = 4; i<=100; i++){
    dp[i] = dp[i-3] +dp[i-2]
}

for(let i =1; i<N+1; i++){
    const num = Number(input[i])
    console.log(dp[num])
}